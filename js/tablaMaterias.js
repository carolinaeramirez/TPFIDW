function addMaterias() {
    
  const listadoMaterias = localStorage.getItem("materias");
  console.log("MATERIAS", listadoMaterias)
  if (listadoMaterias !== null) {
    const jsonData = JSON.parse(listadoMaterias);
    console.log ("MATERIAS", jsonData)
    const tableBody = document.getElementById("bodyMaterias");
    for (let j of jsonData) {
      let row = document.createElement("tr");

      let cel0 = document.createElement("td");
      let cel1 = document.createElement("td");
      let cel2 = document.createElement("td");
      let cel3 = document.createElement("td");
      let cel4 = document.createElement("td");
    

      let text0 = document.createTextNode(j.id);
      let text1 = document.createTextNode(j.nombre);
      let text2 = document.createTextNode(j.carrera);
      let text3 = document.createTextNode(j.horas_semanales);
      let text4 = document.createTextNode("Eliminar");
      let text5 = document.createTextNode("Editar");

      let eliminarM = document.createElement("btn-delete");
      eliminarM.style.backgroundColor = "red";
      eliminarM.style.color = "white";
      eliminarM.style.border = "none";
      eliminarM.style.padding = "2px 6px";
      eliminarM.style.cursor = "pointer";
      eliminarM.style.borderRadius = "4px";

      let materiaEliminar = "eliminar" + j.id;
      eliminarM.setAttribute("id", materiaEliminar);
      eliminarM.setAttribute("onclick", "eliminarMateria(" + j.id + ")");

      let editarM = document.createElement("btn-edit");
      editarM.style.backgroundColor = "blue";
      editarM.style.color = "white";
      editarM.style.border = "none";
      editarM.style.padding = "2px 6px";
      editarM.style.cursor = "pointer";
      editarM.style.borderRadius = "4px";
      editarM.style.margin = "10px";

      let edt = "editar" + j.id;
      editarM.setAttribute("id", edt);

      cel0.appendChild(text0);
      cel1.appendChild(text1);
      cel2.appendChild(text2);
      cel3.appendChild(text3);
      
      cel4.appendChild(editarM);
      cel4.appendChild(eliminarM);
      eliminarM.appendChild(text4);
      editarM.appendChild(text5);

      row.appendChild(cel0);
      row.appendChild(cel1);
      row.appendChild(cel2);
      row.appendChild(cel3);
      row.appendChild(cel4);
  

      tableBody.appendChild(row);
    }
  } else {
    alert("NO HAY DATOS CARGADOS");
  }
}
