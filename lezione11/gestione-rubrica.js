$(document).ready(
    function () {
        if (rubrica !== null && rubrica !== undefined) {
            //Tolgo lo spinner
            $("#loader").hide();
            stampaContatti();

            /**sostituisco l'html con l'html nuovo, prendo i pulsanti con la classe cnacella
             * e gli imposto gli eventi, ma lo faccio fare solo una volta, quanfo il dom è tutto 
             * visualizzato sulla pagina, poi quando faccio elima contatto richiamo uieta funzione
             *  che prende il div vecchio 
             *  e lo sostuiuisce con uno nuovo che non ha nessun evento settato, per fare in modo che
             * venga eseguito anche dopo lo devi inserire all'interno della funzione che stampa i contatti
             * la funzione dell'evento on clcik sul pulsante cancella*/
            $("button.cancella").on("click", function (event) {
                let id = $(this).attr("data-id");
                console.log(id);
                if (rubrica !== null && rubrica !== undefined && id !== undefined) {
                    rubrica.eliminaContatto(id);
                    stampaContatti();
                }
            });
        }
    }
);


function stampaContatti(listaContatti) {
    if (listaContatti === undefined) {
        listaContatti = rubrica.stampaContatti("az");
    }
    let divRoot = $("#rubrica-row");
    
    /**con questa riga rimuove i contatti quando clicchi cancella*/
    divRoot.html("");
    let divRighe = [];
    divRoot.html("");
    let divRighe = [];
    for (let index = 0; index < listaContatti.length; index++) {
        const contatto = listaContatti[index];
        let divRiga = creaDivRighe(index);
        divRoot.append(divRiga);
        divRiga.appendChild(creaDivColonne(index, "col-1"));
        divRiga.appendChild(creaDivColonne(contatto.nome, "col-3"));
        divRiga.appendChild(creaDivColonne(contatto.cognome, "col-3"));
        divRiga.appendChild(creaDivColonne(contatto.telefono, "col-3"));
        let divActions = creaDivColonne(creaBtnAzione(index, "Cancella"), "col-2");
        divActions.appendChild(creaBtnAzione(index, "Modifica"));
        divRiga.appendChild(divActions);
        divRighe.push(divRiga);

    }
    divRoot.append(divRighe);

    /**dobbiamo far apparire la modale qui per modificare i contatti */
    $("button.cancella").on("click", function (event) {
        let id = $(this).attr("data-id");
        if (rubrica !== null && rubrica !== undefined && id !== undefined) {
            rubrica.eliminaContatto(id);
            stampaContatti();
        }
    });

    $("button.modifica").on("click", function (event) {
        let id = $(this).attr("data-id");
        if (rubrica !== null && rubrica !== undefined && id !== undefined) {
            //rubrica.eliminaContatto(id);
        }
    });


}

function creaDivColonne(valore, classeCss) {
    let divCol = document.createElement("div");
    divCol.className = classeCss;
    if (valore instanceof HTMLElement) {
        divCol.appendChild(valore);
    } else {
        divCol.innerHTML = valore;
    }
    return divCol;
}

function creaBtnAzione(id, azione, callback) {

    let btn = document.createElement("button");
    //vado ad inserire un attributo con l'id del elemento della riga in modo da richiamarlo successivamente
    btn.setAttribute("data-id", id);
    btn.className = "btn btn-block btn-primary " + azione.toLowerCase();
    btn.innerHTML = azione;
    btn.onclick = callback;

    return btn;
}

function creaDivRighe(indice) {
    let divRow = document.createElement("div");
    divRow.setAttribute("data-id", indice);

    if (indice % 2 === 0) {
        divRow.className = "row";
    } else {
        divRow.className = "row bg-light";
    }

    return divRow;
}