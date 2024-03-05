class Car {
    constructor({
        model,
        brand,
        traction,
        doors,
        engine,
        garage = []
    }){
        this.model = model;
        this.brand = brand;
        this.traction = traction;
        this.doors = doors;
        this.engine = engine;
        this.garage = garage;
    }
}

const laFerrari = new Car({
    model: 2000,
    brand: "Ferrari",
    traction: 4,
    doors: 2,
    engine: "v8"
})
