console.log("Desafio Classificador de Nível de Herói")
var nome_heroi = prompt("Diga o nome do herói: ")
var qtde_exp = prompt("Diga a Experiência de seu Herói: ")
//let nome_heroi = "Alexandre"
var nivel_heroi = 0

if (qtde_exp <= 1000) {
    nivel_heroi = "Ferro"
} else if (1001 <= qtde_exp <= 2000) {
    nivel_heroi = "Bronze"
} else if (2001 <= qtde_exp <= 5000) {
    nivel_heroi = "Prata"
} else if (5001 <= qtde_exp <= 7000) {
    nivel_heroi = "Ouro"
}

console.log("===> O Herói de nome " + nome_heroi + " está no nível de " + nivel_heroi + ".")