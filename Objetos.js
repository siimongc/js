const Kiara = {
    name: "kiara",
    age: 9,
    race: "husky",
    comidasPreferidas: [
        "pollo",
        "cuido con pollo",
        "crocketas de la nevera",
        "cabano"
    ]
};

Kiara.comidasPreferidas.push("galletas")

console.log(Kiara)

function Perro(){
    this.name = "nombre";
    this.age = 9;
    this.race = "raza"
};

const Kiarita = new Perro("kiaris", 9, "husky");

console.log(Kiarita)