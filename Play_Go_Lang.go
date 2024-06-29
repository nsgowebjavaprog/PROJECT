// Game

package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	fmt.Println("Switch and case in Go-Lang")

	rand.Seed(time.Now().UnixNano())
	dice_num := rand.Intn(10) + 1
	fmt.Println("Value of Dice is: ", dice_num)

	// output: Switch and case in Go-Lang
	//         Value of Dice is:  7

	switch dice_num {
	case 1:
		fmt.Println("Sice num is 1 You can open1")
	case 2:
		fmt.Println("Sice num is 2 You can open2")
	case 3:
		fmt.Println("Sice num is 3 You can open3")
	case 4:
		fmt.Println("Sice num is 4 You can open4")
	case 5:
		fmt.Println("Sice num is 5 You can open5")
	case 6:
		fmt.Println("Sice num is 6 You can open6")
	case 7:
		fmt.Println("Sice num is 7 You can open7")
	case 8:
		fmt.Println("Sice num is 8 You can open8")
	case 9:
		fmt.Println("Sice num is 9 You can open9")
	case 10:
		fmt.Println("Sice num is 10 You can open10")
	default:
		fmt.Println("Between 1 and 10 only")
		fmt.Print("Thank You Win")
	}
}

/*
Switch and case in Go-Lang
Value of Dice is:  6
Sice num is 6 You can open6
*/
