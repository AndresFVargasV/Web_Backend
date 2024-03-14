
// Punto 1

function invertirString(string) {
    nuevaString = ""
    for (let index = string.length-1; index >= 0; index--) {
        nuevaString += string[index]
    }

    return nuevaString
}

// Punto 2

function findMax(listaNumeros){

    numeroMayor = listaNumeros[0]

    for (let index = 1; index < listaNumeros.length; index++) {

        if (numeroMayor < listaNumeros[index]){
            numeroMayor = listaNumeros[index]
        }    
    }
    return numeroMayor
}

// Punto 3

function includes(listaNumeros, objetivo){

    array.forEach(element => {
        element === objetivo ? return true: false
    });

}