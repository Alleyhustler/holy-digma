// Particle effect
const particleContainer = document.querySelector('.particle-container');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 3 + 2 + 's';
    particleContainer.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

setInterval(createParticle, 200);

// Cursor trail effect
document.addEventListener('mousemove', (e) => {
    const cursorTrail = document.createElement('div');
    cursorTrail.classList.add('particle');
    cursorTrail.style.width = '8px';
    cursorTrail.style.height = '8px';
    cursorTrail.style.left = e.pageX + 'px';
    cursorTrail.style.top = e.pageY + 'px';
    cursorTrail.style.animation = 'none';
    cursorTrail.style.opacity = 0.6;
    document.body.appendChild(cursorTrail);

    // Remove cursor trail
    setTimeout(() => {
        cursorTrail.remove();
    }, 500);
});

// Sound functionality
const blessingButton = document.getElementById('blessing-button');
const blessingSound = document.getElementById('blessing-sound');

blessingButton.addEventListener('click', () => {
    blessingSound.currentTime = 0; // Reset sound to start
    blessingSound.play();
});
