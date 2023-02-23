/**
 *  Sum All Odd Fibonacci Numbers
 * 
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * 
 * The first two numbers in the Fibonacci sequence are 1 and 1. 
 * Every additional number in the sequence is the sum of the two previous numbers. 
 * The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * 
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 */

function sumFibs(number) {
  let n1 = 0; 
  let n2 = 1;
  let next;
  let sum = 0;

  while(n2 <= number){

    next =  n1 + n2;
    n1 = n2;
    n2 = next;
    
    if(n1 %2 > 0){
      console.log(n1);
      sum += n1;
    }
  }
  return sum;
}

console.log('answer ', sumFibs(10));