/*
Blog URL Builder

Write a function called blogUrl that takes in a string containing a blog post title and returns a string that is a readable string that can be used as the URL for that blog.
For example, it would take something like the title 14 Tips to Stay Healthy this Saturnalia into the string "14-tips-to-stay-healthy-this-saturnalia"
To pass the tests, you should use the following rules:
numbers and letters should be kept (although letters must be converted to lowercase)
trailing spaces should be removed
remaining spaces should be converted into hyphens
all other punctuation should be removed
the string should be trimmed to at most 60 characters

Examples
blogUrl("Motoazabu mom cures common cold using this 1 weird trick, leaving doctors speechless!") should return the string "motoazabu-mom-cures-common-cold-using-this-1-weird-trick-lea"
blogUrl("Using blockchain to cure nail fungus? The answer will *shock* you!") should return the string "using-blockchain-to-cure-nail-fungus-the-answer-will-shock-y"
blogUrl("So I got a Peleton...") should return the string "so-i-got-a-peleton"
*/



const blogUrl = (title) => {
  const replaceTitle = (str) => {
    let newstr = "";
    for(let el of str){
      if(el === " "){
        el = "-";
        newstr += el;
      } else {
        newstr += el;
      }
    } return newstr;
  };

  let replacedTitle = replaceTitle(title.toLowerCase());
  let editedTitle = replacedTitle.replace(" ","-");

  const eliminateTitle = (str) => {
    let newstr = "";
    for(let el of str){
      if (el === "-"){
        newstr += el;
      } else if (!el.match((/[^a-z0-9]/gi))){
        newstr += el;
      } 
    }return newstr;
  };

  let eliminatedTitle = eliminateTitle(editedTitle);

  if (eliminatedTitle.length > 60 ){
    let newTitle = "";
    let gap = eliminatedTitle.length - 60;
    return  newTitle = eliminatedTitle.slice(0, -1 * gap);
  } else {
    return newTitle = eliminatedTitle;
  }
};

//Secret Code: 22193FA5

  