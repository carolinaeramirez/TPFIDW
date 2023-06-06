var storedData = localStorage.getItem("alumnos");
console.log(storedData);
// console.log(JSON.parse(storedData));
var datos = JSON.parse(storedData);
if (datos !== null) {
  console.log("DATOS PARSEADOS", datos);
  const bodyAlumnos = document.getElementById("bodyAlumnos");
  let indice = 0;
  for (let j of datos) {
    console.log("datos del for", j);
    let row = document.createElement("tr");
    let cel0 = document.createElement("td");
    let cel1 = document.createElement("td");
    let cel2 = document.createElement("td");
    let cel3 = document.createElement("td");
    let cel4 = document.createElement("td");

    let texto0 = document.createTextNode(indice);
    let texto1 = document.createTextNode(j.dni);
    let texto2 = document.createTextNode(j.apellido);
    let texto3 = document.createTextNode(j.nombre);
    let texto4 = document.createTextNode("Eliminar");
    let boton = document.createElement("button");
    let algo = "eliminar" + indice;

    boton.setAttribute("id", algo);

    cel0.appendChild(texto0);
    cel1.appendChild(texto1);
    cel2.appendChild(texto2);
    cel3.appendChild(texto3);
   
    boton.appendChild(texto4);
    cel4.appendChild(boton);

    row.appendChild(cel0);
    row.appendChild(cel1);
    row.appendChild(cel2);
    row.appendChild(cel3);
    row.appendChild(cel4);
    bodyAlumnos.appendChild(row);

    indice++;
  }
} else {
  alert("no hay datos guardados");
}
