// Coding Challenge
// Day 011/366
// Beginner Series #3 Sum of Numbers | 7 kyu

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!


function getSum( a,b )
{
  let min = Math.min(a, b)
  let max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}


console.log(getSum(505, -1));



// Solusi lain
function GetSum(a, b) {
  return (a+b)*(Math.abs(a-b)+1)/2;
}

console.log(GetSum(505, -1));

// console.log(Math.abs(1-(-2)));
