// Configuración del carrusel
const config = {
    autoSlideInterval: 5000, // 5 segundos
    imageUrls: [
        "https://raw.githubusercontent.com/cae911tecnicos/infoCaptura911/main/imagenes/2a.jpg",
        "https://raw.githubusercontent.com/cae911tecnicos/infoCaptura911/main/imagenes/1a.jpg",
        /*"https://raw.githubusercontent.com/cae911tecnicos/infoCaptura911/main/imagenes/*.PNG"*/
    ]
};

// Variables globales
let currentIndex = 0;
let intervalId;

// Inicialización del carrusel
function initCarousel() {
    loadImages();
    setupEventListeners();
    startAutoSlide();
}

// Carga las imágenes en el DOM
function loadImages() {
    const carousel = document.getElementById('carousel');
    const indicators = document.getElementById('indicators');
    
    carousel.innerHTML = '';
    indicators.innerHTML = '';
    
    config.imageUrls.forEach((url, index) => {
        // Crear elementos de imagen
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Imagen ${index + 1}`;
        img.loading = "lazy"; // Carga diferida para mejor rendimiento
        carousel.appendChild(img);
        
        // Crear indicadores
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if(index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
    });
}

// Navegación del carrusel
function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % config.imageUrls.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + config.imageUrls.length) % config.imageUrls.length;
    updateCarousel();
}

// Actualiza la visualización del carrusel
function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const indicators = document.querySelectorAll('.indicator');
    
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Control del desplazamiento automático
function startAutoSlide() {
    stopAutoSlide();
    intervalId = setInterval(nextSlide, config.autoSlideInterval);
}

function stopAutoSlide() {
    if(intervalId) {
        clearInterval(intervalId);
    }
}

// Configura los event listeners
function setupEventListeners() {
    document.getElementById('nextBtn').addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
    });

    const container = document.getElementById('carousel-container');
    container.addEventListener('mouseenter', stopAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);
    
    // Para dispositivos táctiles
    container.addEventListener('touchstart', stopAutoSlide);
    container.addEventListener('touchend', startAutoSlide);
}

// Inicializa el carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initCarousel);
