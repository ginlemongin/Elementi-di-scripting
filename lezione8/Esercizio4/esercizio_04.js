function avanti(){
    /**prendiamo i lcarosello con document get element  by id
     * 
     * dopo l'oggetto carosello rppresenta l' ul e dobbiam ofare un ciclo, perchè quando faccio il primo non mi cavo
     * via piu.
     * 
     * in questo caso l'elemento è visibile torna a 0, questo funziona in tutti i casi tranne nell'ultimo caso
     * perchè fa 2+1=3 quindi facciamo un if
     * carosello.children[index].className = "d-none";
     * carosello.children[index + 1].className = "";
     * 
     *if (index === carosello.children.length-1){
        carosello.children[0].className = "";
    }else{
        carosello.children[index + 1].className = "";
    }

    ora facciamo una fuznione avantiInditro per non fare lo stesso codice nella funzione avanti ed indietro
     */
    function avanti() {
        avantiIndietro("+");
    }
    
    function indietro() {
        avantiIndietro("-");
    }
    
    function avantiIndietro(direzione) {
        let carosello = document.getElementById("carosello");
        let index = getLiActive();
        if (index === -1) {
            return;
        }
    
        carosello.children[index].className = "d-none";
        if (direzione === "+") {
            if (index === carosello.children.length - 1) {
                carosello.children[0].className = "";
            } else {
                carosello.children[index + 1].className = "";
            }
        } else {
            if (index === 0) {
                carosello.children[carosello.children.length - 1].className = "";
            } else {
                carosello.children[index - 1].className = "";
            }
        }
    }
    
    /** mi ritorna l'indice posizionale del mio li che non ha d-none */
    function getLiActive() {
        let carosello = document.getElementById("carosello");

        /**faccio ciclo for dove il mio array è carosello.children
     * 
     * l'element è il mio <li> perchè i figli di ul sono li non le immagini
     * quindi il mio ul.
     * poi fai il return di index, poi faccio return -1
     */
        for (let index = 0; index < carosello.children.length; index++) {
            const element = carosello.children[index];
            if (element.classList.length === 0) {
                return index;
            }
        }
        return -1;
    }
}