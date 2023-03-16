/**in programmazione si DIVIDONO i problemi
 * poi si razionalizza no nsi fa copia incolla del codice
 */

/**prendo div root on get element poi ciclo for che parte da 1 al numero che ho messo in input alla funzione */
function stampaTabelline(numeroInteri) {
    let div = document.getElementById("tabelline");
    for (let index = 1; index <= numeroInteri; index++) {

        /**questa parte non l'ho scritta subito ma dopo, creo la tabellina, mi serve il numero dellla riga come moltiplicatore e el div
         * l'outup mi serve sia a rray  perchè poi dvo passarlo ad una fumnzione che me lo inserisce nelle righe
         * con i lciclo for: 1 primo opertiore e 10 il limite
         * dentro il ciclo for gli fdo una classe col con attributo e con la inner html ho inserito il prodotto dllla mia moltiplicazione, l'indiice me lo da in input
         * la funzione (prima riga 1 2 3 ecc) poi inserisco il dive nel mio array e lo restituisco in output alla funzioone
         */
        let cols = creaColonne(index);
        let riga = creaRiga(index, cols);
        div.appendChild(riga);
    }
}

function creaColonne(index) {
    let cols = [];
    for (let y = 1; y <= 10; y++) {
        let colonna = document.createElement("div");
        colonna.className = "col";
        colonna.setAttribute("data-col-id", y);
        colonna.innerHTML = y * index;
        cols.push(colonna);
    }
    return cols;
}

/**
 * popoi creo la funzione crea riga con indice colonne creo l'elemtento della riga con il tag riga ed imposto ocn bottstra
 * poi scorro array di colonne 
 * 
 * scorro array colonne e aapendo sulla riga, lelemento id della riga coem outoutdella funzione
 */
function creaRiga(index, cols) {
    let riga = document.createElement("div");
    riga.className = "row";
    riga.setAttribute("data-row-id", index);
    for (let i = 0; i < cols.length; i++) {
        const element = cols[i];
        riga.appendChild(element);
    }
    return riga;
}