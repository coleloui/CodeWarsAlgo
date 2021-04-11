// TODO:Return the number (count) of vowels in the given string.
// TODO:We will consider a, e, i, o, u as vowels for this Kata (but not y).
// TODO:The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    var vowelsCount = 0;
    // enter your majic here
  let a = str.split("")
  a.map(letter => {
    if(/([a,e,i,o,u])/.test(letter) === true){
    vowelsCount++
    }
  });
    return vowelsCount;
  }

  getCount("abracadabra")