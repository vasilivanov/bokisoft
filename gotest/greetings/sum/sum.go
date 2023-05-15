package sum

func Sum(limit int) int {
   sum := 0
   for i:=1; i<=limit; i++ {
        sum += i
   }
   return sum
}