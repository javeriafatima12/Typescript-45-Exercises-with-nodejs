let userNames = ["Mahad", "Noman", "Hina", "Admin", "Kiran"];

userNames= []
if(userNames.length ===0){
    console.log("Your array in empty we need to find some users!")
}
//using for each loop an array.
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`hello${oneUser}, Thankyou for logging in again.`);
    }
});

