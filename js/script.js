// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// JavaScript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// PRIMO ESERCIZIO 
// Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull’esito del controllo.


// ARRAY DELL'EMAIL
const email = ['william.@gmail.com','stefano.@gmail.com','franco.@gmail.com','sara.@gmail.com'];
// PUSH DELL'EMAIL DI DUE STRINGHE
email.push('carla.@gmail.com','paola.@gmail.com');
// LENGTH DELL'EMAIL
let x = email.length;
console.log(x);
console.log(email);
// PROMPT EMAIL DELL'UTENTE
let emailutente = isNaN(prompt("Qual'è la tua email?"));
// CONTROLLO ARRAY ATTRAVERSO CICLO
let sentinella = false;
for(let i = 0; i < email.length; i++){
 console.log(email[i]);
 // CONDIZIONE SE LA SENTINELLA IS TRUE
 if (email[i] == emailutente) {
   sentinella = true;
 }
}
// CONDIZIONE EMAIL TROVATA O NON TROVATA
if (sentinella) {
console.log('email trovata');
}
else 
console.log("email non trovata");


// SECONDO ESERCIZIO 
// Gioco dei dadi Generare un numero random da 1 a 6,
//  sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// GENERARE I NUMERI CON ARRAY E CREARE UN RANDOM DEI NUMERI, STABILIRE IL VINCITORE
  //  funzione click
  document.getElementById("random").addEventListener("click", myFunction);
    function myFunction() {

      // creo un elemento div
      let tu = document.createElement("div");
      let container = document.querySelector('.container');

      // lo posiziono all'interno del container
      container.prepend(tu);
      let utente = alert = "il tuo numero è" + (Math.floor(Math.random()*6)+ 1);
      let random = (Math.floor(Math.random()*6)+ 1);
      

      //  condizione se l utente vince o perde
      if ( utente > random) {
        console.log("hai vinto");
        let vincitore = document.querySelector('div').innerHTML = "HAI VINTO";
      }
      else if ( utente < random) {
        console.log("hai perso");
        let perdente = document.querySelector('div').innerHTML = "HAI PERSO";
      }
} 
