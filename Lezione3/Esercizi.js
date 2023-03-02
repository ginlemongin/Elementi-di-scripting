/**Esercitazione 1

Scrivere un blocco di codice Javascript che
stampi a console i primi dieci interi pari compresi
tra 20 e 0, partendo da 20. Importante non
bisogna usare delle costanti, ma solo le
istruzioni if e for. */

for (i = 20; i > 0; i--) {

    if (i % 2 == 0) {

       console.log(i);

    }

}

/**Esercitazione 2

Scrivere un blocco di codice Javascript che
stampi a console i primi dieci numeri interi,
escluso lo zero, in lingua italiana. */

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