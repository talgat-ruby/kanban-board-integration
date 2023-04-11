package config

import (
	"context"
	"flag"

	"github.com/talgat-ruby/kanban-board-api/internal/constant"
)

type SharedConfig struct {
	Port int    `env:"PORT,default=80"`
	Host string `env:"HOST"`
}

type Config struct {
	Env constant.Environment
	Api *ApiConfig
}

func NewConfig(ctx context.Context) (*Config, error) {
	conf := &Config{
		Env: getEnv(),
	}

	_ = conf.loadDotEnvFiles()

	// Api config
	if c, err := newApiConfig(ctx); err != nil {
		return nil, err
	} else {
		conf.Api = c
	}

	flag.Parse()

	return conf, nil
}
