//LOWERCASE , UPPERCASE , TITTLECASE
let name1:string = "javeria";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
console.log(name1.replace(/\b\w/g, (char) => char.toUpperCase()))
 