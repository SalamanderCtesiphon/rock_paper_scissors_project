//fizzbuzz print all numbers from one to one hundred. If the number is divisible by three print fizz. If the number is divisible by five print buzz. And if the number is both divisible by three and five print fizzbuzz.

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

fizzbuzz(10000)
