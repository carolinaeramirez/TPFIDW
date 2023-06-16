let alumno = {};
let alumnos = [];
let alumnoIndex;

window.addEventListener("load", function () {
  traerIdAEditar();
});

const guardarEdicion = document.getElementById("guardarEdicion");
guardarEdicion.addEventListener("click", guardar);

function traerIdAEditar() {
  let params = new URLSearchParams(document.location.search);
  let tieneId = params.has("id"); //para saber si es edit
  let id = params.get("id");

  //si hay id, sino es agregar
  if (params.has("id")) {
    buscarAlumnoPorId(id);
    console.log(tieneId);
  } else {
    //crear
  }
}

function buscarAlumnoPorId(id) {
  let listadoAlumnos = localStorage.getItem("alumnos");
  if (listadoAlumnos !== null) {
    alumnos = JSON.parse(listadoAlumnos);
    alumnoIndex = alumnos.findIndex((item) => item.id == id);
    alumno = alumnos[alumnoIndex];
    precargarDatos();
  }
}

function precargarDatos() {
  document.getElementById("nombre").value = alumno.nombre;
  document.getElementById("apellido").value = alumno.apellido;
  document.getElementById("dni").value = alumno.dni;
  document.getElementById("fecha_nacimiento").value = alumno.fecha_nacimiento;
  document.getElementById("email").value = alumno.correo_electronico;
  document.getElementById("celular").value = alumno.celular;
  document.getElementById("nacionalidad").value = alumno.nacionalidad;
}

function guardar()  {
    window.location.href = "tablaAlumn.html";
  console.log("alumno a guardar", alumno);
  let alumnoModif =  alumno;
  alumnoModif.nombre = document.getElementById("nombre").value,
  alumnoModif.apellido = document.getElementById("apellido").value,
  alumnoModif.dni = document.getElementById("dni").value,
  alumnoModif.nacionalidad = document.getElementById("nacionalidad").value,
  alumnoModif.fecha_nacimiento =
      document.getElementById("fecha_nacimiento").value,
  alumnoModif.email = document.getElementById("email").value,
  alumnoModif.celular = document.getElementById("celular").value,
    console.log("alumno editado", alumnoModif);
  alumnos[alumnoIndex] = alumnoModif;
  console.log("lista a guardar", alumnos);
  localStorage.setItem("alumnos", JSON.stringify(alumnos));
  this.addAlumnoTabla();

}
 