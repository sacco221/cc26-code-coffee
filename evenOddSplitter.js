/* 
Even/Odd Splitter
Write a function called evenOddSplitter that takes in an array 
and returns an array with two elements. 
The first element is a new array that contains all the elements 
in the even indexes of the original array and the second element 
is a new array that contains all the elements in the odd indexes of the original array.

Examples
for example, allCharactersSame(["A", "B", "C", "D", "E"]) should return the following structure:
[
    ["A", "C", "E"],
    ["B", "D"]
]
*/

const evenOddSplitter = (arr) => {
    const evenArray = [];
    const oddArray =[];

    // for(let i = 0  ; i < arr.length ; i++){
    //     if(i % 2 === 1){
    //         evenArray.push(arr[i]);
    //     } else {
    //         oddArray.push(arr[i]);
    //     }
    // }

    arr.forEach((value, index) => {
        if (index % 2 === 1){
            evenArray.push(value);
        } else {
            oddArray.push(value);
        }
    })
    
    return [oddArray, evenArray];
  };

  


//Secret Code: D3BB230B
