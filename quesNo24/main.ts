// Define variables
let apple ="apple"
let uppercaseApple ="Apple"
let ten = 10
let twenty = 20
let fruits = ["Apple","Orange", "Banana"]

// Test for equality and inequalty with strings.
console.log("\nIs apple is equal to apple?");
console.log(apple =="apple") ;

console.log("\nIs apple is not equal to apple?");
console.log(apple!="apple") ;

// Test using lowercase function.
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()=="apple");

 
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()!="apple");

//Test numerical.
 console.log("\nIs ten is equal twenty?");
console.log(ten==twenty);

console.log("\nIs ten is not equal twenty?");
console.log(ten!=twenty);

// greater than.
console.log("\nIs ten is greater than zero?");
console.log(ten>0);

//less than.
console.log("\nIs twenty is less than 10 ?");
console.log(twenty< 10);

// greater than or equal to.
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten>=5);

// less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty<=10);

//test using "and" & "or" operators.
console.log("\n Twenty is not equal to 10 and twenty is greater than 10")
console.log(twenty!= 10 && twenty >10)

console.log("\n Twenty is not equal to 10 and twenty is greater than 30")
console.log(twenty!= 10 && twenty >30)


// using || (Or)
console.log("\n Twenty is greater than 50 or twenty is equal to 20")
console.log(twenty >50 || twenty == 20)

console.log("\n Twenty is greater than 50 or twenty is not equal to 20")
console.log(twenty >50 || twenty != 20)

// Test whether an item is include inarray.
console.log("\nIs orange inculde in my fruits  array");
console.log(fruits.includes("orange"));

// not include
console.log("\nIs orange not inculde in my fruits  array");
console.log(!fruits.includes("orange"));








