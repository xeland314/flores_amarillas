// Función para obtener parámetros de la URL
function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    return { message };
}

// Función para personalizar el mensaje y el nombre
function personalizeMessage() {
    const { message } = getUrlParams();
    const messageElement = document.getElementById("message");

    if (message) {
        messageElement.textContent = message;
    } else {
        messageElement.textContent = "Por si no te dieron tus flores amarillas..."
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Llamar a la función para personalizar el mensaje y el nombre
    personalizeMessage();
});
