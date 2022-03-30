const tillZero = (nums) => {
    let result = 0;
    for(const num of nums){
     if(num !== 0){
       result += num;
     } else {
       return result;
    }
    }
  };
