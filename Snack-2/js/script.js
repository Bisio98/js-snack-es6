// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let nome;
let puntiFatti;
let falliSubiti;

const soccerTeams =[];


for(let i = 0; i < 5; i++){
    let newSoccerTeam = {
        nome ,
        puntiFatti ,
        falliSubiti
    }
    newSoccerTeam.nome = prompt('Inserire nome squadra:');
    newSoccerTeam.puntiFatti = randomPoints();
    newSoccerTeam.falliSubiti = randomFouls();
    soccerTeams.push(newSoccerTeam);
}

console.log(soccerTeams);

function randomPoints(){
    return Math.floor(Math.random() * 50);
}

function randomFouls(){
    return Math.floor(Math.random() * 150);
}

for( let i = 0; i < soccerTeams.length; i++ ) {
    const tmpSoccerTeam = soccerTeams[i];
    console.log(`${tmpSoccerTeam.nome} : ${tmpSoccerTeam.puntiFatti}`)
}