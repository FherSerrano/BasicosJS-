//Function Expression - Funcion

//Declaracion de funcion 
function sumarDeclaration(n1=0, n2=0){
    return n1 + n2
}

console.log(sumarDeclaration(10,10))
 
//Expresion de funcion 
const sumarExpression = function(n1=0, n2=0){
    return n1 + n2

}

console.log(sumarDeclaration(10+15))

//Funciones Arrow 
const sumarArrow = (n1=0, n2=0,) => {
    return n1 + n2

}

console.log(sumarArrow(5,50))

const sumarArrow2 = (n1=0, n2=0) => n1+n2
console.log(sumarArrow2(10,20)) 

//Arrow Function Y Array Methods
const lenguajesDeProgramacion = ["JavaScript" , "Python" , "#C" , "Ruby" , "PHP" , "LISP" ]  

const nuevoArray = lenguajesDeProgramacion.map(function(lenguaje)){
    if (lenguaje === 'Python') {
       return 'Mojo'
    }else{
        return lenguaje
    }
}