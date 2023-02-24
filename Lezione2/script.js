//ha definito delle variabili
let stringa01 = "Lezione 2";
let stringa02 = "1";
let stringa03 = "true";
let stringa04 = "null";
let stringa06 = "1";

let intero01 = 7;
let decimale01 = 7.5;

let boolean01 = true;
let boolean02 = false;

let nonvalorizzata;

//variabile con stringa vuota
let stringa05 = "";

//non puoi chiamare le variabili con i nomi dei comandi tipo true false, ti darà errore
//let undefined;

//let x = stringa01 + stringa02;//concatena due stringhe, in php puoi usare il . o il +

//let x = intero01 + stringa02;//qui fa ancora una concatenazione

//let x = stringa02 - intero01;//l'operatore meno non esiste per le stringhe e ti darà -6 facendo la sottrazione

//let x = stringa02 + boolean01;//converte il booleano in stringa

//let x = stringa02 + nonvalorizzata;//viene 1null, ha convertito il null in stringa
//se dichiari la variabile ma non la valorizzi ti concatena undefined

//let x = intero01 + stringa05;//la variabile 05 rimane stringa

//let x =  intero01 + boolean01;

//let x =  intero01 + boolean02; //da 7 converte il bool in 0 e fa l'operazione

//let x =  intero01 % boolean02;//non si può dividere per 0 ti da NaN perchè non riesce a fare l'operazione

//let x =  intero01 % boolean01;//qui da output 0 perchè non c'è resto

//let x =  intero01 + nonvalorizzata;//la variabile non è valorizzata ti da NaN, la trovi nella tabella delle conversioni Implicite quando è Undefined

//ESERCIZI CASA: fare esperimenti con gli operatori e conversioni implicite

//operatori di confronto
//let y = stringa02 == boolean01;//converte il boolean true nella stringa true e quindi ritorna true

//let z = stringa03 === boolean01;//ritorna false perchè confronta anche i tipi di dato

//let w = stringa02 === stringa06;//tipo lo stesso stesso valore ritorna true, contano anche gli spazi, se a 06 aggiungo uno spazio in più anche il suo valore cambia

console.log(y);
console.log(z);
console.log(w);