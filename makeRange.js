const makeRange = (n) => {
    const result = [];
    if(n<0){
      return result;
    } else {
    for(let i=0; i<n ; i++){
      result.push(i+1);
    }
   }
    return result
  };

  //sec code: 3B2DFF56