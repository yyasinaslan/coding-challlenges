/*
The weight of an array is defined as the length of the most frequently occurring integer in the array.

Create a function that returns the length of the smallest subarray, with consecutive elements, 
from a given array, such that the weight of subarray is equal to weight of the given array.

*/

/**
 * @param {number[]} k
 */
function subarrayLegnth(k) {
  // Your code here
}

// Test cases
console.log(subarrayLegnth([2, 4, 6, 8, 2, 6, 8, 8]));
// Should return { weight: 3, subarraySize: 5 }

console.log(subarrayLegnth([1, 2, 2, 4, 1]));
// Should return { weight: 2, subarraySize: 2 }

console.log(subarrayLegnth([5, 10, 15, 20, 5, 10]));
// Should return { weight: 2, subarraySize: 5 }
