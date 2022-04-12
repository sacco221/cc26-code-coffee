/*
Min/Max Number Scraper
Write a function called minMaxNumScraper that takes in a string 
containing numbers separated by spacess. Return a pair (array of size 2)
 that has the lowest number and highest number from the list.

Examples
minMaxNumScraper("1 2 3 4 5") should return [1, 5]
minMaxNumScraper("32 5 11 9 27 3 18") should return [3, 32]
*/


  // separates these letters with " "
  // put them into a new array
  // compare each which number is smaller
  // put the winner into a result array
  // compare each which number is bigger
  // put the winner into a result array


const minMaxNumScraper = (strOfNums) => {
  let strArray =[];
  const tempArray = [];
  const resultArray = [];
  strArray = strOfNums.split(" ");
  let numArray = strArray.map(str =>  Number(str));

  let lowestNum = numArray.reduce((current, next) => Math.min(current, next));
  let biggestNum = numArray.reduce((current, next) => Math.max(current, next));
  resultArray.push(lowestNum, biggestNum);
  return resultArray;
};

//Secret Code: FD598D0C