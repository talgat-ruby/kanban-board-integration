package router

import (
	"context"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

type Router struct{}

func (r *Router) Setup(ctx context.Context, app *fiber.App) {
	// match any request
	app.Use(func(c *fiber.Ctx) error {
		c.SetUserContext(ctx)
		return c.Next()
	})

	api := app.Group("/", logger.New())
	api.Get("/ping", r.ping)
}
