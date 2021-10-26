// Consegna: Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.

// creo la lista di email degli invitati
const listaEmail = ["frank@email.com", "john@email.com", "lisa@email.com", "kate@email.com", "lewis@email.com"];
console.log("La lista degli invitati:", listaEmail);

// chiedo all'utente la sua email per controllare se è tra gli invitati
let emailUtente = prompt("Ciao! Inserisci la tua email per sapere se sei tra gli invitati");

// dichiaro una variabile di controllo per poter dare eventualmente il messaggio che l'email non fa parte della lista
let emailAssente = true;

// scorro tutta la lista delle email
for (let i = 0; i < listaEmail.length; i++) {

    // se trovo la sua email nell'elenco gli dico che può entrare
    if (emailUtente === listaEmail[i]) {
        console.log("Ottimo! Sei tra gli invitati, benvenuto!");
        emailAssente = false;
    }

}

// se in nessun caso l'email risulta presente nell'elenco, allora gli dico che non è tra gli invitati e quindi non è ammesso alla festa
if (emailAssente) {
    console.log("Ci dispiace, non sei tra gli invitati.");
}
