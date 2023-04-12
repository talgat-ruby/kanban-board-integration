package config

import (
	"os"

	"github.com/joho/godotenv"

	"github.com/talgat-ruby/kanban-board-api/internal/constant"
)

func getEnv() constant.Environment {
	switch os.Getenv("ENV") {
	case "PROD":
		return constant.EnvironmentProd
	case "DEV":
		return constant.EnvironmentDev
	case "TEST":
		return constant.EnvironmentTest
	default:
		return constant.EnvironmentLocal
	}
}

func (c *Config) loadDotEnvFiles() error {
	switch c.Env {
	case constant.EnvironmentProd:
		return godotenv.Load(".env", ".env.prod")
	case constant.EnvironmentDev:
		return godotenv.Load(".env", ".env.dev")
	case constant.EnvironmentTest:
		return godotenv.Load(".env", ".env.test")
	case constant.EnvironmentLocal:
		return godotenv.Load(".env", ".env.local")
	default:
		return nil
	}
}
