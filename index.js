/**
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
 * In other words, return the symmetric difference of the two arrays.
 * Note: You can return the array with its elements in any order.
 */

function diffArray(arr1, arr2) {
    const newArr = [...arr1, ...arr2];
    const ref = [];
    for(let i=0; i < newArr.length; i++){
        let item = newArr[i];
        let found = false;
        for(let j = 0; j< newArr.length; j++){
            if(item == newArr[j] && i != j){
                found = true;
                break;
            }
        }
        if(!found){
            ref.push(item);
        }
    }
    return ref;
    
  }
  
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
//   console.log(diffArray(["a", "b", "c"], ["a", "c"]));