/*  Write a function called stringDeduplicator that takes in a list of 
strings and returns a new list that only contains the first occurrence 
of each string.

Examples
stringDeDuplication(["a", "a", "b", "a", "b"]) should return ["a", "b"]
stringDeDuplication(["a", "b", "c", "e", "a", "d", "b", "a", "e"]) should return ["a", "b", "c", "e", "d"]
*/

const stringDeduplicator = (arr) => {
    const result = [];

    for(const el of arr){
        if(!result.includes(el)){
            result.push(el);
        } 
    }
    return result;
  };
  