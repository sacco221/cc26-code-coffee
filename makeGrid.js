/**
 * Creates an n by n grid (array of arrays) filled with a repeated value in each cell.
 * @param {number} n the side length of the grid
 * @param {Object} value A value to populate the grid with
 * @returns {Array<Array<Object>>} an n by n grid
 */
 const makeGrid = (n, value) => {
    // YOUR SOLUTION GOES HERE
    const result = [];
    for(let i=0 ; i<n ; i++){
      const innerArray = [];
      result.push(innerArray);
      for(let j=0 ; j<n ; j++){
      innerArray.push(value);
      }
    }
    return result;
  };
  