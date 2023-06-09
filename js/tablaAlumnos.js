//agregar a la tabla
function addAlumnoTabla() {
  const listadoAlumnos = localStorage.getItem("alumnos");
  // console.log(listadoAlumnos);
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
      let eliminar = document.createElement("btn-delete");
      eliminar.style.backgroundColor = "red";
      eliminar.style.color = "white";
      eliminar.style.border = "none";
      eliminar.style.padding = "2px 6px";
      eliminar.style.cursor = "pointer";
      eliminar.style.borderRadius = "4px";

      let algo = "eliminar" + j.id;
      eliminar.setAttribute("id", algo);
      eliminar.setAttribute("onclick", "eliminarAlumno(" + j.id + ")");

      // Nodo para el eliminar editar
      let editar = document.createElement("btn-edit");
      editar.style.backgroundColor = "blue";
      editar.style.color = "white";
      editar.style.border = "none";
      editar.style.padding = "2px 6px";
      editar.style.cursor = "pointer";
      editar.style.borderRadius = "4px";
      editar.style.margin = "10px";

      let edt = "editar" + j.id;
      editar.setAttribute("id", edt);

      // Árbol de nodos DOM
      cel0.appendChild(texto0);
      cel1.appendChild(texto1);
      cel2.appendChild(texto2);
      cel3.appendChild(texto3);
      cel4.appendChild(texto4);
      cel5.appendChild(editar);
      cel5.appendChild(eliminar);

      eliminar.appendChild(texto5);
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
function traerDatos() {
  listadoAlumnos = localStorage.getItem("alumnos");
  if (listadoAlumnos !== null) {
    alumnos = JSON.parse(listadoAlumnos);
    return alumnos;
  }
}
// function eliminarAlumno(id) {
//   traerDatos();
//   const nuevoListado = alumnos.filter(function (item) {
//     return item.id !== id;
//   });
//   // console.log(id, item.id);
//   console.log("nuevo ", nuevoListado);
//   localStorage.removeItem('alumnos');
//   const jsonNuevo = JSON.stringify(nuevoListado);
//   localStorage.setItem("alumnos", jsonNuevo);
//   traerDatos()
//   this.addAlumnoTabla();
  
// }
function eliminarAlumno(id) {
  traerDatos();
  const nuevoListado = alumnos.filter(function (item) {
    return item.id !== id;
  });
  localStorage.removeItem('alumnos');
  const jsonNuevo = JSON.stringify(nuevoListado);
  localStorage.setItem("alumnos", jsonNuevo);

  // Obtiene la referencia al elemento padre de la tabla
  const tablaAlumnos = document.getElementById("bodyAlumnos");

  // Elimina los nodos hijos de la tabla
  while (tablaAlumnos.firstChild) {
    tablaAlumnos.removeChild(tablaAlumnos.firstChild);
  }

  // Vuelve a cargar la tabla con los nuevos datos
  this.addAlumnoTabla();
}

// function removeLocalStorage() {
//   localStorage.removeItem("alumnos");
// }
