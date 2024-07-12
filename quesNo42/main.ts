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

// call make great function to modify the array.
let greet = make_great(magicians_names);

//call show magicians that show modifed list of magicians.
show_magicians(greet);
