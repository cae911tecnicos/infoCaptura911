const imagenes = [
  "https://github.com/cae911tecnicos/infoCaptura911/blob/685049537421916fc77f3a6ba114ac3c36207fc1/imagenes/florespi6-5-25.PNG",
];

function loadCarousel() {
  const carousel = document.getElementById('carousel');
  carousel.innerHTML = '';
  imagenes.forEach((url, index) => {
    const img = document.createElement('img');
    img.src = url;
    if (index === 0) img.classList.add('active');
    carousel.appendChild(img);
  });
}
