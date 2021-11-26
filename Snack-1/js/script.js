// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

const bikes = [
    {
        name: 'Graziella',
        weight: 20
    },
    {
        name: 'Mountain-bike',
        weight: 25
    }
];

let lighterBike = bikes[1];

for( let i = 0; i < bikes.length; i++){
    const thisBike = bikes[i];
    if(thisBike.weight < lighterBike.weight){
        lighterBike = thisBike;
    }
}

const {weight} = lighterBike; 

const bikeHTML = `
<h1>La bici più leggera pesa</h1>
<h3>${weight} kg</h3>
`;

const bikeDiv  = document.getElementById('bike');
bikeDiv.innerHTML = bikeHTML;