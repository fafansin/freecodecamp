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
          '"' : '&quot;'
        }
  
  return str.includes('&') ? str.replace('&', ref['&']) : str;
}

console.log(convertHTML("Dolce & Gabbana"));