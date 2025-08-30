// Utilidades
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Atualiza ano do rodapé
$("#year").textContent = new Date().getFullYear();

// Partículas decorativas (performáticas e simples)
function createParticles(count = 28) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    // posições e variações
    const x = Math.random() * 100;
    const dx = (Math.random() * 30 - 15) + 'px'; // leve drift
    const dur = (12 + Math.random() * 16).toFixed(2) + 's';
    const delay = (Math.random() * 8).toFixed(2) + 's';
    p.style.left = x + 'vw';
    p.style.setProperty('--x', x + 'vw');
    p.style.setProperty('--dx', dx);
    p.style.setProperty('--dur', dur);
    p.style.setProperty('--delay', delay);
    document.body.appendChild(p);
  }
}

// Tilt 3D nos cards de projeto
function enableTilt() {
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;
  if (isCoarse) return; // desabilita em telas touch

  const maxRotate = 10; // graus
  const cards = $$('.project-card');
  cards.forEach(card => {
    const glare = card.querySelector('.glare');

    function handleMove(e) {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const mx = (e.clientX - cx) / (rect.width / 2);
      const my = (e.clientY - cy) / (rect.height / 2);
      const rotY = Math.max(Math.min(maxRotate * mx, maxRotate), -maxRotate);
      const rotX = Math.max(Math.min(-maxRotate * my, maxRotate), -maxRotate);
      card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
      // brilho acompanha o mouse
      if (glare) {
        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;
        glare.style.setProperty('--mx', `${localX}px`);
        glare.style.setProperty('--my', `${localY}px`);
      }
    }

    function reset() {
      card.style.transform = '';
    }

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', reset);
    // acessibilidade: foco também dá leve destaque
    card.addEventListener('focus', () => (card.style.transform = 'translateY(-2px)'));
    card.addEventListener('blur', reset);

    // Clique no card abre URL (se existir)
    card.addEventListener('click', (ev) => {
      const url = card.dataset.url;
      const isBtn = ev.target.closest('a,button');
      if (!isBtn && url && url !== '#') window.open(url, '_blank', 'noopener');
    });

    card.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        const url = card.dataset.url;
        if (url && url !== '#') window.open(url, '_blank', 'noopener');
      }
    });
  });
}

// Revelar elementos ao entrar na viewport
function enableReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  $$('.project-card').forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
}

// Mini jogo de clique (exemplo simples)
function startGame() {
  const msg = $('#gameMessage');
  let clicks = 0;
  msg.textContent = 'Clique o botão o máximo que puder em 3 segundos!';
  const btn = document.querySelector('[data-action="start-game"]');

  function count() { clicks++; }
  btn.addEventListener('click', count);

  setTimeout(() => {
    btn.removeEventListener('click', count);
    msg.textContent = `Você conseguiu ${clicks} clique(s)!`;
  }, 3000);
}

// Seleciona todos os botões com data-action="start-game";
document.querySelectorAll('[data-action="start-game"]').forEach(btn => {
  btn.addEventListener('click', () => {
    // Redireciona para o painel de aviso
    window.location.href = 'aviso/aviso.html';
  });
});

// Função startGame (se você quiser expor alguma função JS para o HTML)
function startGame() {
  window.location.href = 'aviso/aviso.html';
}

// Expor para o HTML do botão do jogo
window.startGame = startGame;

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  createParticles(36);
  enableTilt();
  enableReveal();
});
