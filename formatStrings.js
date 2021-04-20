//TODO: Given: an array containing hashes of names
//TODO: Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names){
  //your code here
  // for (let i = 0; i < names.length; i++) {
  //   const {name} = names[i];
  // }
  let a = []
  names.map(({name}) => {
    a.push(name)
  })
  console.log(a.toString())
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''