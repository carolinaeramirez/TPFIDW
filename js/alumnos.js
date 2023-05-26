var storedData = localStorage.getItem("datos");
console.log(storedData);
console.log(JSON.parse(storedData));
var datos = JSON.parse(storedData);
var tablaHTML = "<table>";
tablaHTML +=
  "<tr><th>Nombre</th><th>Apellido</th><th>DNI</th><th>Fecha de nacimiento</th><th>Nacionalidad</th><th>Correo electronico</th><th>Celular</th></tr>";
for(var i = 0; i< datos.length; i++){
    console.log(datos.length)
    tablaHTML+= "<tr>";
    tablaHTML+= "<td>" +datos[i].nombre + "</td>";
    tablaHTML+= "<td>" +datos[i].apellido + "</td>";
    tablaHTML+= "<td>" +datos[i].dni + "</td>";
    tablaHTML+= "<td>" +datos[i].fechaNacimiento + "</td>";
    tablaHTML+= "<td>" +datos[i].nacionalidad + "</td>";
    tablaHTML+= "<td>" +datos[i].email + "</td>";
    tablaHTML+= "<td>" +datos[i].celular + "</td>"
    

}

tablaHTML+="<table>";
document.getElementById("tabla").innerHTML=tablaHTML;