/**
 *  Spinal Tap Case
 * 
 *  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */
function spinalCase(str) {
    // return str.replace(/_/g,'-');
    return str.replace(/_/g,'-').match(/([A-Z]+|[A-Z]?[a-z]+)(?=[A-Z]|\b)+/g).join('-').toLowerCase();
}
  
console.log(spinalCase('This_Is_Spinal-Tap'));
console.log(spinalCase('AllThe-small Things'));