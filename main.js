
/*
// EXERCICE IF/ELSE

var a = 4
var b = 4
var c = 3

if(a=b) {
    console.log("c'est egal")}
    if(c<b && a+c!=3) {
        console.log("ok")
    } else {
        console.log("c'est rate")
    }
*/





/* 
// EXERCICE SWITCH

var a = 4
var b = 4
var c = 3

switch(a) {
    case b:
        console.log("egal a b")
        break
        case c:
            console.log("egal a c")
            break
            default:
                console.log("egal a rien")

}

*/





/*
// EXERCICE FOR

var a = 13

for(let i=0; i<a; i++) {
    console.log("oklm")
}
*/





/*
// EXERCICE WHILE

var a=3 
while(a<9) {
  a++
  if(a=8) {
    break
  }
  if(a=7) {
    continue
  }
  console.log(a)
}
*/





/*
// EXERCICE FONCTION

var a = "Jean"
var b = "Paul"
var result=checkName(a, b)

function checkName(name1, name2) {
    if(name1 == name2){
    result=console.log("les noms sont identiques")
    } else {
        result=console.log("les noms sont differents")
    }
    {console.log(result)
    }
}
*/





/*
// EXERCICE TABLEAU

let names = [] 
names.push("Vincent") 
names.push("Paul") 
names.push("Arthur")

names.forEach(function(names) {
  console.log(names+=" va a la peche")
    
})
*/





/*
// EXERCICE OBJETS 

let student = {
    name: 'Iris',
    favoriteFood: 'Salmon',
    city: 'Paris',
}

var nameCar = student.name.length
var foodCar = student.favoriteFood.length
var cityCar = student.city.length


if(nameCar+foodCar+cityCar % 2 == 1){
    console.log("pair")
}else{
    console.log("impair")
}
*/

/*
//EXERCICE CLASS

class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
isLucky() {
   return Math.random()<this.luck
}
attackPokemon(pokemon) {
    if (this.isLucky()) {
        var degats =this.attack-pokemon.defense
        pokemon.hp -= degats
        console.log(this.name + " attaque " + pokemon.name + " de " + degats + " degats, il lui reste " + this.hp + " points de vie")
    } else {
        console.log(this.name + " rate son attaque ")
    }
    }
}

let hericendre = new Pokemon("hericendre", 75, 30, 110, 0.8)
let tiplouf = new Pokemon("tiplouf", 40, 60, 100, 0.7)

while (hericendre.hp > 0 && tiplouf.hp > 0) {
    hericendre.attackPokemon(tiplouf)
    tiplouf.attackPokemon(hericendre)

    if (tiplouf.hp <= 0){
        console.log("Tiplouf est mort");
        break;
    }
    if (hericendre.hp <= 0){
        console.log("Hericendre est mort");
        break;
}
}
*/





/*
// EXERCICE DEBUG
let users = ["Stephanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"]

function countCharacter(value) {
    return value.lengh
}

users.forEach(users =>  {
    if(countCharacter(users) > 5) {
    console.log("c'est un prenom long de plus de 5 lettres.")
} else {
    console.log("ce n'est pas du tout un prenom long.")
}
})
*/





/*
// EXERCICE LE TAXI

const john = {
    nom: "John",
    santeMentale: 10,
    changeTaxi: 0 
  }
  
  const musiques = ['Anissa-Wejdene', 'Amnesie-Damso', 'The Great War-Taylor Swift', 'Quit-Cashmere Cat', 'Dynasty-MIIA']
  
  for (let i = 0; i < 30; i++) {
    const MusiqueFeuRouge = Math.floor(Math.random() * 5)
    const musiqueChoisie = musiques[MusiqueFeuRouge]
  
    if (musiqueChoisie === 'Anissa-Wejdene') {
      john.santeMentale -= 1
      john.changeTaxi += 1
      console.log("John a perdu 1 point de sante mentale car il a entendu Anissa-Wejdene. Sante mentale actuelle : " + john.santeMentale + ". John a donc change de taxi. Feux rouges restants : " + (30 - i))
    } else {
      console.log("John est en train d'ecouter " + musiqueChoisie + " dans le taxi. Feux rouges restants : " + (30 - i))
    }
  
    if (john.santeMentale <= 0) {
      console.log("Explosion")
      break

    } else if (i === 29) { 
      console.log("John est bien arrive chez lui, il lui a fallu " + john.changeTaxi + " changements de taxi")
    }
  }
  */





/*
//EXERCICE TUEUR EN SERIE

let prenom = ["Patty", "Maude", "Sienna", "Victoria", "Maisie"]

class tueur{
    constructor(nom, hp){
    this.nom=nom;
    this.hp=hp;
    }
}

tueurs = new tueur("jason",100);
class caracteristique {
    constructor(nom, mourir, degat, degatMourir){
        this.nom = nom
        this.mourir = mourir
        this.degat = degat
        this.degatMourir = degatMourir
    }
}

function pepol(np){
    return Math.floor(Math.random()* np)
}

function proba(){
    return Math.random()
}

let intelligente= new caracteristique(prenom[Math.floor(Math.random() * 5)] ,0.3 , 0.5, 0.2)
let sportive = new caracteristique(prenom[Math.floor(Math.random() * 5)] ,0.3 , 0.5, 0.2)
let blonde= new caracteristique(prenom[Math.floor(Math.random() * 5)] ,0.3 , 0.5, 0.2)
let grande= new caracteristique(prenom[Math.floor(Math.random() * 5)] ,0.3 , 0.5, 0.2)
let jeune= new caracteristique(prenom[Math.floor(Math.random() * 5)] ,0.3 , 0.5, 0.2)

let players =[intelligente, sportive, blonde, grande, jeune]

console.log(players)

while(tueurs.hp > 0 && players.length > 0 ){

    npeople = pepol(players.length)
    player= players[npeople]
    prob= proba()

    if(prob<= player.mourir){
        console.log(player.nom+players+" a ete tuer par Jason")
        players.splice(npeople,1)
    }

    else if (prob <= player.mourir+ player.degat){
        tueurs.hp-=10;
        console.log(player.nom+players+" a esquive Jason et lui a inflige 10 degats. Jason a maintenant " + tueurs.hp + " point de vie")
    }
    else{
    tueurs.hp-=15;
    console.log(player.nom+players+" a inflige 15 degats a Jason puis est mort. Jason a maintenant " + tueurs.hp + " point de vie")
    players.splice(npeople,1)
    
    }

}

if(tueurs.hp == 0){
    console.log("Les survivants ont gagne, Jason est mort")
}
else if (players.length == 0){
    console.log("Jason a tuer tous les survivants")
}
*/