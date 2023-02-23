/**
 *  Missing letters
 * 
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  // console.log(alphabet[str.length-1])
  alphabet = alphabet.substring(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length-1]) + 1);
  for(const ltr of alphabet){
    if(!str.includes(ltr)){
      return ltr;
    }
  }
  return undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));