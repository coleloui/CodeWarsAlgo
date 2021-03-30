// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
// likes(['Peter']);
likes(['Max', 'John', 'Mark']);

function likes(names) {
  // TODO
  switch (names.length) {
    case !names:
      console.log('no one likes this');
      break;
    case 1:
      console.log(names[0] + ' likes this');
      break;
    case 2:
      console.log(names[0] + ' and ' + names[1] + ' likes this');
      break;
    case 3:
      console.log(
        names[0] + ', ' + names[1] + ' and ' + names[2] + ' likes this'
      );
      break;
    default:
      let others = names.length - 2;
      console.log(
        names[0] + ', ' + names[1] + ' and ' + others + ' others like this'
      );
      break;
  }

  if (!names) {
    console.log('no one likes this');
  } else if (names.length === 1) {
    console.log(names[0] + ' likes this');
  } else if (names.length === 2) {
    console.log(names[0] + ' and ' + names[1] + ' likes this');
  } else if (names.length === 3) {
    console.log(
      names[0] + ', ' + names[1] + ' and ' + names[2] + ' likes this'
    );
  } else if (names.length > 3) {
    let others = names.length - 2;
    console.log(
      names[0] + ', ' + names[1] + ' and ' + others + ' others like this'
    );
  }
}
