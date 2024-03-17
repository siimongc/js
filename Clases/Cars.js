class Car {
    constructor({
        model,
        brand,
        traction,
        doors,
        engine,
        Modification = []
    }){
        this.model = model;
        this._brand = brand;
        this.traction = traction;
        this.doors = doors;
        this.engine = engine;
        this.Modification = Modification;
    }

    get brand() {
        return this._brand;
    }

    set brand(brand){
        if(brand === "carro_feo"){
            console.error("ese no")
        }
        else{
            this._brand = brand;
        }
    }
}

class clasic_car extends Car{
    constructor(props){
        super(props);
    }

    is_clasic(car){
        if(car.model < 1990){
            console.log(this.brand + " es un clasico")
        }
        else{
            console.warn("Lo siento tu "+ this.brand +" no es un clasico")
        }
    }
}

class electric_car extends Car{
    constructor(props){
        super(props);
    }

    is_electric(car){
        if (car.brand == "Tesla"){
            console.log("Es electrico");
        }
        else{
            console.warn(this._brand + "es un carro de combustion");
        }
    }
}

class super_car extends Car{
    constructor(props){
        super(props);
    }

    is_super(car){
        if(car.engine == "v8" || car.engine == "v10" || car.engine == "v12" ){
            console.log(this.brad + " es un superdeportivo");
        }
        else{
            console.warn(this.brand + " No es superdeportivo");
        }
    }
}

class Garage {
    constructor({
        cars = [],
        garage_name
    }) {
        this.garage_name = garage_name;
        this.cars = cars;
    }

    add_car(new_car){
        this.cars.push(new_car);
    }
}

const bugatti_chiron = new Car({
    model: 2005,
    brand: "bugatti",
    traction: 4,
    doors: 2,
    engine: "v12",
    Modification: ["wing","wheels"]

})

const la_ferrari = new super_car({
    model: 2010,
    brand: "ferrari",
    traction: 4,
    doors: 2,
    engine: "v12",
    Modification: ["wing","paint"]

})

const porsche_taycan = new super_car({
    model: 2020,
    brand: "porsche",
    traction: 2,
    doors: 2,
    engine: "v10",
    Modification: ["wing"]

})

const Pagani_zonda_r = new super_car({
    model: 2012,
    brand: "pagani",
    traction: 4,
    doors: 2,
    engine: "v12",
    Modification: []

})

const garage_medallo = new Garage({
    garage_name: "garaje_medallo",
    cars: []
})

const gareje_rionegro = new Garage({
    garage_name: "garaje_rionegro",
    cars: []
})

garage_medallo.add_car(la_ferrari);
garage_medallo.add_car(bugatti_chiron);

gareje_rionegro.add_car(porsche_taycan);
gareje_rionegro.add_car(Pagani_zonda_r);



console.log(garage_medallo);
console.log(gareje_rionegro);
console.log("primer carro del garage medallo", garage_medallo.cars[1
]);

