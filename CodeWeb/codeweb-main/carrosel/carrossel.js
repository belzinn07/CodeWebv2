let slideIndex = 0;

function mostrarSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

function mudarSlide(n) {
    mostrarSlides(slideIndex += n);
}

// Inicializa o carrossel
mostrarSlides(slideIndex);
