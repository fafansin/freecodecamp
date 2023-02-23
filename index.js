/**
 *  Convert HTML Entities
 * 
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
  const ref = {
          '&' : '&amp;', 
          '<' : '&lt;',
          '>' : '&gt;',
          "'" : '&apos;',
          '"' : '&quot;'
        }
  return Object.keys(ref).reduce((final, item) => {
    return final.replaceAll(item, ref[item]);
  }, str);
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));