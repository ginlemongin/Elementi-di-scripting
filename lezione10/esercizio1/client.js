function eseguiGet(){
    let xhr = new XMLHttpRequest();

    /**uri che è l'api */
    xhr.open("GET", "https://dev.entrainhotel.com/wp-json/wao-portali/v1/mappaHotels?pagina=1&per_page=-1&comune=Rimini&trattamenti=&categorie_struttura=&servizi=&family=&bnb=")
    
    /** faccio il send delal richiesta*/
    xhr.send();

    /**se larisposta va a buon fine */
    xhr.onload = function() {
        console.log(xhr.status);
    }
    
    /**se mi da errore */
    xhr.onerror = function () {
        console.log(xhr.statusText);
    }
}

/**mi aspeto come risposta un errore del cors
 * perchè la paginetta non è autorizzata a richiedere le API da uqesto sito */
setTimeout(function () {eseguiGet();} , 5000)