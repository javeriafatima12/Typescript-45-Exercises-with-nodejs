// creating a array.
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//using for_loop.
for(let oneNumber of num1){
let ordinalEnding:string;
if(oneNumber === 1){
    ordinalEnding = "ST"
}
else if(oneNumber === 2){
    ordinalEnding = "ND"
}
else if(oneNumber === 3){
    ordinalEnding = "RD"
}
else{
    ordinalEnding ="TH"
}
   console.log(`${oneNumber}${ordinalEnding}`) 
}






