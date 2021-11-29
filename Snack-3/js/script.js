// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const min = 2;
const max = 5;



// FOR EACH
const notFirst = myArray.forEach((element,index,myArray) => {
    if(index > min && index < max){
        console.log(element);
    }
})


// FILTER
const notFirst = myArray.filter((element,index,myArray) => {
    return index > min && index < max;
});

console.log(notFirst);