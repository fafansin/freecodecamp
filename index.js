/**
 *  Roman Numeral Converter
 * 
 *  Convert the given number into a roman numeral
 */

function getSymbol(divident, divisor){
  const data = {
    1:'I',
    5:'V',
    10:'X',
    50:'L',
    100:'C',
    500:'D',
    1000:'M'
  }
  let s = '';
  //
  let curr = data[divisor];
  let half = data[divisor * 5];
  let up = data[divisor * 10];
  //
  let reps = '';
  
  if(divident > 0){
    if(divident == 9){
      s = curr + up;
    }else if(divident >= 5){
      s = half;
      s += repeater(curr, divident-5);
    }else if(divident == 4){
      s = curr + half;
    }else{
      s += repeater(curr, divident);
    }
  }
  return s;
  
}

function repeater(symbol, times){
  let ref = '';
  for(let i=1; i<= times; i++){
    ref += symbol;
  }
  return ref;
}
function convertToRoman(num) {
  let magic = '';
  let divisor = 1000;
  while(divisor >= 1){
    let divident = Math.floor(num/divisor);
    if(divident >= 1){
      magic += getSymbol(divident, divisor);
    }else{
    }
    num -= divident * divisor;
    divisor /= 10;
  }
  return magic;

 }
 
//  console.log(convertToRoman(3946));
 console.log(convertToRoman(3999));