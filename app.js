const imagenes = [
  "https://github.com/cae911tecnicos/infoCaptura911/blob/main/imagenes/3641545%20Captura%20DB%20-%20SaeCad.PNG",
  "https://github.com/cae911tecnicos/infoCaptura911/blob/main/imagenes/3641545%20ReprodHisto%201ra%20asig.PNG",
  "https://github.com/cae911tecnicos/infoCaptura911/blob/main/imagenes/3641545%20ReprodHisto%20ultima%20asig.PNG"
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
