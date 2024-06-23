document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    const faces = document.querySelectorAll('.face');

    function updateColors() {
        faces.forEach(face => {
            const rect = face.getBoundingClientRect();
            const faceCenter = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };

            const screenCenter = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            };

            const dx = screenCenter.x - faceCenter.x;
            const dy = screenCenter.y - faceCenter.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            const maxDistance = Math.sqrt(screenCenter.x * screenCenter.x + screenCenter.y * screenCenter.y);
            const colorIntensity = 1 - (distance / maxDistance);
            const colorValue = Math.floor(colorIntensity * 255);

            face.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
        });
    }

    gsap.to(box, {
        rotationY: 360,
        duration: 5,
        repeat: -1,
        ease: "none",
        onUpdate: updateColors
    });

    updateColors();
});