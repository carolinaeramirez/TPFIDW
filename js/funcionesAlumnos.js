//---------------Usamos una funcion para capturar los inputs -----------------

let index;
function enviar() {
  obtenerId();
  const nombre = document.getElementById("nombre").value;
  if (nombre === "") {
    alert("Por favor, ingrese su nombre.");
    return false; // Evitar el envío del formulario
  }
  const apellido = document.getElementById("apellido").value;
  if (apellido === "") {
    alert("Por favor, ingrese su apellido.");
  }
  const dni = document.getElementById("dni").value;
  if (dni === "") {
    alert("Por favor, ingrese su DNI.");
  }

  const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  if (fechaNacimiento === "") {
    alert("Por favor, ingrese su fecha de nacimiento.");
  }

  const nacionalidad = document.getElementById("nacionalidad").value;
  if (nacionalidad === "") {
    alert("Por favor, ingrese su nacionalidad.");
  }
  const email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return false; // Evitar el envío del formulario
  }
  const celular = document.getElementById("celular").value;
  // una vez capturados los inputs guardamos la info en un objeto------

  var dataForm = {
    id: index,
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    fechaNacimiento: fechaNacimiento,
    nacionalidad: nacionalidad,
    email: email,
    celular: celular,
  };

  ////----- antes de guardar en localStorage consultamos si hay datos anteriores-------
  var datosAnteriores = localStorage.getItem("alumnos");
  ///// si hay datos los parseamos y sino creamos un array donde guardarlos.
  if (datosAnteriores) {
    listAntArray = JSON.parse(datosAnteriores);
  } else {
    var listAntArray = [];
  }

  listAntArray.push(dataForm); //agregamos los nuevos datos con un push al array
  localStorage.setItem("alumnos", JSON.stringify(listAntArray));
  console.log(listAntArray); // metemos los datos a localStorage.
  //llamamos a la funcion clear para que limpie los campos del formulario despues de enviarlos.
  var txt;
  if (confirm("Seguro que desar guardar los datos")) {
    txt = "";
    clear();
  } else {
    txt = "prueba 3";
  }
}
// para limpiar el formulario despues de enviar la informacion.
function clear() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("fecha-nacimiento").value = "";
  document.getElementById("nacionalidad").value = "";
  document.getElementById("email").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("carrera").value = "";
  document.getElementById("cuatrimestre").value = "";
}

//obtener ID siguiente:
function obtenerId() {
  const listadoAlumnos = localStorage.getItem("alumnos");
  if (listadoAlumnos) {
    const listadoArray = JSON.parse(listadoAlumnos);
    if (listadoArray.length > 0) {
      index = listadoArray[listadoArray.length - 1].id + 1;
    } else {
      index = 1;
    }
  } else {
    index = 1;
  }
}

//agregar a la tabla
function addAlumnoTabla() {
  const listadoAlumnos = localStorage.getItem("alumnos");
  console.log(listadoAlumnos);
  if (listadoAlumnos !== null) {
    const jsonData = JSON.parse(listadoAlumnos);
    const tableBody = document.getElementById("bodyAlumnos");
    for (let j of jsonData) {
      console.log("informacion del for", j);
      // Nodo tr
      let row = document.createElement("tr");
      // Nodos td
      let cel0 = document.createElement("td");
      let cel1 = document.createElement("td");
      let cel2 = document.createElement("td");
      let cel3 = document.createElement("td");
      let cel4 = document.createElement("td");
      let cel5 = document.createElement("td");

      // Nodos de texto
      let texto0 = document.createTextNode(j.id);
      let texto1 = document.createTextNode(j.nombre);
      let texto2 = document.createTextNode(j.apellido);
      let texto3 = document.createTextNode(j.dni);
      let texto4 = document.createTextNode(j.nacionalidad);
      let texto5 = document.createTextNode("Eliminar");
      let texto6 = document.createTextNode("Editar");

      // Nodo para el botón de eliminar
      let boton = document.createElement("btn-delete");
      boton.style.backgroundColor = "red";
      boton.style.color = "white";
      boton.style.border = "none";
      boton.style.padding = "2px 6px";
      boton.style.cursor = "pointer";
      boton.style.borderRadius = "4px";

      let algo = "eliminar" + j.id;
      boton.setAttribute("id", algo);
  
      // Nodo para el boton editar
      let editar = document.createElement("btn-edit");
      editar.style.backgroundColor = "blue";
      editar.style.color = "white";
      editar.style.border = "none";
      editar.style.padding = "2px 6px";
      editar.style.cursor = "pointer";
      editar.style.borderRadius = "4px";
      editar.style.margin="10px"

      let edt = "editar" + j.id;
      boton.setAttribute("id", edt);

      // Árbol de nodos DOM
      cel0.appendChild(texto0);
      cel1.appendChild(texto1);
      cel2.appendChild(texto2);
      cel3.appendChild(texto3);
      cel4.appendChild(texto4);
      cel5.appendChild(editar);
      cel5.appendChild(boton);

      boton.appendChild(texto5);
      editar.appendChild(texto6);

      row.appendChild(cel0);
      row.appendChild(cel1);
      row.appendChild(cel2);
      row.appendChild(cel3);
      row.appendChild(cel4);
      row.appendChild(cel5);

      tableBody.appendChild(row);
    }
  } else {
    alert("NO HAY DATOS PARA MOSTRAR");
  }
}

// function eliminarAlumno(id) {
//   // Obtener los datos almacenados en localStorage
//   const alumnosData = localStorage.getItem("alumnos");

//   if (alumnosData) {
//     // Convertir los datos a un array
//     let alumnosArray = JSON.parse(alumnosData);

//     // Encontrar el índice del alumno en el array basado en su ID
//     const alumnoIndex = alumnosArray.findIndex((alumno) => alumno.id === id);

//     if (alumnoIndex !== -1) {
//       // Eliminar el alumno del array
//       alumnosArray.splice(alumnoIndex, 1);

//       // Actualizar los datos en localStorage
//       localStorage.setItem("alumnos", JSON.stringify(alumnosArray));

//       console.log("Alumno eliminado:", id);
//     }
//   }
// }

// ...

// Agregar evento de clic al botón de eliminar
boton.addEventListener("click", function() {
  const alumnoId = j.id;
  eliminarAlumno(alumnoId);
  // Eliminar el elemento de la tabla en el DOM
  const tableRow = boton.parentNode.parentNode;
  tableRow.remove();
});