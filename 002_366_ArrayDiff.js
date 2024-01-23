// Coding Challenge
// Day 002/366
// ArrayDiff | 6 kyu

// Test Case Description
// Implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// Solution
function arrayDiff(a, b) {
  let result = [];
  
  if(a.length === 0){return []}
  if(b.length === 0){return a}

  a.forEach(function included(e){
    if(!b.includes(e)){
      result.push(e);
    }
  })

  return result;
  
}

console.log(arrayDiff([1,2,3],[1,2]));