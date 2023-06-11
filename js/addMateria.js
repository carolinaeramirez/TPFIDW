let index;
function obtenerId() {
  const listadoMaterias = localStorage.getItem("materias");
  if (listadoMaterias) {
    const listadoArray = JSON.parse(listadoMaterias);
    if (listadoArray.length > 0) {
      index = listadoArray[listadoArray.length - 1].id + 1;
    } else {
      index = 1;
    }
  } else {
    index = 1;
  }
}

function addMateria() {
  console.log("funciona el bton");
  obtenerId();
  let nombre = document.getElementById("nombre").value;
  let carrera = document.getElementById("carrera").value;
  let horas = document.getElementById("horas").value;

  var newMateria = {
    id:index,
    nombre: nombre,
    carrera: carrera,
    horas_semanales: horas,
  };
  console.log("agrego datos", nombre, carrera, horas, newMateria);

  var datosMaterias = localStorage.getItem("materias");
  var listArray = datosMaterias ? JSON.parse(datosMaterias) : [];
  listArray.push(newMateria);
  localStorage.setItem("materias", JSON.stringify(listArray));
  console.log(listArray);
  clear();
}

function clear() {
  document.getElementById("nombre").value = "";
  document.getElementById("carrera").value = "";
  document.getElementById("horas").value = "";
}


