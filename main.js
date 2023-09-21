// Función para clonar y modificar la flor
function createAndPositionFlower() {
    // Clonar la flor original
    const originalFlower = document.querySelector(".sunflower");
    const newFlower = originalFlower.cloneNode(true);

    // Modificar el tamaño de la nueva flor
    const randomSize = Math.random() * 2; // Tamaños aleatorios de 0 a 2
    newFlower.style.transform = `scale(${randomSize})`;

    const xPosition = Math.random() * window.innerWidth;
    const yPosition = window.innerHeight - newFlower.clientHeight; // Asegurarse de que esté a ras de la parte inferior

    newFlower.style.left = `${xPosition}px`;
    newFlower.style.top = `${yPosition}px`;

    // Agregar la nueva flor al documento
    document.body.appendChild(newFlower);
}

// Generar flores cada cierto tiempo (por ejemplo, cada 5 segundos)
setInterval(createAndPositionFlower, 5000);
