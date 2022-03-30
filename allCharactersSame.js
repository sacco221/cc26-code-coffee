const allCharactersSame = (str) => {
    let orig = str[0]
    for(const letter of str){
      if(letter !== orig){
        return false
      }
    } return true;
  };
  //sec code: 79879012