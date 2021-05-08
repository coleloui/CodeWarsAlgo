// TODO: In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// TODO: If anything in the text isn't a letter, ignore it and don't return it.
// TODO: "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    return text.toLowerCase().split('')
    .filter( a => a >= 'a' & a <= 'z')
    .map( a => a.charCodeAt(0) - 'a'.charCodeAt(0) + 1).join(' ')
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))