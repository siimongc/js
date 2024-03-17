
//! var es global, se puede leer fuera de los scope {}, se puede reasignar su valor
var lastname = "Gaviria"
lastname = "Molina"
console.log(lastname)

//! no es global, no se puede leer fuera del scope {}, se puede reasignar su valor
let animal = "wolf"
animal = "lion"
console.log(animal)

//! no es global, no se puede leer fuera del scope {}, no se puede reasignar su valor
const fruit = "Granadilla"
fruit = "Manzana"
console.log(fruit)

const names = () => {
    if(true){
        var name1 = "Simon";    //! function scope
        let name2 = "Maria";    //! block scope
        const name3 = "Jorge";  //! block scope 
    }
    console.log(name1);
    console.log(name2);
    console.log(name3);
}