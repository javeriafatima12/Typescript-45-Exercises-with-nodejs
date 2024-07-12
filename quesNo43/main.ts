// define the function to show magician the name.
function show_magicians(magicians: string[]) {
  magicians.forEach((name1) => console.log(name1));
}
//function to make magicians great through.map()it will modify array.
function make_great(magicinas: string[]) {
  return magicians_names.map((name2) => `The Great ${name2}`);
}

// Define an array of magicians name
let magicians_names = ["Kiran", "Romaisa", "Mirza"];

// Making a cop of orignal array throug .slice() function.
let copy_magicians_names = magicians_names.slice();

//modify the copied array to include "the great" with their names.
let copy_great_magicians = make_great(copy_magicians_names);

// show both arrays orignal and copied .

// orignal.
console.log("\n The Orignal Array")
show_magicians(magicians_names);

//copied
console.log("\n The Copied Array")
show_magicians(copy_great_magicians);
