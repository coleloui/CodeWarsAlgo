// TODO:Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

let array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

function countSheeps(arrayOfSheep) {
    let count = 0
    arrayOfSheep.map(sheep => {
        if(sheep == true){
            count++
        }
    })
    return count
  }

  countSheeps(array1)