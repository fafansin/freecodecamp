/**
 *  Steamroller
 * 
 *  Flatten a nested array. You must account for varying levels of nesting.rwise, arr should be returned as an empty array.
 */

function steamrollArray(arr, flat = []) {
  for(let item of arr){
    if(Array.isArray(item)){
      steamrollArray(item, flat);
    }else{
      flat.push(item);
      console.log(item)
    }
  }
  return flat;
}



console.log(steamrollArray([1, [2], [3, [[4]]]]));