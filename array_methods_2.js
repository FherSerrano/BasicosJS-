const lenguajeDeProgramacion =  ["JavaScript" , "Python" , "#C" , "ruby",]

//FILTER
nuevoArray = lenguajeDeProgramacion.filter(
    lenguaje => lenguaje ==='JavaScript'
)

console.log(nuevoArray)
//comprobar si un elemento existe
const resultado = lenguajeDeProgramacion.incluides('Ruby')
console.log(resultado)

//Some - devuelve si al menos una cumple la condicion 
const numeros=[10,20,30,40,50]
const resultadoNum = numeros.some(numero=> numero > 15)
console.log('resultado' , resultado)

//Find devuelve el primer elemento que cumpla con la condicion
const resultadoNum2 = numeros.find (numero=> numero > 15)
console.log('resultado num2' , resultadoNum2)

//Every retorna true o false si todos cumplen la condicion
const resultadoNum3 = numeros.every (numero=> numero > 15)
console.log('resultado num3' , resultadoNum3)

//Every retorna true o false si todos cumplen la condicion
const resultadoNum4 = numeros.reduce ((total , numero)=> numero + total , 0)
console.log('resultado num3' , resultadoNum4)

//forEach itera en cada uno de los elementos de un array
const nuevoArray2 =lenguajeDeProgramacion.forEach((total , numero) => numero + total , 0)
console.log('nuevo Array 2' , nuevoArray2)

//crear un nuevo array a partir de uno original
const arrayMap= lenguajeDeProgramacion.arrayMapa(Lenguaje => Lenguaje)
console.log('array Mapa' , arrayMap)


