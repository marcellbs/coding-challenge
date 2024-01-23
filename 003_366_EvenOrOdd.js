// Coding Challenge
// Day 003/366
// Even or Odd | 8 kyu

// Test Case Description
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Solution 1
// function evenOrOdd(number) {
//   if(number % 2 == 0){
//     return "Even"
//   } else {
//     return "Odd"
//   }
  
// }

// Solution 2
function evenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(9));