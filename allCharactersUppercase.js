const allUppercase = (str) => {
    let result = true;
    const checkedStr = str.replace(/[^0-9a-z]/gi, '');
    if(checkedStr !== str){
        return false
    } else if (str === ""){
        return true;
    } else if (str === str.toUpperCase()){
        return true;
    } else {
        return false;
    }
};
  