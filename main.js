// Función para clonar y modificar la flor
function createAndPositionFlower() {
    // Clonar la flor original
    const originalFlower = document.querySelector(".sunflower");
    const newFlower = originalFlower.cloneNode(true);

    // Modificar el tamaño de la nueva flor
    const randomSize = Math.random() * 1.15 + 0.5;
    newFlower.style.transform = `scale(${randomSize})`;

    // Agregar la nueva flor al elemento .landscape
    const landscape = document.querySelector(".landscape");
    landscape.appendChild(newFlower);

    const xPosition = Math.random() * landscape.clientWidth;
    const yPosition = landscape.clientHeight - newFlower.clientHeight;

    newFlower.style.left = `${xPosition}px`;
    newFlower.style.top = `${yPosition}px`;
}

// Generar flores cada cierto tiempo (por ejemplo, cada 5 segundos)
const intervalId = setInterval(createAndPositionFlower, 5000);

// Detener la generación de flores después de 4 minutos
setTimeout(() => {
    clearInterval(intervalId);
}, 4 * 60 * 1000); // 4 minutos en milisegundos
