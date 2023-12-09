/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if(str1.length!=str2.length){
      return false;
    }

    let n = str1.length;

    //\s removes spaces; g is to show global
    let var1= str1.replace(/\s/g, '').toLowerCase();
    let var2= str2.replace(/\s/g, '').toLowerCase();
    const map1 = new Map();

    for( let i = 0 ; i< n ; i++ ){
      
      if( var1[i] == " " ){
        continue;
      }

      if(map1.has(var1[i])){
        let value = map1.get(var1[i]);
        map1.set( var1[i] , value + 1 );
      }else{
        map1.set( var1[i] , 1 );
      }
    }

    for( let j = 0 ; j < n ; j++ ){
      if( !map1.has(var2[j]) || map1.get(var2[j]) == 0 ){
        return false;
      }else if( var2[j] == " " ){
        continue;
      }else{
        let val = map1.get(var2[j]);
        map1.set( var2[j] , val - 1 );
      }
    }

    return true;

}

console.log(isAnagram("abc","abc"));

module.exports = isAnagram;
