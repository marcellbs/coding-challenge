// Coding Challenge
// Day 004/366
// Sum without highest and lowest number | 8 kyu

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

//Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input Validation
//If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// Solution
function sumArray(array){
  if(!array) return 0;
  if(array.length < 3) return 0;
  // urutkan array dari terkecil hingga ke besar
  const sorted = array.sort( (a, b) => a - b );
  // potong array pertama dan terakhir | 1, 1, 2, 3, 11
  // kemudian potong array pertama dan terakhir | 1,2,3
  // kemudia jumlahkan menggunakan reduce | 6
  return sorted
  .slice(1, -1)
  .reduce((total, current) => total + current)
}


console.log(sumArray([1, 1, 11, 2, 3 ]));
