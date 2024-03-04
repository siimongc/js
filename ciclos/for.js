var nombres = ["semon", "maria", "mateo", "karla"];

function saludar(nombres){
    console.log(`hola,${nombres}`);
}

//for clasico
    for(var i=0; i<nombres.length ; i++){
        saludar(nombres[i]);
    }


//for of

    for(var nombre of nombres){
        saludar(nombre);
    }