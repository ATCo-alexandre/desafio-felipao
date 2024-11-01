const prompt=require("prompt-sync")({sigint:true});
console.log("Desafio Classificador de Nível de Herói")
console.log("***************************************")
let nome_heroi = prompt("Diga o nome do herói: ")
let xp = prompt("Diga a Experiência de seu Herói: ")
let nivel_heroi = 0
if (xp <= 1000) {
    nivel_heroi = "Ferro"
} else if (xp >= 1001 && xp <= 2000) {
    nivel_heroi = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
    nivel_heroi = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
    nivel_heroi = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
    nivel_heroi = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
    nivel_heroi = "Ascendente"
} else if (xp >= 9001 && xp <= 1000) {
    nivel_heroi == "Imortal"
} else {
    nivel_heroi = "Radiante"
}
console.log("***************************************")
console.log("===> O Herói de nome " + nome_heroi + " está no nível de " + nivel_heroi + ".")