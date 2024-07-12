// array of current users.
let current_users = ["Ali", "Ayesha","Usman","Maryam","Fatima"];

// array of new users.
let new_users =["Sania","Javeria","Maryam", "kainat", "Ayesha"];

// loop through new users to check for usernames availability.
new_users.forEach(new_one_user =>{
// making a condition for username already exist and save in our_condition varialbe
let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase()===new_one_user.toLowerCase())

// print different message using if_else statement.
if(our_condition){
    console.log(`sorry ${new_one_user} is already taken!`)
}
else{
    console.log(`This username ${new_one_user} is available.`)
}


})
