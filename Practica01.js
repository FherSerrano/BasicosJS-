let frutas = ["manzana", "banana"]

{
    frutas.push("naranja")
    console.log(frutas)
    frutas.pop()
    console.log(frutas)
}

let numeros = [1, 2, 3, 4, 5, 6]

numeros.forEach(numero => {
    console.log(numero)
})

let numeros2 = [1, 2, 3, 4, 5, 6]

const multiplo_5 = numeros2.map(numero => {
    return numero * 5
})

console.log(multiplo_5)

let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const pares = numeros3.filter(numero => {
    return numero % 2 === 0
})

console.log(pares)

let numeros4 = [10, 20, 30, 40, 50, 60]

const mayor_45 = numeros4.find(numero => {
    return numero > 45
})

console.log(mayor_45)

let frutas2 = ["manzana", "banana", "naranja"]

const existe = frutas2.includes("banana")

console.log(existe)

let numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nuevo_arreglo = numeros5.slice(1, 4)

console.log(nuevo_arreglo)

let numeros6 = [1, 2, 3, 4]

const suma = numeros6.reduce((total, numero) => {
    return total + numero
}, 0)

console.log(suma)
