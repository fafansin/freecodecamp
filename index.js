/**
 *  Smallest Common Multiple
 * 
 *  Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
 *  as well as by all sequential numbers in the range between these parameters.
 *  The range will be an array of two numbers that will not necessarily be in numerical order.
 *  
 *  For example, if given 1 and 3, 
 *  find the smallest common multiple of both 1 and 3 that is also evenly 
 *  divisible by all numbers between 1 and 3. The answer here would be 6.
 */

function smallestCommons(arr) {
  let sorted = arr.sort((a,b) => a-b);
  let nums = [];

  for(let num = sorted[0]; num <= sorted[1]; num++){
    nums.push(num);
  }
  let min = nums[0];
  let passed = false;

  while(!passed){
    if(nums.map(num => min % num == 0).every(item => item )){
      passed = true;
      return min;
    }
    min++;
  }
}

console.log(smallestCommons([1,3]));