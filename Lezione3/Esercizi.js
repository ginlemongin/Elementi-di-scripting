/**
 Esercitazione 1

Scrivere un blocco di codice Javascript che
stampi a console i primi dieci interi pari compresi
tra 20 e 0, partendo da 20. Importante non
bisogna usare delle costanti, ma solo le
istruzioni if e for.

for (i = 20; i > 0; i--) {

    if (i % 2 == 0) {

       console.log(i);

    }

}
*/


/**Esercitazione 2

Scrivere un blocco di codice Javascript che
stampi a console i primi dieci numeri interi,
escluso lo zero, in lingua italiana. 
for (i = 20; i > 0; i--) {

    if (i % 2 == 0 && i !== 0) {

        switch (i) {

            case 2:
                console.log(i);
                break;
        
            case 4:
                console.log(i);
                break;
        
            case 6:
                console.log(i);
                break;
        
            case 8:
                console.log(i);
                break;
        
            case 10:
                console.log(i);
                break;
        
            case 12:
                console.log(i);
                break;
        
            case 14:
                console.log(i);
                break;
        
            case 16:
                console.log(i);
                break;
        
            case 18:
                console.log(i);
                break;
        
            case 20:
                console.log(i);
                break;
        
            default:

                break;

        }

    }

}
*/

/*
Esercitazione 3

Scrivere un blocco di codice Javascript che dato
un numero stampi la tabellina corrispondente.
 
let numero = 2;
for (let i = 1; i <= 10; i++) {
    
    console.log(numero*i);
    
}
*/

/*
Esercitazione 4

Scrivi un blocco di codice che dato un array di
numeri, calcoli la media dei valori e restituisca in
output la media e tutti i valori minori della media.

Esempio:
Input: a = [3, 5, 10, 2, 8]
Output: media = 5.6, valori minori = [3, 5, 2]
*/


const numeri = [3, 5, 10, 2, 8];
//somma valori
let somma = 0;
let elementi = numeri.length;
let media = 0;

for (let i of numeri) {

    somma +=  i;

}

media = somma / elementi;

for (let i of numeri) {

    if (i < media) {

        console.log(i);

    }

}

console.log("Media: " + media);

//ESERCIZI FUNZIONI-----------------------------------------------

/*
Esercitazione 1

Scrivi una funzione che prenda in input un numero e
restituisca TRUE se è un numero primo, FALSE
altrimenti.
Scrivi una seconda funzione, che prenda in input un
numero N e stampi i primi N numeri primi.
Esempio:
Input: n = 5
Output: true 2 3 5 7 11
*/



