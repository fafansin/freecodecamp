/**
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
 * In other words, return the symmetric difference of the two arrays.
 * Note: You can return the array with its elements in any order.
 */

function diffArray(arr1, arr2) {
    const newArr = [...arr1, ...arr2];

    return newArr.reduce((unique, item, index, arr) => {
        console.log(item);
        console.log('Current Index: ' + index);
        console.log('Index Of: ' + arr.indexOf(item))
        unique.push(item);
        return unique;
    }, [])

    // return newArr.filter((item, index, arr) => {
    //     if(arr.indexOf(item) != index){
    //         return item;
    //     }
    //     console.log(arr.indexOf(item));

    //     // console.log(item);
    // })
    
    // return newArr;
  }
  
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));