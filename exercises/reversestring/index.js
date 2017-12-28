// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // First Answer
    return str.split("").reverse().join("")

    //Second Answer not using reverse method
    // let reverseArr = '';
    // for(var i = 0; i < str.length; i++) {
    //     reverseArr = str[i] + reverseArr
    // }
    // return reverseArr;

    // Third Answer
    // return str.split("").reduce((rev, char) => char + rev)
}

module.exports = reverse;
