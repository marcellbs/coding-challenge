// Coding Challenge
// Day 008/366
// Reversed String| 8 kyu

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Solution 1

function solution(str){
  return str.split('').reverse().join('');
}

function solution2(str){
  let currentString = str;
  let newString = '';

  for(let i=str.length-1; i>=0; i-- ){
    newString = newString + currentString[i];
  }

  return newString;
}
console.log(solution("world"))
console.log(solution2("world"))