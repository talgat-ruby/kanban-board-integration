package router

import "github.com/gofiber/fiber/v2"

func (r *Router) ping(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "pong"})
}
