function eseguiGet() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos")
    xhr.responseType = "json";
    xhr.send();

    /**metto nella funziona onload una funzione che disegna la tabella
     * passo xhr response
     */
    xhr.onload = function () {
        disegnaContenuto(xhr.response);
    }

    xhr.onerror = function () {

    }
}

/**resp è un array che viene convertito in json e lociclo con un for*/
function disegnaContenuto(resp) {
    let divRoot = document.getElementById("result");
    divRoot.innerHTML = "";
    for (let index = 0; index < resp.length; index++) {
         const element = resp[index];

         /**creo righe e colonne */
         let riga = creaDivRighe(index);
         riga.appendChild(creaDivColonne(element.id));
         riga.appendChild(creaDivColonne(element.title));
         riga.appendChild(creaDivColonne(creaStato(element.completed)));         divRoot.appendChild(riga);
    }
}

/**cambio icona dello stato invece di true */
function creaStato(stato){

    /**tag di bootstrap con le icone*/
    if (stato) {
        return '<i class="bi bi-check-circle-fill"></i>';
    } else {
        return '<i class="bi bi-check-circle"></i>'
    }
}

function creaDivColonne(valoreTesto) {
    let divCol = document.createElement("div");
    divCol.className = "col-md-3";
    divCol.innerHTML = valoreTesto;
    return divCol;
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


eseguiGet();

