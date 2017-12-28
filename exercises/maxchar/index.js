// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const mapChar = {};
    let maxNum = 0
    let maxChar = ""
    
    for(let i = 0; i < str.length; i++) {
      if(mapChar[str[i]]) {
        mapChar[str[i]]++
      } else {
        mapChar[str[i]] = 1
      }
    }
    
    for(let i in mapChar) {
      if(mapChar[i] > maxNum) {
        maxNum = mapChar[i]
        maxChar = i
      }
    }
    return maxChar
}

module.exports = maxChar;
