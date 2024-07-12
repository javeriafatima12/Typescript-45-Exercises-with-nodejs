//Msking array of countries and print its orignal order:
let countriesToVisit:string[]= ["China" , "Iran" , "Brazil" , "Japan" , "Argentina"];
console.log("Orginal Order:" , countriesToVisit);

//print the array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:" ,[...countriesToVisit].sort());

//show that the array in still in its orignal order
console.log("Still in Orignal order:",countriesToVisit);

// Print the arrray in reverse order without modifying the actual Array list.
console.log("Reverse Order:",[...countriesToVisit].reverse());

//show that the array in still in its orignal order
console.log("Still in orignal order:",countriesToVisit);

// we have changed the orignal array order now.
console.log("Orignal Array Reversed:",countriesToVisit.reverse());

// Print the array to show that its back to its orignal order.
console.log("Back to Orignal order:",countriesToVisit.reverse());

//Print the array to show that its order has been changed in Alphabetical order now.
console.log("Sorted in Alphabetical order:",countriesToVisit.sort());

// we have changed again the orignal array order now in reverse order again.
console.log("Orignal Array Reversed again:",countriesToVisit.reverse());


