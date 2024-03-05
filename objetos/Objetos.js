function Perro(name, age, race, trucos, aprenderTruco){
    this.name = name;
    this.age = age;
    this.race = race;
    this.trucos = trucos;
    this.aprenderTruco = function(trucoNuevo){
        this.trucos.push(trucoNuevo);
    }
};

const Aron = new Perro(
    "Aron",
    6,
    "Cruce",
    ["sentarse",
     "ladrar",
     "acostarse"    ]

);

console.log(Aron)