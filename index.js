document.addEventListener('DOMContentLoaded', function () {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  createHearts();
  createFloatingElements();
  setupWheel();
});

function toggleMusic() {
  const music = document.getElementById('birthdayMusic');
  const musicIcon = document.getElementById('musicIcon');

  if (music.paused) {
    music.play();
    musicIcon.textContent = '🔊';
  } else {
    music.pause();
    musicIcon.textContent = '🔇';
  }
}

let currentMessage = 1;
const totalMessages = 6;

function changeMessage() {
  document.getElementById(`message${currentMessage}`).style.display = 'none';
  currentMessage = currentMessage < totalMessages ? currentMessage + 1 : 1;
  document.getElementById(`message${currentMessage}`).style.display = 'block';
  createHeartBurst();
}

function createHearts() {
  const heartsContainer = document.querySelector('.hearts');

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.animationDuration = 2 + Math.random() * 3 + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heartsContainer.appendChild(heart);
  }
}

function createHeartBurst() {
  const cardBack = document.querySelector('.card-back');

  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.position = 'absolute';
    heart.style.left = '50%';
    heart.style.top = '70%';
    heart.style.fontSize = (20 + Math.random() * 20) + 'px';
    heart.style.animationDuration = 1 + Math.random() * 2 + 's';
    cardBack.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}

function createFloatingElements() {
  const container = document.querySelector('.floating-elements');

  for (let i = 0; i < 5; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('floating-balloon');
    balloon.innerHTML = ['🎈', '🎉', '🎊', '🎁', '🎀'][Math.floor(Math.random() * 5)];
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.fontSize = (30 + Math.random() * 30) + 'px';
    balloon.style.animationDuration = 10 + Math.random() * 20 + 's';
    balloon.style.animationDelay = Math.random() * 15 + 's';
    container.appendChild(balloon);
  }

  for (let i = 0; i < 20; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('floating-confetti');
    confetti.innerHTML = ['✨', '🌟', '💫', '🎆', '🎇'][Math.floor(Math.random() * 5)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.fontSize = (15 + Math.random() * 15) + 'px';
    confetti.style.animationDuration = 5 + Math.random() * 10 + 's';
    confetti.style.animationDelay = Math.random() * 10 + 's';
    container.appendChild(confetti);
  }
}

function shootStar() {
  const container = document.getElementById('stars-container');
  const star = document.createElement('div');
  star.classList.add('star');
  star.innerHTML = '⭐';
  const startY = 30 + Math.random() * 90;
  star.style.top = startY + 'px';
  star.style.left = '-50px';
  const size = 20 + Math.random() * 30;
  star.style.fontSize = size + 'px';
  const duration = 2 + Math.random() * 2;
  star.style.animationDuration = duration + 's';
  container.appendChild(star);
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}

let wheelSpinning = false;
let currentRotation = 0;

function setupWheel() {
  const wheel = document.getElementById('wheel');
  const items = wheel.querySelectorAll('.wheel-item');
  items.forEach((item, index) => {
    item.style.transform = `rotate(${index * 60}deg) skewY(-30deg)`;
  });
}

function spinWheel() {
  if (wheelSpinning) return;
  wheelSpinning = true;
  const wheel = document.getElementById('wheel');
  const segmentAngle = 60;
  const extraRotation = Math.floor(Math.random() * 6) * segmentAngle;
  const fullRotations = 5;
  const totalRotation = currentRotation + (fullRotations * 360) + extraRotation;
  currentRotation = totalRotation % 360;
  wheel.style.transform = `rotate(${-totalRotation}deg)`;
  setTimeout(() => {
    wheelSpinning = false;
    const winningSegment = Math.floor((currentRotation + segmentAngle / 2) / segmentAngle) % 6;
    const segments = ['Joy', 'Love', 'Success', 'Health', 'Adventure', 'Laughter'];
    setTimeout(() => {
      alert(`Your birthday fortune: ${segments[winningSegment]}!`);
    }, 500);
  }, 4000);
}