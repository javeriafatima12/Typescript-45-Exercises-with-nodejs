// define the function to show magician the name.
function show_magicians(magicians) {
    magicians.forEach(function (name1) { return console.log(name1); });
}
//function to make magicians great through.map()it will modify array.
function make_great(magicinas) {
    return magicians_names.map(function (name2) { return "The Great ".concat(name2); });
}
// Define an array of magicians name
var magicians_names = ["Kiran", "Romaisa", "Mirza"];
// Making a cop of orignal array throug .slice() function.
var copy_magicians_names = magicians_names.slice();
//modify the copied array to include "the great" with their names.
var copy_great_magicians = make_great(copy_magicians_names);
// show both arrays orignal and copied .
// orignal.
console.log("\n The Orignal Array");
show_magicians(magicians_names);
//copied
console.log("\n The Copied Array");
show_magicians(copy_great_magicians);
