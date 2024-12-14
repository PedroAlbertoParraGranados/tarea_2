// Función que se ejecuta cuando se pasa el ratón sobre una imagen
function upDate(previewPic) {
  console.log("Evento onmouseover disparado");
  let div = document.getElementById("imagen");
  div.innerHTML = previewPic.alt;
  div.style.backgroundImage = `url('${previewPic.src}')`;
}

// Función que se ejecuta cuando se quita el ratón de una imagen
function deshacer() {
  console.log("Evento onmouseout disparado");
  let div = document.getElementById("imagen");
  div.innerHTML = "Pase el ratón o enfoque una imagen para mostrarla aquí";
  div.style.backgroundImage = "url('')";
}

// Función que se ejecuta cuando se enfoca una imagen
function onFocus(event) {
  console.log("Evento onfocus disparado");
  upDate(event.target);
}

// Función que se ejecuta cuando se desenfoca una imagen
function onBlur(event) {
  console.log("Evento onblur disparado");
  deshacer();
}

// Función que se ejecuta al cargar la página
function onLoad() {
  console.log("Página cargada correctamente");
  // Seleccionar todas las imágenes y agregar tabindex
  let imagenes = document.querySelectorAll(".miniatura");
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].setAttribute("tabindex", "0");
    // Agregar escuchadores para onfocus y onblur
    imagenes[i].addEventListener("focus", onFocus);
    imagenes[i].addEventListener("blur", onBlur);
    // Agregar escuchadores para onmouseover y onmouseout
    imagenes[i].addEventListener("mouseover", function () {
      upDate(imagenes[i]);
    });
    imagenes[i].addEventListener("mouseout", deshacer);
  }
}

// Ejecutar onLoad al cargar la página
window.addEventListener("load", onLoad);
