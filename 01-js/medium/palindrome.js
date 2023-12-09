/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  //\s - spaces; [^a-zA-Z0-9] - recognizes special characters
  let ans = str.replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let n = ans.length;

  if(n == 0 || n == 1){
    return true;
  }

  for( let i = 0; i < n/2; i++ ){
    if( ans[i] != ans[n-1-i]){
      return false;
    }
  }
  
  return true;
}

module.exports = isPalindrome;
