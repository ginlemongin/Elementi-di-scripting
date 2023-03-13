//! WHILE
let numero1 = 1;
let numero_max = 10;
let numero_min = 0;

while (numero1 > numero_min && numero1 <= numero_max) {  //finchè il numero selezionato è maggiore di 1 E anche minore uguale di 10
    console.log(numero1); //Stampami quel numero
    numero1++; //Esso però aumenterà ad ogni stampa, quindi arrivato a 10, si fermerà
}



//! WHILE CON BOOLEANI
let numero3 = 0;
let check = true;

while (check) { //finché la variabile check è vera
    console.log(numero3); //stampami numero3
    numero3++; //essa aumenterà di 1 ad ogni stampa
    if (numero3 > 20) { //se numero3 arrivasse ad essere maggiore di 20
        check = false; //la variabile check diventerebbe falsa e quindi la stampa si arresterebbe
    }
}



//! DO WHILE
let numero2 = 0;

do { //fai questo almeno una volta
    console.log(numero2); //stampami numero2
    numero2++; //ad ogni stampa il numero2 aumenterà di 1
} while (numero2 <= 10); //finché esso sarà minore uguale a 10, continuerà a stampare



//! FOR IN   è utilizzato per scorrere i valori degli elementi
//TODO for in è utilizzato sugli oggetti, non è possibile utilizzare for of su essi
let persona = { nome: "Mario", cognome: "Rossi", età: 30 }; //oggeto con al suo interno varie proprietà (nome, cognome, età)

for (let proprieta in persona) { //scorre tutte le proprietà nell'oggetto "persona"
    console.log(persona[proprieta]); //ed alla fine mi restituisce il valore delle proprietà contenute nella variabile "persona"
}//risultato: Mario  Rossi  30

//TODO se utilizzassimo for in per iterare su array, invece che su un oggetto, il risultato sarebbe lo stesso, ma non è comune farlo, è molto più semplice utilizzare for of
let numeri1 = [1, 2, 3, 4, 5];

for (let valore in numeri1) { //itero tutti i valori nella variabile "numeri1"
    console.log(numeri1[valore]); //stampo il valore della vatiabile "numeri1"
}//risultato: 1  2  3  4  5

//TODO se volessimo stampare gli indici dell'array, invece del suo valore
let numeri2 = [2, 4, 7, 3, 8];

for (let indice in numeri2) { //itero tutti i valori nella variabile "numeri2"
    console.log(indice); //stampo gli indici della vatiabile "numeri2"
}//risultato: 0  1  2  3  4




//! FOR OF   è utilizzato per scorrere gli elementi    
//TODO for of è utilizzato per iterare SOLAMENTE su array, sia stringhe, che numeri. Non è possibile utilizzarlo sugli oggetti, in quanto non sono iterabili
let numeri3 = [1, 2, 3, 4, 5];

for (let valore of numeri3) { //scorre tutti gli elementi dell'array "numeri3"
    console.log(valore); //ed alla fine mi restituisce i valori degli elementi
}//risultato: 1  2  3  4  5

// Esempio con stringhe
let parenti = ["Mamma", "Papà", "Fratello", "Sorella"];

for (let parente of parenti) { //scorre tutti gli elementi dell'array "parenti"
    console.log(parente); //ed alla fine mi restituisce i valori degli elementi
}//risultato: Mamma  Papà  Fratello  Sorella



//! CONTINUE 
let numeroX = 0;
while (true) {  //finchè la condizione è true
    console.log(numeroX); //stampa numeroX
    numeroX++; //esso aumenterà di 1 ad ogni stampa
    if (numeroX > 20) break; //se numeroX dovesse diventare maggiore di 20, break stopperà la stampa
}



//! BREAK
let numeroY = 0;
while (numeroY < 10) { //finchè numeroY è minore di 10
    numeroY++; //esso aumenterà 
    if (numeroY > 3) continue; //fino a quanto numeroY non supererà il 3, continuerà a stampare
    console.log(numeroY)
}/*Il ciclo continua ad essere comunque eseguito, perché inizialmente gli abbiamo detto di eseguirlo finché numeroY
sarà minore di 10, però stamperà solo fino al 3*/
