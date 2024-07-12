// array of current users.
var current_users = ["Ali", "Ayesha", "Usman", "Maryam", "Fatima"];
// array of new users.
var new_users = ["Sania", "Javeria", "Maryam", "kainat", "Ayesha"];
// loop through new users to check for usernames availability.
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available."));
    }
});
