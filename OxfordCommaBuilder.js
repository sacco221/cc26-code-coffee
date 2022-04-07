/*
Oxford Comma Builder
Write a function called oxfordCommaBuilder that takes in an array and a boolean. Return a string that is a comma-separated list of the items in the array. Include the word "and". If the boolean is true, include an oxford comma. If the boolean is false, do not include an oxford comma.
**NOTE:** An Oxford comma is a comma that occurs between the 2nd-to-last and last element in a list, right before the conjunction.
A, B, and C is an example of an Oxford comma.
A, B and C is an example of not using an Oxford comma.
If the list only has two items in it, do not include a commad. Only include the word "and".
Remember to include proper spaces!
The given array will always have at least 2 elements in it.

Examples
oxfordCommaBuilder([1, 2, 3], true) should return the string "1, 2, and 3"
oxfordCommaBuilder(["eggs", "lettuce", "bacon"], false) should return the string "eggs, lettuce and bacon"
oxfordCommaBuilder(["Tom", "Jerry"], true) should return the string "Tom and Jerry"
*/

const oxfordCommaBuilder = (arr, includeOxfordComma) => {
    let result = "";
    for(let i = 0 ; i < arr.length ; i++){
        if(i === 0){
            result += arr[i];
        } else if(i === arr.length -1 ){
            if(i !== 1){
                if(includeOxfordComma){
                    result += ", and " + arr[i];
                } else {
                    result += " and " + arr[i];
                }
            } else {
                result += " and " + arr[i];
            }
        } else {
            result += ", " + arr[i];
        }
    }
    return result;
  };

  //Secret Code: 24D8C71A