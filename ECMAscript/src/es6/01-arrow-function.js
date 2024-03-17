
//! funcion normal
function square(x){
    return x * x;
}

//! asignarle a una variable o constante una funcion
const square = (x) => {
    return x * x
}

//! una especie de lamda con el return explicito y sin necesidad de usar handlebars (solo se usa para funciones simples)
const square = x => x * x;