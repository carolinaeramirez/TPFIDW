var storedData = localStorage.getItem("carreras");
console.log(storedData);
if(storedData){
  console.log(JSON.parse(storedData));
  var datos = JSON.parse(storedData);
  var tablaHTML = "<table>";
  tablaHTML +=
    "<tr><th>Nombre</th><th>Codigo de carrera</th><th>Descripción</th><th>Duración (años)</th><th>Cantidad de materias</th><th>Acciones</th></tr>";
  for(var i = 0; i< datos.length; i++){
      console.log(datos.length)
      tablaHTML+= "<tr>";
      tablaHTML+= "<td>" +datos[i].carreraNombre + "</td>";
      tablaHTML+= "<td>" +datos[i].codigo + "</td>";
      tablaHTML+= "<td>" +datos[i].descripcion + "</td>";
      tablaHTML+= "<td>" +datos[i].duracion + "</td>";
      tablaHTML+= "<td>" +datos[i].materiasNro + "</td>";
      tablaHTML+="<td>";
      tablaHTML+="<button class='editar-button' onclick='editarCarrera(" + i + ")'>Editar</button>";
      tablaHTML += "<button class='eliminar-button' onclick='eliminarCarrera(" + i + ")'>Eliminar</button>";
      tablaHTML += "</td>";
      tablaHTML += "</tr>";
  
  }
  
  tablaHTML+="<table>";
  document.getElementById("tabla").innerHTML=tablaHTML;
}else {
  console.log("No hay datos almacenados en localStorage")
}
