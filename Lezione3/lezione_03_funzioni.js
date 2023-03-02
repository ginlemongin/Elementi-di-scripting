
function somma(){
    let tot = 0;
    let valore;
    console.dir(arguments);//stampa in console
    /*arguments rappresenta i valori in argomento della funzioni,
     in questo caso un array con i valori 1,3,4 e una stringa*/
     /*of: va a cercare il valore dell'elemento dell'array
       in: va a cercare l'indice */
    for (valore of arguments){
        /*parse int trasforma una stringa in un intero */
        /*if (typeof valore == "string"){
            tot = tot + parseInt(valore);
        }else{*/
            tot = tot + valore;
        //}  
    }
    return tot;
}
/*somma i numeri e concatena la stringa e l'output non sarà piu numerico ma una stringa */
/*chiamo la funzione somma e gli passo gli argomenti */
let risultato = somma(1,3,4, "54");

console.log(risultato);
//-----------------------------------------------------------
function stampaAConsoleIPrimiDieciNumeri(){
    for (let i = 1; i<= 10; i++){
        console.log(i);
    }
}

stampaAConsoleIPrimiDieciNumeri();

/*stampo se un numero e dispari o pari
x è di defualt definita 2 in caso di chiamata senza argomenti*/
/*function isNumeroPariODispari(x = 2){
    let y = x % 2;
    if (y === 0){
        console.log("E' un numero pari");
    }else{
        console.log("E' un numero dispari");
    }
}

isNumeroPariODispari(10);*///se gli passassi una stringa lui convertirebeb x in numero secondo la tabella nelle slide

//---------------------------------------------
/**se non gli inserisco dei valori numerici la funzione va a false */
function isNumeroPariODispari(x){
    /**type of se l'argomento è di tipo numero ti ritorna "number" */
    if (x === null || x === undefined ||typeof x !== "number"){
        return false;
    }
    if ( x % 2 === 0){
       return true;
    }else{
        return false;
    }
}

//let risultatoN = isNumeroPariODispari();
//console.log(risultatoN);
//--------------------------
/**funzione che richiama un'altra funzione che avevamo precedentemente definito*/
function seNumeroPariStampaCiao(){
    /**prompt è una funzione di default di js che dice all'utente quale valore inserire nel campo */
    let x = prompt();
    if (isNumeroPariODispari(x)){
        console.log("Ciao");
    }
}

seNumeroPariStampaCiao();

/*modo alternativo per scrivere function isNumeroPariODispari(x)
 ma ora converte le stringhe in numerici*/
function isNumeroPariODispari(x){
    if (x === null || x === undefined){
        return false;
    }
    if (typeof x == "string"){
        x = parseInt(x);
    }
    if (typeof x !== "string" && typeof x !== "number"){
        return false;
    }
    if ( x % 2 === 0){
       return true;
    }else{
        return false;
    }
}