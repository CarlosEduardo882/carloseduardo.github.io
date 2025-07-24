particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 45,
      "density": { "enable": true, "value_area": 900 }
    },
    "color": { "value": "#ff2d95" },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#000000" }
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "out_mode": "bounce"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": false }
    },
    "modes": {
      "repulse": { "distance": 100 }
    }
  },
  "retina_detect": true
});
document.addEventListener('DOMContentLoaded', function () {
  const projetos = document.querySelectorAll('.projeto-item');
  const btnEsquerda = document.querySelector('.seta.esquerda');
  const btnDireita = document.querySelector('.seta.direita');
  let atual = 0;
  let intervalo;

  function mostrarProjeto(index) {
    projetos.forEach((item, i) => {
      item.classList.remove('ativo');
      item.style.zIndex = 0;
      if (i === index) {
        item.classList.add('ativo');
        item.style.zIndex = 1;
      }
    });
  }

  function proximoProjeto() {
    atual = (atual + 1) % projetos.length;
    mostrarProjeto(atual);
  }

  function iniciarAutoplay() {
    intervalo = setInterval(proximoProjeto, 5000);
  }

  function reiniciarAutoplay() {
    clearInterval(intervalo);
    iniciarAutoplay();
  }

  btnEsquerda.addEventListener('click', () => {
    atual = (atual - 1 + projetos.length) % projetos.length;
    mostrarProjeto(atual);
    reiniciarAutoplay();
  });

  btnDireita.addEventListener('click', () => {
    proximoProjeto();
    reiniciarAutoplay();
  });

  mostrarProjeto(atual);
  iniciarAutoplay();
});
