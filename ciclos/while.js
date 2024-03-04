var estudiantes = ["simon","maria","mateo"];

function saludar(estudiante){
    console.log(`hola, ${estudiante}`)
}

while(estudiantes.length>0){
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}