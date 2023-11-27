/*

Challenge: Palindrome Checker
Write a function that checks whether a given string is a palindrome or not. 
A palindrome is a word, phrase, number, or other sequence of characters that 
reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

For example:

"radar" is a palindrome
"A man, a plan, a canal, Panama!" is a palindrome
"hello" is not a palindrome
Your function should return true if the input is a palindrome and false otherwise.
*/

/**
 * 
 * @param {string} str 
 * @returns 
 */
function isPalindrome(str) {
  // Your code here
  let a = str.replaceAll(/[^A-Za-z0-9]/g,'').toLowerCase();
  const b = Array.from(a).reverse().join('')

  return b == a;
}

// Test cases
console.log(isPalindrome("radar")); // Should return true
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Should return true
console.log(isPalindrome("hello")); // Should return false
