/* First Unique Letter
Write a function called firstUniqueLetter that takes in a word as a string and
 returns the first letter in the word that only occurs once.

Examples
firstUniqueLetter("banana") should return "b" because b only occurs once.
firstUniqueLetter("minimum") should return "n" because n only occurs once and
 it's the first letter to only occur once (u also occurs once but it comes later).
Your code should be case insensitive:
firstUniqueLetter("Mommy") should return "o" because M is the same letter as m.
You should always return the lowercase version of the letter.
If there is non unique letter, return an empty string.
*/ 


const firstUniqueLetter = (word) => {
    let result = "";
    const storeObj = {};
    const storeArray = [];

    for (const letter of word){
        if(!Object.keys(storeObj).includes(letter.toLowerCase())){
            storeObj[letter.toLowerCase()] = 1;
            if(storeObj[letter] === 1){
                storeArray.push(letter.toLowerCase());
            }
        } else {
            storeObj[letter.toLowerCase()] = storeObj[letter.toLowerCase()] + 1;
        }
    }
    for (const el of storeArray){
        if(storeObj[el] === 1){
            return result = el;
        }
    }

    return result;
  };



  

//Secret Code: 6FE1CC90