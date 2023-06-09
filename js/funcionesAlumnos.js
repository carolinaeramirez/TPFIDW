let index;

function enviar() {
  obtenerId();
  const nombre = document.getElementById("nombre").value;
  if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
    alert("Por favor, ingrese su nombre.");
<<<<<<< HEAD
    return false; 
=======
    e.preventDefault()
    if (nombre.value.length <6){
      alert("Nombre muy corto")
    }
    return false; // Evitar el envío del formulario
>>>>>>> 1fed2c393f138d56b1d329655951c7f050e2a5f4
  }
  const apellido = document.getElementById("apellido").value;
  if (apellido  == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
    alert("Por favor, ingrese su apellido.");
    return false; 
  }
  const dni = document.getElementById("dni").value;
<<<<<<< HEAD
  if (dni === "") {
    alert("Por favor, ingrese su DNI.");
    return false; 
  }
  const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  if (fechaNacimiento === "") {
    alert("Por favor, ingrese su fecha de nacimiento.");
    return false; 
=======
  if( !(/^\d{8}$/.test(dni)) ) {
    alert("Por favor, ingrese su DNI sin puntos, en caso de ser de menos dígitos, coloque un 0 primero.");
  }
  return false;
}

  const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  var ano = document.getElementById("ano").value;
  var mes = document.getElementById("mes").value;
  var dia = document.getElementById("dia").value;
  fechaNacimiento = new Date(ano, mes, dia);    
  if( !isNaN(fechaNacimiento) ) {
    alert("Por favor ingrese su fecha de nacimiento con el siguiente formato: DD/MM/AAAA")
  return false;
>>>>>>> 1fed2c393f138d56b1d329655951c7f050e2a5f4
  }
  const nacionalidad = document.getElementById("nacionalidad").value;
  if (nacionalidad === "") {
    alert("Por favor, ingrese su nacionalidad.");
    return false; 
  }
  const email = document.getElementById("email").value;
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return false; 
  }
  const celular = document.getElementById("celular").value;
<<<<<<< HEAD
=======
  if( !(/^\d{10}$/.test(celular)) ) {
    alert("Por favor, ingrese un teléfono válido.");
    return false;
} 
  // una vez capturados los inputs guardamos la info en un objeto------
>>>>>>> 1fed2c393f138d56b1d329655951c7f050e2a5f4

  // Una vez capturados los inputs, guardamos la información en un objeto
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

  // Antes de guardar en localStorage, consultamos si hay datos anteriores
  var datosAnteriores = localStorage.getItem("alumnos");

  // Si hay datos, los parseamos; si no, creamos un array donde guardarlos
  var listAntArray = datosAnteriores ? JSON.parse(datosAnteriores) : [];

  listAntArray.push(dataForm); // Agregamos los nuevos datos con un push al array
  localStorage.setItem("alumnos", JSON.stringify(listAntArray));
  console.log(listAntArray); // Metemos los datos en localStorage

  // Llamamos a la función clear para limpiar los campos del formulario después de enviarlos
  if (confirm("¿Seguro que desea guardar los datos?")) {
    clear();
  } else {
    console.log("Prueba 3");
  }
<<<<<<< HEAD
}

// Para limpiar el formulario después de enviar la información
=======

// para limpiar el formulario despues de enviar la informacion.
>>>>>>> 1fed2c393f138d56b1d329655951c7f050e2a5f4
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

// Obtener ID siguiente
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
