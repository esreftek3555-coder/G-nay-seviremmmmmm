// Floating hearts
const heartsContainer = document.getElementById('hearts-container');
const heartSymbols = ['🤍', '💗', '💖', '💕', '❤️', '🌸'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  
  // Random position and size
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (14 + Math.random() * 22) + 'px';
  heart.style.animationDuration = (6 + Math.random() * 8) + 's';
  heart.style.opacity = 0.4 + Math.random() * 0.5;
  
  // Slight horizontal drift
  const drift = (Math.random() - 0.5) * 80;
  heart.style.setProperty('--drift', drift + 'px');
  
  heartsContainer.appendChild(heart);
  
  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 15000);
}

// Create hearts periodically
setInterval(createHeart, 700);

// Initial burst of hearts
for (let i = 0; i < 8; i++) {
  setTimeout(createHeart, i * 200);
}

// Soft twinkling particles
const particlesContainer = document.getElementById('particles');

function createParticles() {
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = Math.random() * 100 + 'vh';
    p.style.animationDuration = (2 + Math.random() * 4) + 's';
    p.style.animationDelay = Math.random() * 3 + 's';
    particlesContainer.appendChild(p);
  }
}

createParticles();

// Music control
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.classList.remove('playing');
    musicBtn.querySelector('.music-text').textContent = 'Musiqi';
  } else {
    bgMusic.play().then(() => {
      musicBtn.classList.add('playing');
      musicBtn.querySelector('.music-text').textContent = 'Dayandır';
    }).catch(() => {
      // Autoplay blocked or no file – still show feedback
      alert('Musiqi faylı tapılmadı.\n\nmusic.mp3 adlı mahnını eyni qovluğa qoyun və yenidən yükləyin.');
    });
  }
  isPlaying = !isPlaying;
});

// Optional: try to start music on first interaction (browsers block autoplay)
document.body.addEventListener('click', function startOnce() {
  // Only attempt if user hasn't toggled yet
}, { once: true });
