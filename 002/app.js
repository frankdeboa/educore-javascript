console.log("Encontro 2")

/*/
Sintaxe javascripts, variáveis e tipos de dados
*/

//variáveis

nome = "Frank"
console.log(nome)
var nome = "Davi"
console.log(nome)
var nome = "Tramontin"
console.log(nome)
let sobrenome = "Travon"
console.log(sobrenome)

if (10 > 3) {
    console.log("10 maior que 3")
    var idade = 21
    console.log(idade)
}

let midia = "tv"
console.log(midia)

//tipos de dados
let idade2
let apelido

idade2 = 15
apelido = "deboa"
console.log(typeof idade)
console.log(typeof apelido)

let concorda = true
console.log(typeof concorda)

let carros = ['gol', 'corsa', 'uno']
console.log(typeof carros)

let pessoa = {'nome':'frank', 'idade':37}
console.log(typeof pessoa)

document.getElementById("titulo").style.backgroundColor = "lightgreen"
console.log(document.getElementById("titulo"))
document.getElementById("titulo").innerText = "Melhor Sabor"
let titulodapagina
titulodapagina = document.getElementById("titulo").innerText
console.log(titulodapagina)

let elementoSubtitulo
elementoSubtitulo = document.getElementById("subtitulo")
console.log(elementoSubtitulo)
elementoSubtitulo.style.backgroundColor = "lightgreen"
elementoSubtitulo.innerHTML = "<em>Seu restaurante Certo</em>"

console.table(elementoSubtitulo)

let frutas = ["🍕","🍔","🍟"]
console.log(frutas)
console.dir(frutas)
console.table(frutas)