// Coding Challenge
// Day 001/366
// Reduce BUt Grow | 8 kyu

// Test Case Description
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Solution 1
// function grow(x) {
//   let result = x[0];

//   for(i=1; i < x.length; i++){
//     result *= x[i];
//   }

//   return result;
// }


// Solution 2
function grow(x){
  return x.reduce((acc, curr) => acc * curr, 1);
}

console.log(grow([2,2,2,2,2,2]))


