package api

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"

	"github.com/talgat-ruby/kanban-board-api/router"

	configs "github.com/talgat-ruby/kanban-board-api/config"
)

const idleTimeout = 5 * time.Second

type Api struct {
	Log  *logrus.Entry
	Conf *configs.ApiConfig
}

func (a *Api) getServer(ctx context.Context) *fiber.App {
	app := fiber.New(fiber.Config{
		IdleTimeout: idleTimeout,
	})

	r := router.Router{}
	r.Setup(ctx, app)

	return app
}

func (a *Api) StartServer(ctx context.Context, cancel context.CancelFunc) {
	app := a.getServer(ctx)

	addr := fmt.Sprintf("%s:%d", a.Conf.Host, a.Conf.Port)

	// listen from a different goroutine
	go func() {
		if err := app.Listen(addr); err != nil {
			a.Log.Panicf("server error: %v %T", err, err)
		}
	}()

	shutdown := make(chan os.Signal, 1)   // Create channel to signify a signal being sent
	signal.Notify(shutdown, os.Interrupt) // When an interrupt is sent, notify the channel

	go func() {
		_ = <-shutdown

		a.Log.Warn("gracefully shutting down...")
		if err := app.Shutdown(); err != nil {
			a.Log.Errorf("server shutdown error: %v %T", err, err)
		}

		cancel()
	}()
}
