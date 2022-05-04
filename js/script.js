
let numKm = prompt("Quanti Km vuoi percorrere?");
console.log(numKm);

let age = prompt("Quanti anni hai?");
console.log(age);

let prezzoTicket;

if (age < 18) {
    prezzoTicket = numKm * 0.21 * (1 - 0.2);
} else if (age > 65) {
    prezzoTicket = numKm * 0.21 * (1 - 0.4);
} else {
    prezzoTicket = numKm * 0.21;
}

console.log("Il prezzo totale del biglietto è di: ", prezzoTicket, " Euro");