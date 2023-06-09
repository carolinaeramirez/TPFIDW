fetch("./datos/alumnos.json")
  .then((response) => response.json())
  .then((data) => {
    // Aquí puedes trabajar con los datos del archivo JSON
    const alumnos = JSON.stringify(data);
    localStorage.setItem("alumnos", alumnos);
    console.log("datos",alumnos);
  })
  .catch((error) => {
    alert(error)
    console.error("Error al leer el archivo JSON:", error);
  });

