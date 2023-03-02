/**la variabile totale ha visibilità globale */
let totale = 2;

function incrementa(){
    /**se definsico una variabile con lo stesso nome non mi da errore se questa ha visibilità
     * solo all'interno della funzione ma locale lui farà riferimento alal variabile locale per le operazioni */
    let totale = 0;
    totale = totale + 1;
}
/**ogni volta che chiamo incrementa la variabile totale aumenta di 1*/
incrementa();
console.log("Il valore di totale e' : " + totale);

incrementa();
console.log("Il valore di totale e' : " + totale);

//-------------------------------
/**se alla funzione passo come argomento totale continua a lavorare e prima stampa 3 e 4  */
let totale = 2;
function incrementa(totale){
    //let totale = 0;
    totale = totale + 1;
    console.log("Il valore di totale e' : " + totale);
    return totale;
}

//incrementa(totale);
//console.log("Il valore di totale e' : " + totale);


//incrementa(totale);
//console.log("Il valore di totale e' : " + totale);


let nonStampare = true;


function stampa(){

    let nonStampare = nonStampare; //da errore
    if (!nonStampare){
        console.log("Stampo");
    }

    nonStampare = false;
}

stampa();
