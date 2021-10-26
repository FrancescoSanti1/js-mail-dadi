// Consegna: Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const btnDadi = document.getElementById("lancio-dadi");
const divRisultato = document.getElementById("risultato");
const scoreUser = document.getElementById("punti-utente");
const scoreComputer = document.getElementById("punti-computer");
let dadoUtente;
let dadoComputer;
let puntiUtente = 0;
let puntiComputer = 0;

btnDadi.addEventListener("click",

    function(){

        // genero il numero random dell'utente
        dadoUtente = Math.floor(Math.random() * 6) + 1;
        console.log("dado utente:", dadoUtente);

        // genero il numero random del computer
        dadoComputer = Math.floor(Math.random() * 6) + 1;
        console.log("dado computer:", dadoComputer);

        // confronto i due numeri
        if (dadoUtente > dadoComputer) {
            
            // se l'utente ha il numero più alto, ha vinto
            console.log("L'utente ha vinto!");
            divRisultato.innerHTML = `<p>L'utente ha vinto!</p>`;
            puntiUtente++;
        } else if (dadoComputer > dadoUtente) {

            // se il computer ha il numero più alto, ha vinto
            console.log("Il computer ha vinto!");
            divRisultato.innerHTML = `<p>Il computer ha vinto!</p>`;
            puntiComputer++;
        } else {
            console.log("Pareggio!");
            divRisultato.innerHTML = `<p>Pareggio!</p>`;
        }

        // aggiorno il punteggio
        scoreUser.innerHTML = puntiUtente;
        scoreComputer.innerHTML = puntiComputer;

    }

)