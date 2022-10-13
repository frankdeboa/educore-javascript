/*Operadores*/

let n1, n2

n1 = 10
n2 = 2

document.write("N1 + N2 = " + (n1+n2) + "<br>")
document.write("N1 - N2 = " + (n1-n2) + "<br>")
document.write("N1 / N2 = " + n1/n2 + "<br>")
document.write("N1 * N2 = " + n1*n2 + "<br>")

let nome, sobrenome
nome = "João"
sobrenome = " Paulo"
document.write(nome + sobrenome + "<br>") //concatenação

document.write('N1 % N2 = ' + n1%n2 + "<br>") //operador módulo (resto da divisão)

document.write('N1 ** N2 = ' + n1**n2 + "<br>") //operador de potência

document.write (Math.sqrt(16))

function somar(){ //conjunto de código, que damos um nome
    let v1, v2
    v1 = parseFloat(document.getElementById("valor1").value)
    v2 = parseFloat(document.getElementById("valor2").value)
    document.getElementById("resultado").value = v1 + v2
}