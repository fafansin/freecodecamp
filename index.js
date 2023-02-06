function diffArray(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  const filtered =  merged.filter((item, index, self) => (self.indexOf(item) != index));
  const newArr = [];
  for(let item of merged) {
    let found = false;
    for(let fil of filtered){
      if(item == fil){
        found = true;
      }
    }
    if(found == false){
      newArr.push(item);
    }
  }
  return newArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));