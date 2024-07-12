// create a variable
let userName= ["Mahad", "Noman","Hina","Admin", "Kiran"];

//using for each loop an array.
userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }else {
        console.log(`hello${oneUser}, Thankyou for logging in again.`)
    }
})