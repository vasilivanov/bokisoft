package hello

import (
	"fmt"
	"greetings"
	//"greetings/sum"
	"runtime"
)

func main() {
	fmt.Printf(greetings.Greet("Penchev1"))
	fmt.Printf(greetings.Greet("Penchev2"))
	fmt.Printf(greetings.Greet("Penchev3"))
	//fmt.Printf("%v", sum.Sum(5))

	fmt.Print("Go runs on ")
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.\n", os)
	}
}
