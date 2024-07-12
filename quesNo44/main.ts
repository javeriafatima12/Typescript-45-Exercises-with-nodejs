// Define  a function with a rest parameter that accepts items arguments represting our sandwiches.
function makesandwich(...items: string[]) {
  console.log("Making a sandwich with the following items:\n");

  items.forEach((singleItem) => console.log(singleItem));

  console.log("\nEnjoy sandwich");
}

// call the function 3 times 3 different number of argumnet.
makesandwich("Chicken","Cheese","Mayoo");
makesandwich("Bread","Butter");
makesandwich("Chicken","Cheese","Maayo","Butter","Bread","Tomato")
