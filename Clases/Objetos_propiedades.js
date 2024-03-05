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

const la_ferrari = new Car({
    model: 2010,
    brand: "ferrari",
    traction: 4,
    doors: 2,
    engine: "v12",
    Modification: ["wing","paint"]

})

const porsche_taycan = new Car({
    model: 2020,
    brand: "porsche",
    traction: 2,
    doors: 2,
    engine: "v10",
    Modification: ["wing"]

})

const Pagani_zonda_r = new Car({
    model: 2012,
    brand: "pagani",
    traction: 4,
    doors: 2,
    engine: "v12",
    Modification: []

})

const gareje_medllo = new Garage({
    garage_name: "garaje_rionegro",
    cars: []
})

const gareje_rionegro = new Garage({
    garage_name: "garaje_rionegro",
    cars: []
})

gareje_medllo.add_car(la_ferrari);
gareje_medllo.add_car(bugatti_chiron);

gareje_rionegro.add_car(porsche_taycan);
gareje_rionegro.add_car(Pagani_zonda_r);



console.log(gareje_medllo);
console.log(gareje_rionegro);


