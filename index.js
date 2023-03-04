/**
 *  Telephone Number Validator
 * 
 *  Return true if the passed string looks like a valid US phone number.
 * 
 */

function telephoneCheck(str) {
  console.log(str);
  

    // conditions for 11 digits
    const clean = str.replace(/\D/g,'');
    if(clean.length === 11 && str[0] != 1){
      return false;
    }
    if(clean.length > 11 || clean.length < 10){
      return false;
    }
    
    if(/^1( |-)\d{3}( |-)\d{3}( |-)\d{4}/.test(str)){
      return true;
    }
    if(/^1( |-)\(\d{3}\)( |-)\d{3}( |-)\d{4}/.test(str)){
      return true;
    }

    // conditions for 10 digits
    if(/(?<=\()\d{4,}\)/.test(str)){
      return false;
    }
    if(/\d{10}/.test(str)){
      console.log('hayups')
      return true;
    }

    if(/\d{3}( |-)\d{3}( |-)\d{4}/.test(str)){
      if(/\(|\)/.test(str)){
          if(!/\(\d{3}\)/g.test(str)){
            console.log('mali number sa loob', str);
            return false;
          }
        }
      console.log('tag sampu')
      return true;
    }
    if(/\(\d{3}\)\d{3}( |-)\d{4}/.test(str)){
      return true;
    }

  return false;
  // /\d{3}( |-)/a
  //
  // let clean = str.replace(/\D/g, '');
  
  // //check for length first
  // if(clean.length < 10 || clean.length > 11 ){
  //   console.log('mali ang dami', str)
  //   return false;
  // }

  // //check if first character is "-";
  // if(str[0] === '-'){
  //   console.log('may - sa umpisa', str);
  //   return false;
  // }

  // //check for parenthesis
  
  // if(/\(|\)/.test(str)){
  //   if(str.match(/\(/g) && str.match(/\(/g).length > 1){
  //     console.log("sobra sa (", str);
  //     return false
  //   }
  //   // if(str.match(/\)/g) && str.match(/\)/g).length > 1){
  //   //   console.log("sobra sa )")
  //   //   return false;
  //   // }
  //   if(!/\(\d{3}\)/g.test(str)){
  //     console.log('mali number sa loob', str);
  //     return false;
  //   }
  // }
  
  // // para madaling i-check;
  // if(clean.length > 10 && clean[0] != 1){
  //   console.log("mali ang 1st digit", str)
  //   return false;
  // }
  
  // return {str:str,sagot:true};

  
}

//
console.log(telephoneCheck("5555555555") );
console.log(telephoneCheck("555-555-5555") );
console.log(telephoneCheck("555 555 5555") );
console.log(telephoneCheck("(555)555-5555") );
console.log(telephoneCheck("1 555 555 5555") );
console.log(telephoneCheck("1 555-555-5555") );
console.log(telephoneCheck("1 (555) 555-5555") );
console.log(telephoneCheck("1(555)555-5555") );
console.log(telephoneCheck("1 456 789 4444") );


// //false
// console.log(telephoneCheck("555-5555") );
// console.log(telephoneCheck("123**&!!asdf#") );
// console.log(telephoneCheck("1 555)555-5555") );
// console.log(telephoneCheck("5555555") );
// console.log(telephoneCheck("55555555") );
console.log(telephoneCheck("(6054756961)") );
// console.log(telephoneCheck("2 (757) 622-7382") );
// console.log(telephoneCheck("0 (757) 622-7382") );
console.log(telephoneCheck("-1 (757) 622-7382") );
console.log(telephoneCheck("2 757 622-7382") );
// console.log(telephoneCheck("10 (757) 622-7382") );
console.log(telephoneCheck("27576227382") );
// console.log(telephoneCheck("(275)76227382") );
console.log(telephoneCheck("2(757)6227382") );
// console.log(telephoneCheck("2(757)622-7382") );
// console.log(telephoneCheck("555)-555-5555") );
console.log(telephoneCheck("(555-555-5555") );
// console.log(telephoneCheck("(555)5(55?)-5555") );
// console.log(telephoneCheck("55 55-55-555-5") );
console.log(telephoneCheck("11 555-555-5555") );