/**
 *  Telephone Number Validator
 * 
 *  Return true if the passed string looks like a valid US phone number.
 * 
 */

function telephoneCheck(str) {
  let process = false;
  
  if(/^[0-9\(]/.test(str)){
    process = true;
  }else{
    return false;
  }
  if(/(?<=\d)\)/.test(str) || /\((?=\d)/.test(str)){
    // if(/(?<=\d)\)/.test(str) && /\((?=\d)/.test(str)){
    if(/\(\d{3}\)/.test(str)){
      process = true;
    }else{
      return false;
    }
  }else{
    process = true;
  }
  //
  if(/[?]/g.test(str)){
    return false;
  }
  if(process){
    let clean = str.replace(/\D/g, '');
    return ((clean.length == 11 && clean[0] === "1") || clean.length == 10);
  }
  return process;
  // console.log(clean)
  // console.log("testig", "-1" == "1")
  // return ((clean.length == 11 && clean[0] === "1") || clean.length == 10);
}

console.log(telephoneCheck("55 55-55-555-5"));
console.log(telephoneCheck("(555)5(55?)-5555"));
console.log(telephoneCheck("1 (555)555-5555"));
console.log(telephoneCheck("1 (555555)-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (31)555-5555"));
console.log(telephoneCheck("1(7 576 227382"));
console.log(telephoneCheck("(1 757) 622-7382"));