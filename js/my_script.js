// Oggi tornerete a lavorare da soli, anche se i ticket saranno sempre un'opportunità per capire meglio quello che starete realizzando!
// Snack 3 (i primi sarebbero quelli di ieri)
// Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice) compresa tra i due numeri specificati.
// Usiamo i nuovi metodi degli array forEach() o filter().

function myFunzione (array, min, max){
    // console.log(array, min, max);
    let nuovoArray = array.filter((element,index ) => {
        console.log(element, index);
        if ( index >= min && index <= max){
            return true;
        } else {
            return false;
        };
    });
    return nuovoArray
};

let numeri = [1, 2, 3, 4];


let nuovoArray = myFunzione(numeri, 0, 2);
console.log(nuovoArray);    


/**
 * Crea una funzione con 3 parametri nome cognome e età che mi crea un oggetto studente e poi me lo ritorna
 */

function objStudente (nome, cognome, età){
    let studente = {
        nome : nome,
        cognome : cognome,
        età : età,
    }
    return studente;
};

let nuovoStudente = objStudente ("morena", "fischione", 37);
console.log(nuovoStudente);
