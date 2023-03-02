/**
 *  Roman Numeral Converter
 * 
 *  Convert the given number into a roman numeral
 */

function convertToRoman(num) {
  const data = {
    1:'I',
    4:'IV',
    5:'V',
    9:'IX',
    10:'X',
    40:'XL',
    50:'L',
    90:'XC',
    100:'C',
    400:'CD',
    500:'D',
    900:'CM',
    1000:'M'
  }
  let str = '';
  const divK = Math.floor(num/1000);
  if( divK > 0){
    for(let i=1; i<= divK; i++){
      str += 'M';
    }
    num = num - (divK * 1000);
  }
  console.log('Thousands ', num)

  const divH = Math.floor(num/100);
  if(divH > 0){
    if( divH == 9){
      str += 'CM';
    }else if( divH >= 5){
      str += 'D';
      for(let i=1; i<= divH - 5; i++){
        str += 'C';
      }
    }else if(divH == 4){
      str += 'CD';
    }else{
      for(let i=1; i<= divH; i++){
        str += 'C';
      }
    }
    num = num - (divH * 100);
  }
  console.log('Hundreds ', num)
  
  const divT = Math.floor(num/10);
  console.log(divT)
  if(divT > 0){
    if( divT == 9){
      str += 'XC';
    }else if( divT >= 5){
      str += 'L';
      for(let i=1; i<= divT - 5; i++){
        str += 'X';
      }
    }else if(divT == 4){
      str += 'XL';
    }else{
      for(let i=1; i<= divT; i++){
        str += 'X';
      }
    }
    num = num - (divT * 10);
  }

  const divO = Math.floor(num/1);
  if(divO > 0){
    if( divO == 9){
      str += 'IX';
    }else if( divO >= 5){
      str += 'V';
      for(let i=1; i<= divO - 5; i++){
        str += 'I';
      }
    }else if(divO == 4){
      str += 'IV';
    }else{
      for(let i=1; i<= divO; i++){
        str += 'I';
      }
    }
  }
  

  return str;
 }
 
//  console.log(convertToRoman(3946));
 console.log(convertToRoman(500));