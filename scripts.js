const carrusel = document.querySelector('.carruseles');

carrusel.addEventListener('mouseover', () => {
    carrusel.style.animationPlayState = 'paused';
});

carrusel.addEventListener('mouseout', () => {
    carrusel.style.animationPlayState = 'running';
});
