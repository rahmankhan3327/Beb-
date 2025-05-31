
function nextPage(id) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.getElementById(id).style.display = 'flex';
}

function createEmojiFall(emoji, speed = 2) {
  let e = document.createElement('div');
  e.className = 'emoji';
  e.innerText = emoji;
  e.style.left = Math.random() * 100 + 'vw';
  e.style.top = '-2rem';
  document.body.appendChild(e);

  let pos = 0;
  const fall = setInterval(() => {
    pos += speed;
    e.style.top = pos + 'px';
    if (pos > window.innerHeight) {
      clearInterval(fall);
      e.remove();
    }
  }, 20);
}

function startHeartRain() {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const emojis = ['❤️', '💖', '💝', '💗', '💓', '💞'];
      createEmojiFall(emojis[Math.floor(Math.random() * emojis.length)]);
    }, i * 100);
  }
  setTimeout(() => nextPage('page3'), 5000);
}

function startKissFlood() {
  let height = window.innerHeight;
  for (let i = 0; i < 100; i++) {
    setTimeout(() => createEmojiFall('😘', 5), i * 50);
  }
}
