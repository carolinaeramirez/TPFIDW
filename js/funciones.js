// ------------validacion de formulario ------------
//validacion de los datos
// function validar(){
//   console.log("datos correctos");
// }

//---------------Usamos una funcion para capturar los inputs -----------------
function enviar() {
  const nombre = document.getElementById("nombre").value;
  if (nombre === "") {
    alert("Por favor, ingrese su nombre.");
    return false; // Evitar el envío del formulario
  }
  const apellido = document.getElementById("apellido").value;
  if (apellido === "") {
    alert("Por favor, ingrese su apellido.");
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
    nombre: nombre,
    apellido: apellido,
    fechaNacimiento: fechaNacimiento,
    nacionalidad: nacionalidad,
    email: email,
    celular: celular,
  };

  ////----- antes de guardar en localStorage consultamos si hay datos anteriores-------
  var storedData = localStorage.getItem("datos");
  ///// si hay datos los parseamos y sino creamos un array donde guardarlos.
  if (storedData) {
    dataArray = JSON.parse(storedData);
  } else {
    var dataArray = [];
  }

  dataArray.push(dataForm); //agregamos los nuevos datos con un push al array
  localStorage.setItem("datos", JSON.stringify(dataArray));
  console.log(dataArray); // metemos los datos a localStorage.
  //llamamos a la funcion clear para que limpie los campos del formulario despues de enviarlos.
  clear();
}

function clear() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("fecha-nacimiento").value = "";
  document.getElementById("nacionalidad").value = "";
  document.getElementById("email").value = "";
  document.getElementById("celular").value = "";
}


