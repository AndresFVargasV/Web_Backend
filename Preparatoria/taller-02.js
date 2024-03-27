
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
    for (let index = 0; index < listaNumeros.length; index++) {
        if (listaNumeros[index]===objetivo){
            return true
        }   
    }
    return false
}

// Punto 4

function sum(listaNumeros){
    return listaNumeros.reduce((acumulador, valor) => acumulador + valor, 0)
}

// Punto 5

function missingNumbers(listaNumeros){
    numMayor = Math.max(...listaNumeros)
    numMenor = Math.min(...listaNumeros)

    resultado = []

    for (let index = numMenor; index < numMayor; index++) {
        if (!listaNumeros.includes(index)){
            resultado.push(index)
        }
    }
    return resultado
}
