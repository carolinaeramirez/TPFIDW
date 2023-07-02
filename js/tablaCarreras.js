//agregar a la tabla
function addCarreraTabla() {
  const listadoCarreras = localStorage.getItem("carreras");
  console.log(listadoCarreras);
  if (listadoCarreras !== null) {
    const jsonData = JSON.parse(listadoCarreras);
    const tableBody = document.getElementById("bodyCarreras");
    for (let j of jsonData) {
      console.log("informacion del for", j);
      // Nodo tr
      let row = document.createElement("tr");
      // Nodos td
      let cel0 = document.createElement("td");
      let cel1 = document.createElement("td");
      let cel2 = document.createElement("td");
      let cel3 = document.createElement("td");

      // Nodos de texto
      let texto0 = document.createTextNode(j.nombre);
      let texto1 = document.createTextNode(j.duracion);
      let texto2 = document.createTextNode(j.tipo);
      let texto3 = document.createTextNode("Eliminar");
      let texto4 = document.createTextNode("Editar");

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
      eliminar.setAttribute("onclick", "eliminarCarrera(" + j.id + ")");

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
      cel3.appendChild(editar);
      cel3.appendChild(eliminar);
      eliminar.appendChild(texto3);
      editar.appendChild(texto4);
      row.appendChild(cel0);
      row.appendChild(cel1);
      row.appendChild(cel2);
      row.appendChild(cel3);

      tableBody.appendChild(row);
    }
  } else {
    alert("NO HAY DATOS PARA MOSTRAR");
  }
}
function traerDatos() {
  listadoCarreras = localStorage.getItem("carreras");
  if (listadoCarreras !== null) {
    carreras = JSON.parse(listadoCarreras);
    return carreras;
  }
}

function eliminarCarrera(id) {
  traerDatos();
  const nuevoListado = carreras.filter(function (item) {
    return item.id !== id;
  });
  localStorage.removeItem("carreras");
  const jsonNuevo = JSON.stringify(nuevoListado);
  localStorage.setItem("carreras", jsonNuevo);

  // Obtiene la referencia al elemento padre de la tabla
  const tablaCarreras = document.getElementById("bodyCarreras");

  // Elimina los nodos hijos de la tabla
  while (tablaCarreras.firstChild) {
    tablaCarreras.removeChild(tablaCarreras.firstChild);
  }

  // Vuelve a cargar la tabla con los nuevos datos
  this.addCarreraTabla();
}

// Mostrar las carreras en tarjetas
function editarCarrera(id){
  window.location.href= `carreras-editar.html?id=${id}`;
  // console.log("id pasado", id)

}