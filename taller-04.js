// Punto 1
function promedioFinal(listaNumeros) {
  return listaNumeros.flat().reduce((acumulado, valor) => acumulado + +valor, 0) /
    listaNumeros.flat().length;
}

// Punto 2
function limpiarNombre(nombre) {
  return nombre.trim().split(" ");
}

// Punto 3
function sortObjects(listaObjetos, key) {
  return listaObjetos.sort((item1, item2) => item1[key] - item2[key]);
}

// Punto 4
function limpiarLista(data_users) {
  const users = data_users.split(";").slice(1,-1)
  
  const lista_limpia = users.map(user => {
    const [name, curso, ...notas] = user.split(",");

    return {
        nombre: limpiarNombre(name)[0],
        apellido: limpiarNombre(name)[1],
        curso: curso,
        notas: notas.slice(0, -1),
        final: promedioFinal(notas.slice(0, -1)),
      };
  })

  return lista_limpia
}

// Punto 5
function bestlnClass(data_csv, curso){
  estudiantes = limpiarLista(data_csv)
  return sortObjects(estudiantes, "final").filter(estudiante => estudiante.curso === curso).slice(-3);
}

