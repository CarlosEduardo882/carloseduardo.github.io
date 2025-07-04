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
document.addEventListener('DOMContentLoaded', () => {
  new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['inicio', 'sobre', 'formacoes'],
    navigationTooltips: ['Início', 'Sobre Mim', 'Formações'],
    showActiveTooltip: true,
    scrollOverflow: true
  });
});
