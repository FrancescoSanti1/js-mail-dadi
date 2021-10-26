// Consegna: Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero il numero random dell'utente
let dadoUtente = Math.floor(Math.random() * 6) + 1;
console.log("dado utente:", dadoUtente);

// genero il numero random del computer
let dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log("dado computer:", dadoComputer);

// confronto i due numeri
if (dadoUtente > dadoComputer) {
    
    // se l'utente ha il numero più alto, ha vinto
    console.log("L'utente ha vinto!");
} else if (dadoComputer > dadoUtente) {

    // se il computer ha il numero più alto, ha vinto
    console.log("Il computer ha vinto!");
} else {
    console.log("Pareggio!");
}