//la differenza tra for e while?

//while 
let x = 0;
while(x >=0 && x<= 10){
    console.log(x);
    x++;
}
//do while stampa numeri fino a quando il while è minore di 10, quindi stamperà fino ad 11, perchè controlla alla fine la condizione
//si usa qundo vuoi che sia eseguito almeno una volta
do {
    console.log(x);
}while (x < 10);

//la condizione non è su un intero ma su una variabile bool
let check = true;
while(check){
    console.log("Forza Roma");
    if (x >= 20){
        check = false;
    }
    x++;
}

//continue quando y arriva a tre non stampa piu due volte ma una solo
let y = 0;
while(y < 10){
    y++;
    console.log("iterazione: "+y);
    if (y > 3){
        continue;
    }
    console.log(y);
}

//break blocca tutto il while quando arriva  a tre
let y = 0;
while(y < 10){
    y++;
    console.log("iterazione: "+y);
    if (y > 3){
        break;
    }
    console.log(y);
}