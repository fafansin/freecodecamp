/**
 *  Drop it
 * 
 *  Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
 *  until the function func returns true when the iterated element is passed through it.
 * 
 *  Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */

function dropElements(arr, func) {
  let bypass = false;
  let ref = [];
  for(let item of arr){
    if(func(item) || bypass ){
      bypass = true;
      ref.push(item)
    }
  }
  return ref;
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
