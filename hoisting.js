/*Es llamar variables en un orden en especifico es decir usarlas despues de declararlas no antes ya que saldria undefine, por que primero
se debe declarar antes de usar la variable */

/*cuando en visula studio code aparece la palabra como opaca es por que la variable o funcion no se esta usando*/

var nombre = "Aaron";

function saludo() {
    console.log("Hola " + nombre);
}

saludo();



//mal

saludo();

function saludo() {
    console.log("Hola " + nombre);
}

var nombre = "Aaron";