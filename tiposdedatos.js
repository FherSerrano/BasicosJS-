//Tipos de datos
//unfined
//number
//function
//object
//string
//boolean
//symbol
//big int
//null

//unfined
let cliente
console.log (cliente)
console.log (typeof cliente)

//bolean
let descuento = true
console.log (descuento)
console.log (typeof descuento)

//nombre
let num = 7
let num2 = 7.77
let num3 = -7

console.log(num)
console.log(num2)
console.log(num3)

//string o cadena de texto
const alumno = "Fher"
const producto = "Mac mini"
console.log(producto)

const myNum = "77"
const myNum2 = 77

console.log(typeof myNum)
console.log(typeof myNum2)

//big int

const bigNumer = BigInt (55465478784554789788878)
console.log (typeof bigNumer) 
//no puedes mezclar number cong bigint

const a = 1
const b = 3
console.log(a + b)
console.log(a + bigNumer) //error
//utilizamos conversion
console.log(a + Number(bigNumer)) 

//Symbol
const mySymbol1 = Symbol(30)
const mySymbol2 = Symbol(30)

console.log(mySymbol1 === mySymbol2)
console.log(mySymbol1.valueOf())
console.log(mySymbol2.valueOf())

//null
const myVar = null
console.log(typeof myVar)