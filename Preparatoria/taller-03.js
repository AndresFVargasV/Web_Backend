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


// Punto 2
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];
        
        for (let j = i + 1; j < nums.length; j++) {
            const num2 = nums[j];
            const suma = num1 + num2;
            
            if (suma === target) {
                return [i, j];
            }
        }
    }
    
    return [];
}
