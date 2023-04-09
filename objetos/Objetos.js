var objetoCarro = {
    marca: "mazda",
    modelo: "rx-7",
    año: "1990",
    detalle: function(){
        console.log(`auto ${this.modelo} ${this.año}`);
    }
};

objetoCarro.año;
