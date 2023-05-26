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
    const email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false; // Evitar el envío del formulario
    }
    const consulta = document.getElementById("consulta").value;
    // una vez capturados los inputs guardamos la info en un objeto------
    var dataForm = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      consulta: consulta,
    };
  
    ////----- antes de guardar en localStorage consultamos si hay datos anteriores-------
    var storedData = localStorage.getItem("datos");
    ///// si hay datos los parseamos y sino creamos un array donde guardarlos.
    if (storedData) {
      dataArray = JSON.parse(storedData);
    } else {
      var dataArray = [];
    }
  console.log(dataForm)
    dataArray.push(dataForm); //agregamos los nuevos datos con un push al array
    localStorage.setItem("datos", JSON.stringify(dataArray)); // metemos los datos a localStorage.
    //llamamos a la funcion clear para que limpie los campos del formulario despues de enviarlos.
    clear();
  }
  
  function clear() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("consulta").value = "";
  }
  