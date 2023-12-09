/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    if(numbers.length < 1 ){
        return;
    }

    let ans=-10000;
    for(let i=0;i<numbers.length;i++){
        if( numbers[i] > ans ){
            ans = numbers[i];
        }
    }

    return ans;
}

//const arr=[1,2,3,4,5];

//console.log(findLargestElement(arr));

module.exports = findLargestElement;