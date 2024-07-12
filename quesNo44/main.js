// Define  a function with a rest parameter that accepts items arguments represting our sandwiches.
function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nEnjoy");
}
// call the function 3 times 3 different number of argumnet.
makesandwich("Chicken", "Cheese", "Mayoo");
makesandwich("Bread", "Butter");
makesandwich("Chicken", "Cheese", "Maayo", "Butter", "Bread", "Tomato");
