function auto(marca,modelo,año){
    this.marca=marca;
    this.modelo=modelo;
    this.año=año;
};

for (var i = 0; i<10;i++){
    marca = prompt("ingresa que marca es el carro");
    modelo = prompt("ingresa que modelo es el carro");
    año = prompt("ingresa que año es el carro");
    var autos = new auto(marca,modelo,año);
    console.log(autos);
}
var autoNuevo = new auto("tesla","model s",2022);
var autoNuevo1 = new auto("toyota","supra mk4",2018);
var autoNuevo2 = new auto("mazda","rx7",1990);