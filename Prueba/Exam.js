const datos = require("./datos.json");


function puntoUno(estudiantes) {
  
  const estudiantesEstrella = estudiantes.filter((estudiante) => {

    const promedio = estudiante.courses.reduce((total, courses) => {

        const sumaNotas = courses.assignments.reduce((sumaNota, Nota) => sumaNota + Nota.weight * Nota.grade, 0);

        return total + sumaNotas;
      }, 0) / estudiante.courses.length;

    return promedio > 2.5 && promedio < 3.0;
  });

  return estudiantesEstrella.map((estudiante) => estudiante.personal_info);
}


/* function puntoDos(products, filters) {
  var filteredProducts = [];

  for (let i = 0; i < products.length; i++) {
    if ((filters.id && products[i].id === filters.id) || !filters.id) {
      if ((filters.organization && products[i].organization === filters.organization) ||
        !filters.organization) {
        if ((filters.owner && products[i].owner === filters.owner) || !filters.owner) {
          filteredProducts = [filteredProducts, products[i]];
        }
      }
    }
  }

  return filteredProducts;
} */

function puntoDos(products, filters){
  const filteredProducts = products.filter(product => (
    (!filters.id || product.id === filters.id) 
    && (!filters.organization || product.organization === filters.organization)
    && (!filters.owner || product.owner === filters.owner)
  ));

  return filteredProducts
}



function puntoTres(estudiantes) {
  const estudiantesFiltrados = estudiantes.filter((student) => {
    const edad = 2024 - student.personal_info.birthdate.split("-")[2];
    return edad > 20;
  });

  const estudiantesCorregidos = estudiantesFiltrados.map((estudiante) => {
    const nombreCompleto = `${estudiante.personal_info.first_name} ${estudiante.personal_info.last_name}`;
    const semestreMasReciente = Math.max(...estudiante.courses.map(course => course.semester));

    let titulo = estudiante.personal_info.gender === "M" ? "Sr." : "Sra.";
    let course = estudiante.courses.filter((curso) => curso.semester === semestreMasReciente);

    return {
      id: estudiante.id,
      name: nombreCompleto,
      height: estudiante.personal_info.height,
      semester: estudiante.personal_info.semester,
      birthdate: estudiante.personal_info.birthdate,
      gender: estudiante.personal_info.gender,
      title: titulo,
      courses: course,
    };
  });

  return estudiantesCorregidos;
}

/* function puntoCuatro(user, items) {
  const response = [];
  const activeltems = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].active === true) {
      activeltems.push(items[i]);
    }
  }

  const numNotifs = activeltems.length;
  const userName = user.first_name;
  if (userName === undefined) {
    response.push('Bienvenido');
  } else {
    response.push('Bienvenido, ' + userName);
  }

  if (numNotifs === 0) {
    response.push('No tiene notificaciones. ');
  } else {
    response.push('Tiene ' + numNotifs + ' notificaciones pendientes. ');
  }
  return response;
} */

function puntoCuatro(user, items) {
  const activeItems = items.filter((item) => item.active);
  const numNotifs = activeItems.length;
  const bienvenida = user.first_name ? `Bienvenido, ${user.first_name}`: "Bienvenido";

  const response = [
    bienvenida,
    `Tiene ${numNotifs} ${
      numNotifs === 1 ? "notificación" : "notificaciones"
    } pendientes.`,
  ];

  if (numNotifs === 0) {
    response[1] = "No tiene notificaciones.";
  }

  return response;
}


module.exports = {
  puntoUno,
  puntoDos,
  puntoTres,
  puntoCuatro,
};