package log

import (
	"github.com/sirupsen/logrus"

	"github.com/talgat-ruby/kanban-board-api/config"
	"github.com/talgat-ruby/kanban-board-api/internal/constant"
)

func Conf(conf *config.Config) {
	if conf.Env != constant.EnvironmentLocal {
		logrus.SetFormatter(&logrus.JSONFormatter{})
	}
}
