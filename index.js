function sumAll(arr) {
  const sorted = arr.sort((a,b) => (a-b));
  console.log(sorted);
  let sum = 0;
  for(let i=sorted[0]; i <= sorted[1]; i++){
    sum += i;
  }
  return sum;
  
}

console.log(sumAll([10, 5]));