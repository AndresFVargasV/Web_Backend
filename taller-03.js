// Punto 1

function desglosarString(str, opcion) {
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        const caracter = str.charAt(i);
        if (opcion === "vocales" && "aeiouAEIOU".indexOf(caracter) !== -1) {
            contador++;
        } else if (opcion === "consonantes" && "aeiouAEIOU".indexOf(caracter) === -1) {
            contador++;
        }
    }

    return contador;
}


const cadena = "Hola Mundo";
console.log("Cantidad de vocales:", desglosarString(cadena, "vocales")); 
console.log("Cantidad de consonantes:", desglosarString(cadena, "consonantes"));
