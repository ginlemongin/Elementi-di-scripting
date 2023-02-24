
const MAX_INTERI = 10;
const MIN_INTERI = 1;
let numero = 12;



/* 
//lo switch verifica i valori presenti nella variabile auto ed esegui il blocco corrispondente
//gli spazi contano
let auto = "punto";
switch(auto){
    case "bmw":{
        console.log("la mia auto è una bmw");
        break;
    }
    //in corrispondenza di fiat eseguirebbe anche 500L
    case "fiat":
    case "500L":{
        console.log("la mia auto è una fiat");
        break;
    }
    case "punto":{
        console.log("la mia auto è una fiat punto");
        break;
    }
    //senza il default se nessuna casistica matcha allora non fa nulla
    default: {
        console.log("non so che tipo di auto è");
        break;
    }
}
*/


/* 
//aggiungo un or per scrivere un codice piu pulito
if (numero >= MAX_INTERI || numero < MIN_INTERI){
    console.log("numero: " + numero + " inserito non valido.");
} else {
    let resto = numero % 2;
    if (resto == 0){
        console.log("numero e' un numero pari");
    }else{
        console.log("numero e' un numero dispari");
    }    
}
*/


/* 
if (numero >= MAX_INTERI){
    console.log("numero:" + numero + " inserito non valido.");
}else if (numero < MIN_INTERI){
    console.log("numero inserito < a 1");
}

let resto = numero % 2;
if (resto == 0){
    console.log("numero e' un numero pari");
}else{
    console.log("numero e' un numero dispari");
}
*/    


/* 
//in una serie di if else non è sempre necessario
if (numero >= MAX_INTERI){
    console.log("numero inserito non valido.");
}else if (numero < MIN_INTERI){
    console.log("numero inserito < a 1");
}

let resto = numero % 2;
if (resto == 0){
    console.log("numero e' un numero pari");
}else{
    console.log("numero e' un numero dispari");
}    
*/


/*
//voglio verificare solo gli interi positivi
if (numero >= MAX_INTERI){
    console.log("numero inserito non valido.");
}else if (numero < MIN_INTERI){
    console.log("nomero inserito < a 1");
}else{
    let resto = numero % 2;
    if (resto == 0){
        console.log("numero e' un numero pari");
    }else{
        console.log("numero e' un numero dispari");
    }    
}
*/


/* 
//eseguo il blocco solo se la condizione sopra non è valida
if (numero >= MAX_INTERI){
    console.log("numero inserito non valido.");
}else{
    let resto = numero % 2;
    if (resto == 0){
        console.log("numero e' un numero pari");
    }else{
        console.log("numero e' un numero dispari");
    }    
}
*/

/*
//codice per verificare se un numero è dispari o pari
let resto = numero % 2;
if ( resto == 0){
    console.log("numero è un numero pari"); 
}else{
    console.log("numero e' un numero dispari");
}

//esempio per utilizzare if senza else
if (numero >= MAX_INTERI) {
    console.log("numero inserito non valido.");
}
*/

