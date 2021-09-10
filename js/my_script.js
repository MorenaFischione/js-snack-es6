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


/**
    Creare un array di oggetti di squadre di calcio.
    Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
    Nome sarà l'unica proprietà da compilare, mentre le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti
 */

    let squadra = [
        {
            nome : "tornimparte",
            puntiFatti : 0,
            falliSubiti : 0,
        },
        {
            nome : "pizzoli",
            puntiFatti : 0,
            falliSubiti : 0,
        },
        {
            nome : "coppito",
            puntiFatti : 0,
            falliSubiti : 0,
        },
        {
            nome : "cagnano",
            puntiFatti : 0,
            falliSubiti : 0,
        },
    ]


    for ( let i = 0; i < squadra.length; i++) {
        let squadraAttuale = squadra[i];
        squadraAttuale.puntiFatti = getRandomNumber(0,150);
        squadraAttuale.falliSubiti = getRandomNumber(0,150);
    };

    console.table(squadra);


    // Creo una funzione che genera un numero randomico
    function getRandomNumber(min, max){
	    return Math.floor(Math.random() * (max - min + 1)) + min;
    };



/**
    Creare un array di oggetti: ogni oggetto descriverà una bici 
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
 */


  let bici = [
        {
        nome : "Bianca",
        peso : 250,
        },
        {
        nome : "Nera",
        peso : 300,
        },
        {
        nome : "Rossa",
        peso : 350,
        },
  ];

  let bicicletteLeggera =   bici[0];

  for ( let i = 0; i < bici.length; i++) {
      let biciAttuale = bici[i];
        if (biciAttuale.peso < bicicletteLeggera.peso){
            bicicletteLeggera = biciAttuale;
        }
  }

  console.table(bicicletteLeggera);
