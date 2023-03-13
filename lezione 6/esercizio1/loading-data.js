/*per contenere i div dell'html */
function creaDivColonne(valoreT){
    let divCol = document.createElement("div");
    divCol.className = "col-3";
    /*dopo aver creato la classe dobbiamo mettere il valore testo che hai in input*/
    divCol.innerHTML = valoreTesto;
    return divCol;
}

/*ogni contatto rappresenta una riga quindi facciamo le righe*/
function creaDivRighe(indice){
    let divRow = document.createElement("div");
    divRow.setAttribute("data-id", indice);
    divRow.className = "row";
    return divRow;
}

/*questo elemnto rappresenta i ldiv che farà da contenitore per le mie righe */
setTimeout(function () {
    let divLoader = document.getElementById("loader");
    divLoader.className = "d-none";
    for (let index = 0; index < listaContatti.length; index++) {
        const contatto = listaContatti[index];
        let divRiga = creaDivRighe(index);
        divRiga.appendChild(creaDivColonne(index));
        divRiga.appendChild(creaDivColonne(contatto.nome));
        divRiga.appendChild(creaDivColonne(contatto.cognome));
        divRiga.appendChild(creaDivColonne(contatto.telefono));
        divRowRoot.appendChild(divRiga); //senza questa rigga non le aggiunge al dom
    }
}, 10000);
