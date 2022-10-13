// Operadores de Incremento / Decremento


let n1 = 10, n2 = 2

n1 = n1 + 1
document.write(n1 + "<br>")
document.write(n1++ + "<br>")
//se o ++ antes ele incrementa e mostra se está depois ele mostra
document.write(n1 + "<br>")

document.write(--n1 + "<br>") //aqui está retirando
//ele mostra o resultado original

// let i = 0
// while(i < 5){
//     document.write("Olá <br>")
//     i++
// }

//operadores relacionais

document.write((n1 > n2) + "<br>")
document.write((n1 < n2) + "<br>")
document.write((n1 != n2) + "<br>")
document.write((n1 == n2) + "<br>")
document.write((n1 >= 10) + "<br>")
document.write((n1 <= 6) + "<br>")
document.write((n1 == "10") + "<br>")

let n3 = "10"
document.write((n1 == n3) + "<br>")
document.write((n1 === n3))

/*Operadores lógicos
Todas as expressões devem ser verdadeiras para retornar verdadeiro

10 > 5 --> True
10 > 20 --> False
10 > 5 && 10 > 20 --> False
*/

document.write("<br><br><br>")
document.write(10>5 && 10>20)
document.write("<br>")


/*
|| --> OR ou
Se uma expressão for verdadeira, o retorno é verdadeiro
*/

document.write(10>5 || 10>20)
document.write("<br>")

/*
! --> NOT (não)
inverte o resultado
*/

document.write(!true)
document.write("<br>")
document.write(10>5)
document.write("<br>")
document.write(!10>5)


























