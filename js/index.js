window.addEventListener('scroll', () => {
    const element = document.querySelector('.text');
    if (isInViewport(element)) {
        element.classList.add('visible');
    }
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const meuVideo = document.getElementById("video");

meuVideo.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // impede o menu de contexto aparecer
  });
  
  meuVideo.addEventListener("mousedown", (event) => {
    if (event.button === 2) { // botão direito do mouse
      event.preventDefault();
    }
  });
  
  meuVideo.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) { // tecla Escape
      botaoDownload.style.display = "none";
    }
  });