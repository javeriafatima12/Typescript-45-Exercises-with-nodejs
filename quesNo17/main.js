"use strict";
// creating a guestlist Array
let guestList = ["Shiza", "kinza", "Hassan", "Kainat"];
//making variable for those guest who cant come
let dontCome = guestList[0];
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
let middleIndex = (guestList.length / 2);
// Adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "Ahmad");
// print meesage of updating list
console.log("updated list of our guests");
// Sending a invitation meesage to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));
// Inform that only two guests can be invited for dinner.
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");
// using Whileloop to remove guests from the array until only two names remain.
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`sorry,${removedGuest} I cant invite you to dinner`);
}
//sending a invitations to the last two guest on the list.
console.log("invitations to the last 2 guests");
guestList.forEach(lastTwo => console.log(`Luckly ${lastTwo}, You are still invited to dinner`));
// Removing last two guest from the list.
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
