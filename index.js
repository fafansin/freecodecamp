// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(prop == 'tracks'){
      if(value != ''){
        if(records[id].tracks){
          records[id].tracks.push(value);
        }else{
          records[id].tracks = [value];      
        }
      }
    }else{
      if(value != ''){
        records[id][prop] = value;
      }
    }
    if(value == ''){
      delete records[id][prop];
    }
    return records;
  }
  
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//   updateRecords(recordCollection, 1245, 'artist', '');
//   console.log(recordCollection);
function loop(){
    let myArray = [];

    let i = 5;
    while(i >= 0){
        console.log(i);
        myArray.push(i);
        i--;
    }
    console.log(myArray);
}

// loop();


function sum(arr, n) {
    if(n <= 0){
        return 0;
    }else{
        return sum(arr, n-1) + arr[n-1];
    }
}

function dummy(arr, n){
    let total = 0;
    for(let i=0; i < n; i++){
        total += arr[i];
    }
    return total;
}

// let ref = sum([2, 3, 4, 5], 3);
// // console.log(ref);
// console.log(sum([1], 0));
// console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));


// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let found = false;
  let i = 0;
  while (found == false && i < contacts.length){
    if(contacts[i].firstName == name){
      found = true;
      if(contacts[i][prop]){
        return contacts[i][prop];
      }else{
        return "No such property";
      }
    }
    i++;
  }
  if(!found){
    return "No such contact";
  }
}
// let ref = lookUpProfile("Kristian", "lastName");
// let ref = lookUpProfile("Sherlock", "likes");
// let ref = lookUpProfile("Harry", "likes");
// let ref = lookUpProfile("Akira", "likes");
// console.log(ref);


function countdown(n){
  if(n < 1){
    return [];
  }else{
    const ref = countdown(n-1);
    ref.unshift(n);
    return ref;
  }  
}

// console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum){
    return [];
  }else{
    const ref = rangeOfNumbers(startNum, endNum - 1);
    ref.push(endNum);
    return ref;
  }
};

// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(6, 9));
// console.log(rangeOfNumbers(4, 4));
const s = "Rivka Dela Cruz";
rgx = /(Laviel|Rivka)( \w{1}.|) Dela Cruz/;
console.log(s.match(rgx));
console.log(rgx.test(s));





