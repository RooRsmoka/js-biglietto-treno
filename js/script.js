/*Programma che calcola il prezzo del biglietto del treno.
    // Chiedo all'utente la distanza in Km che deve percorrere.
    // Chiedo all'utente l'età.
    // Il prezzo del biglietto è calcolato tramite la seguente operazione (0.21€ / Km).
    // Inoltre, basandoci sull'età dell'utente verifichiamo se ha diritto ad una scontistica.
    // SE minorenne applichiamo uno sconto del 20%,
    // OPPURE SE over 65 applichiamo uno sconto del 40%,
    // ALTRIMENTI il prezzo non ha sconto.
    // Stampiamo a video il prezzo del bigletto con l'utilizzo dei decimali.
*/

// Creo L'elemento in cui sarà mostrato l'output
const outputHtml = document.getElementById('output');

// Chiedo all'utente la distanza da percorrere.
const userDistance = parseInt(prompt('Inserisci la distanza che devi percorrere(in Km).'));

// Chiedo all'utente L'età.
const userAge = parseInt(prompt('Inserisci la tua età.'));

// Calcolo il prezzo del biglietto in base ai Km inseriti(km * 0.21 €).
const travelPrice = userDistance * 0.21;
// Calcolo lo sconto per i minorenni.
let discountTwenty = (travelPrice - (travelPrice * 20) / 100);
discountTwenty = discountTwenty.toFixed(2);
// Calcolo lo sconto per gli over 65.
let discountForty = (travelPrice - (travelPrice * 40) / 100);
discountForty = discountForty.toFixed(2)


// Ora basandoci sull'età inserita dall'utente
// definiamo i casi in cui effettuiamo lo sconto.
if (userAge < 18) {
    outputHtml.innerHTML = `Il prezzo del biglietto è di ${discountTwenty} €.`
} else if (userAge >= 65) {
    outputHtml.innerHTML = `Il prezzo del biglietto è di ${discountForty} €.`
} else {
    outputHtml.innerHTML = `Il prezzo del biglietto è di ${travelPrice} €.`
}

console.log(userDistance);
console.log(userAge);