// Coding Challenge
// Day 012/366
// Count the number of cubes with paint on | 8 kyu
/*
Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

Examples:
If we cut the cube 2 times, the function should return 26
If we cut the cube 4 times, the function should return 98

*/


function countSquares(cuts) {
  if(cuts == 0){
    return 1;
  } else {
    return  (6 * cuts ** 2) + 2;
  }
}

// function countSquares(cuts) {
//   if (!cuts) {
//     return 1;
//   }

//   const totalCubes = Math.pow(cuts + 1, 3);
//   console.log(totalCubes);
//   const innerCubes = Math.pow(cuts - 1, 3);
//   console.log(innerCubes);
  
//   return totalCubes - innerCubes;
// }

console.log(countSquares(16)); 

/*
  Math.pow adalah fungsi bawaan Javascript yang digunakan untuk mengembalikan hasil dari perpangkatan suatu bilangan. cara menggunakannya adalah Math.pow(x, y). x, y disini adalah bilangan/angka. x mewakili angka yang akan di pangkatkan, dan y adalah bilangan pangkat yang diinginkan.

  contoh :
  console.log(Math.pow(2, 3)); // Output: 8, karena 2 dipangkatkan dengan 3 adalah 2 * 2 * 2 = 8
  console.log(Math.pow(5, 2)); // Output: 25, karena 5 dipangkatkan dengan 2 adalah 5 * 5 = 25

*/

