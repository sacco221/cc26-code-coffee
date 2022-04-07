/* Write a function called longCatMaker that takes in an integer n and returns the string 
"Long cat is loooooooong!" where the 2nd long should contain n o's.

Examples
longCatMaker(1) should return "Long cat is long!"
longCatMaker(4) should return "Long cat is loooong!"
longCatMaker(20) should return "Long cat is loooooooooooooooooooong!"
*/

const longCatMaker = (n) => {
    let result = "";
    const firstFixed = "Long cat is l";
    const secondFixed = "ng!";
    let flexPart = "";

    for(let i=1; i <= n ; i++){
        flexPart += "o";
    }

    result = firstFixed + flexPart + secondFixed;
    return result;
  };
  
//Secret Code: BA67C33C