//!   IF
//Verifico se 7 è un numero pari o dispari
let numeroX = 7;

if (numeroX % 2 == 0) { //Se il resto della divisione è 0
    console.log(numeroX + " è un numero pari")
} else {
    console.log(numeroX + " è un numero dispari")
}
// IF INNESTATI
//Verifico se il numero è pari o dispari
let numeroY = 4;
const MaxInteri = 10;

if (numeroY >= MaxInteri) { //Se il numero è maggiore del numero massimo
    console.log("Il numero non è valido")
} else {
    let resto = numeroY % 2; //memorizzo il resto in una varibile 
    if (resto == 0) { //se è 0
        console.log(" è un numero pari");
    } else { //altrimenti
        console.log(" è un numero dispari");
    }
}



//! ELSE IF
const Max_Interi = 10;
const Min_Interi = 1;
let NumeroZ = 4;

if (NumeroZ >= Max_Interi) { //se il numero inserito è maggiore uguale del numero massimo
    console.log("Il numero inserito non è valido")
} else if (NumeroZ <= Min_Interi) { //e se è anche minore del numero minimo  
    console.log("Il numero inserito è minore di 1")
} else { //altrimenti, se le opzioni di prima sono false
    console.log("il numero inserito è maggiore di 1 e minore di 10") //
    if (NumeroZ % 2 == 0) {  //oltre a quello, se il resto del modulo 2 è 0
        console.log("il numero è pari")
    } else { //altrimenti
        console.log("il numero è dispari")
    }
}



//! IF CON OR
const max_interi = 10;
const min_interi = 1;
let NumeroN = -3;

if (NumeroN >= max_interi || NumeroN <= min_interi) { //Se il numero inserito è maggiore del numero massimo OPPURE minore del numero minimo
    console.log("il numero inserito non è valido")
} else { //altrimenti
    if (NumeroN % 2 == 0) { //Se il resto del numero inserito è zero
        console.log("Il numero inserito è pari")
    } else { //altrimenti
        console.log("il numero inserito è dispari")
    }
}



//! SWITCH
let auto = "Toyota";

switch (auto) { //Inserisco il dato che voglio controllare
    case "BMW": //Nel caso fosse questo, eseguilo, altrimenti vai avanti
        console.log("La mia auto è una BMW")
        break;
    case "Audi":
        console.log("La mia auto è una Audi")
        break;
    case "Toyota":
        console.log("La mia auto è una Toyota")
        break;
    case "Lancia":
        console.log("La mia auto è una Lancia")
        break;
    case "Opel":
        console.log("La mia auto è una Opel")
        break;
    default: //se nessuno dei casi corrisponde alla variabile, esegui questo
        console.log("La mia auto non è nessuna di queste")
        break;
}
