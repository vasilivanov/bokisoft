package greetings

import (
	"fmt"
)

func Greet(name string) string {
	return fmt.Sprintf("Hello, %v! How are you?", name)
}
