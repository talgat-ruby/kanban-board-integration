package main

import (
	"context"

	"github.com/sirupsen/logrus"

	"github.com/talgat-ruby/kanban-board-api/cmd/api"
	configs "github.com/talgat-ruby/kanban-board-api/config"
	"github.com/talgat-ruby/kanban-board-api/internal/constant"
	llog "github.com/talgat-ruby/kanban-board-api/internal/log"
)

func main() {
	ctx, cancel := context.WithCancel(context.Background())

	// conf
	conf, err := configs.NewConfig(ctx)
	if err != nil {
		logrus.Panic(err)
	}

	// setup logger
	llog.Conf(conf)

	// configure gateway service
	a := &api.Api{
		Log:  logrus.WithField("service", constant.Api),
		Conf: conf.Api,
	}
	// start gateway service
	a.StartServer(ctx, cancel)

	<-ctx.Done()
	// your cleanup tasks go here
	logrus.Info("cleaning up ...")

	logrus.Info("server was successful shutdown.")
}
