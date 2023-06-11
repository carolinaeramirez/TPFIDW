function traerDatos() {
    const carrerasGuardadas = localStorage.getItem("carreras");
    var datos = JSON.parse(carrerasGuardadas);
    console.log("datos parseados", datos);
  
    // Obtener el contenedor de las tarjetas
    var contenedorTarjetas = document.querySelector(".row");
  
    // Crear las tarjetas dinámicamente
    datos.forEach(function(tarjeta) {
      // Crear elementos HTML para la tarjeta
      var colDiv = document.createElement("div");
      colDiv.classList.add("col-12", "col-sm-6", "col-md-3", "mb-2");
  
      var cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      cardDiv.style.width = "auto";
  
      var img = document.createElement("img");
      img.src = tarjeta.imagen;
      img.classList.add("card-img-top");
      img.alt = "...";
  
      var cardBodyDiv = document.createElement("div");
      cardBodyDiv.classList.add("card-body");
  
      var h5 = document.createElement("h5");
      h5.classList.add("card-title");
      h5.textContent = tarjeta.titulo;
  
      var p = document.createElement("p");
      p.classList.add("card-text");
      p.textContent = tarjeta.contenido;
  
      var detalleDiv = document.createElement("div");
      detalleDiv.classList.add("detalle");
      detalleDiv.style.display = "none";
    
      var detalleP = document.createElement("p");
      detalleP.textContent = "+ info";
    
      detalleDiv.appendChild(detalleP);
      cardBodyDiv.appendChild(h5);
      cardBodyDiv.appendChild(p);
      cardBodyDiv.appendChild(detalleDiv);
      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBodyDiv);
      colDiv.appendChild(cardDiv);
      contenedorTarjetas.appendChild(colDiv);
  
      // Agregar el manejador de eventos para mostrar el detalle
      cardDiv.addEventListener("click", function() {
        detalleDiv.style.display = "block";
      });
    });
  
    return datos;
  }