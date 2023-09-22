// Función para obtener parámetros de la URL
const getUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        message: urlParams.get('message'),
        song: urlParams.get('song')
    };
}

const getSong = (song) => {
    const songs = {
        'song1': 'sherk.mp3'
    };
    return songs[song] || 'flores-amarillas.mp3';
};

// Función para personalizar el mensaje y el nombre
const personalizeMessage = () => {
    const { message, song } = getUrlParams();

    document.getElementById("message").textContent = message || "Por si no te dieron tus flores amarillas...";
    document.getElementById("song").textContent = getSong(song);
}

document.addEventListener("DOMContentLoaded", personalizeMessage);
