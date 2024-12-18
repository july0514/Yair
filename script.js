// script.gts

// Manejar el envío del formulario de comentarios
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("comentarios-form");
    const listaComentarios = document.getElementById("lista-comentarios");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const comentario = document.getElementById("comentario").value;

        // Crear un nuevo elemento de comentario
        const comentarioElemento = document.createElement("div");
        comentarioElemento.classList.add("comentario");
        comentarioElemento.innerHTML = `
            <strong>${nombre}:</strong>
            <p>${comentario}</p>
        `;

        // Agregar el comentario a la lista
        listaComentarios.appendChild(comentarioElemento);

        // Limpiar el formulario
        form.reset();
    });
});
