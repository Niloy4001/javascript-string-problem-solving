// ### Task-4: 
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let originalString = "X-ray Xerox Xeric xenon xylem xebec xyster xylose";

if(originalString.includes('x') === true && originalString.includes('X') === true){
   let newString = originalString.replaceAll('x', 'y').replaceAll('X', 'Y') ;

     console.log(newString);
}