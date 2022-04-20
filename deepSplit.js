/*
Deep Split
Write a function called deepSplit that takes in a list of strings and a separator.
The strings may possibly contain the separator. Return a single flattened list of
 individual strings that have been split using the separator.


Example
deepSplit(["abc#def", "ghi", "123#456#789"], "#") should return 
["abc", "def", "ghi", "123", "456", "789"]
*/

// investigate if each element of a given array has "sep".
// if not, pass the element itself to resultArray
// if yes, investigate each letter of element
// add tempStr (tempStr += letter) until find the separator
// when find the separator, 
// 1. tempStr put into a resultArray and initialize tempStr = "".
// 2. skip the separator, and continue to check if next letters.
// return resultArray;

const deepSplit = (strings, sep) => {
    const resultArray = [];
    let tempStr = "";
    for (const element of strings){
      for(const letter of element){
        if(letter === sep){
          resultArray.push(tempStr);
          tempStr = "";
        } else {
          tempStr += letter;
        }
      }
      resultArray.push(tempStr);
      tempStr="";
    }
    return resultArray;
  };

  // Secret Code: D3789041