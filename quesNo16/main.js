// creating a guestlist Array
var guestList = ["Shiza", "kinza", "Hassan", "Kainat"];
//making variable for those guest who cant come
var dontCome = guestList[0];
// print the name of guest who cant come
console.log(dontCome, "NO ENTRY");
// Add or remove values from guestlist Array
guestList.splice(0, 1, "Reeba");
// Message print for bigger table
console.log("Good News! We have found a bigger table for dinner");
// Adding a new value at starting index of array
guestList.unshift("Ali");
// Adding a new value at ending index of array
guestList.push("Zain");
// get a middle index of our guestlist array
var middleIndex = (guestList.length / 2);
// Adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "Ahmad");
// print meesage of updating list
console.log("updated list of our guests");
// Sending a invitation meesage to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me")); });
