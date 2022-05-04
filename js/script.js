
let numKm = parseInt(prompt("Quanti Km vuoi percorrere?"));
console.log(numKm);

let age = parseInt(prompt("Quanti anni hai?"));
console.log(age);

let prezzoTicket;

if (age < 18) {
    prezzoTicket = numKm * 0.21 * (1 - 0.2); //Sconto del 20% se ho meno di 18 anni
} else if (age > 65) {
    prezzoTicket = numKm * 0.21 * (1 - 0.4); //Sconto del 40% se ho più di 65 anni
} else {
    prezzoTicket = numKm * 0.21;
}

// Arrotondamento a due cifre decimali
let prezzoTotale = prezzoTicket.toFixed(2);
console.log("Il prezzo totale del mio biglietto è di:", prezzoTotale, "Euro");


document.getElementById("prezzo_ticket").innerHTML = prezzoTotale;