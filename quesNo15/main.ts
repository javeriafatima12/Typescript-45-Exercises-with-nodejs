let guestList = ["Mahnoor", "Kainat", "Maryam", "Alishba" ];

let dontCome = guestList[0];

console.log (dontCome," nahii aa sakti");

guestList.splice(0,0,"kinza");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));