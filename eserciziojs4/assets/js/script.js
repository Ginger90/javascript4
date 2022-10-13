// Crea una stringa e modifica con i metodi delle stringhe per ottenere i seguenti risultati

var imparo = "Sto imparando javascript";
var maiuscolo = imparo.toUpperCase();
document.getElementById('maiuscola').innerHTML = maiuscolo;

//

var minuscolo = imparo.toLowerCase();
document.getElementById('minuscola').innerHTML = minuscolo;

//

var stringa = imparo.split("");
document.getElementById('strArray').innerHTML = stringa;

//

var slice = imparo.slice (2,3);
//var slice = imparo.slice (20,26);
var slice = imparo.slice(23,24);
//document.getElementById('estraiCaratteri').innerHTML = slice;
document.getElementById('estraiCaratteri').innerHTML = imparo[2] + imparo[23] + imparo[14] + imparo[18];

//

var conca = imparo.concat(" JS");
document.getElementById('concatena').innerHTML = conca;

//

var estrai = imparo.slice(5, 9);
document.getElementById('estraiStringa').innerHTML = estrai;


//Crea un array di quattro persone e stampa a video l'intero, la sua lunghezza, un singolo elemento, l'ultimo elemento, l'intero array con un elemento modificato

var array = ['Giovanni', 'Carla', 'Pietro', 'Mirtilla'];
document.getElementById('array').innerHTML = array;

//

document.getElementById('lunghezza').innerHTML = array.length;

//

document.getElementById ('ultimo').innerHTML = array[3];

//

document.getElementById ('elemento').innerHTML = array[2];

//

array.splice(2,1,'Massimo')
document.getElementById('modificato').innerHTML = array;


//Passando un array come argomento a una funzione, calcola l'età delle persona come indicato di seguito, poi trasforma le cinque età in un array e stampalo

const calcoloAnni = function(compleanno) {
    return 2022 - compleanno;
}
const anni = [2001, 1990, 1987, 2018, 2010];
const eta1 = calcoloAnni(anni[0]);
const eta2 = calcoloAnni(anni[1]);
const eta3 = calcoloAnni(anni[2]);
const eta4 = calcoloAnni(anni[3]);
const eta5 = calcoloAnni(anni[4]);

document.getElementById('eta1').innerHTML += eta1 + 'anni';
document.getElementById('eta2').innerHTML += eta2 + 'anni';
document.getElementById('eta3').innerHTML += eta3 + 'anni';
document.getElementById('eta4').innerHTML += eta4 + 'anni';
document.getElementById('eta5').innerHTML += eta5 + 'anni';

var numeri =[eta1,eta2,eta3,eta4,eta5];

document.getElementById('arrayEta').innerHTML += numeri;


//Crea un array di quattro animali, manipolalo per ottenere il risultato come di seguito e verifica due volte l'esistenza di un dato elemento


var animali =['coniglio','cane','gatto','criceto'];
document.getElementById('intero').innerHTML = animali;

// 

animali.push('leone');
document.getElementById('aggiunto').innerHTML = animali;

//

nuovoArray = animali.slice(0,4);
document.getElementById('estratto').innerHTML = nuovoArray;

//

document.getElementById('verifica1').innerHTML = animali.includes('cane');
document.getElementById('verifica2').innerHTML = animali.includes('gufo');



