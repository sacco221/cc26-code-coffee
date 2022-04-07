/* Write a function called makeWithinRange that takes in two integers. 
Return an array that counts up from the lower numbere to the higher number.
The arguments are not necessarily in order.

Examples
makeWithinRange(1, 4); // returns [1, 2, 3, 4]
makeWithinRange(4, 1); // returns [1, 2, 3, 4]
makeWithinRange(-1, 1); // returns [-1, 0, 1]
makeWithinRange(82, 82); // returns [82];
*/

const makeWithinRange = (a, b) => {
    const result = [];
    if (a <= b){
        for(let i=a ; i <= b; i++){
            result.push(i);
        }
    } else if (a > b){
        for(let i=b ; i <= a ; i++){
            result.push(i);
        }
    }
    return result; 
  };
  
//Secret Code: D75F3FC5