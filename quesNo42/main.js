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
// call make great function to modify the array.
var greet = make_great(magicians_names);
//call show magicians that show modifed list of magicians.
show_magicians(greet);
