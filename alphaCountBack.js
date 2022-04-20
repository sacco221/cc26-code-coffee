/*
Alphabet Count Backwards
Write a function called alphaCountBack that takes in a string that is a single letter. 
Return a string that is all the letters of the alphabet in a sequence counting backwards to the letter a. 
These should be uppercase if the original letter is uppercase, lowercase if it is lowercase.

Examples:
alphaCountBack("e") should return "edcba"
alphaCountBack("J") should return "JIHGFEDCBA"
*/

const alphaCountBack = (letter) => {
    let result = "";
    let lowerCase = "zyxwvutsrqponmlkjihgfedcba";
    let upperCase = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    if (letter.toUpperCase() === letter){ 
        index = upperCase.indexOf(letter);
        result = upperCase.slice(index, upperCase.length);
    } else { 
        index = lowerCase.indexOf(letter);
        result = lowerCase.slice(index, lowerCase.length);
    }
    return result;
  };
  
//Secret Code: B7659E13


