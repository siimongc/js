class Student {
    constructor(name, edad, cursosAprovados){
        this.name = name;
        this.edad = edad;
        this.cursosAprovados = cursosAprovados;
    }
    
    aprobarCurso(nuevoCurso) {
        this.cursosAprovados.push(nuevoCurso);
    }
}

const Simon = new Student(
    "simon",
    21,
    ["Analisis numerico",
     "Ingenieria economica"]
)

Simon.aprobarCurso("Organizacion de pcs");

console.log(Simon);