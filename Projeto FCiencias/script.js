// ===== Nav: sombra ao rolar + progresso =====
const nav = document.getElementById('nav');
const progress = document.getElementById('progress');

function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 20);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Menu mobile =====
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// ===== Reveal ao entrar na tela =====
const revealEls = document.querySelectorAll(
  '.section__lead, .stat, .video, .processo, .plastic-col, .card, .method__item, .tl, .refs li, .footer__grid > div'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ===== Contadores animados =====
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const dur = 1400;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * ease);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const countIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCount(e.target);
      countIO.unobserve(e.target);
    }
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach(el => countIO.observe(el));

// ===== QR code do endereço público =====
const qrImage = document.getElementById('siteQrCode');
const qrDownload = document.getElementById('siteQrDownload');
const qrMessage = document.getElementById('siteQrMessage');

if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
  const pageUrl = window.location.href;
  const qrUrl = new URL('https://api.qrserver.com/v1/create-qr-code/');
  qrUrl.search = new URLSearchParams({ size: '400x400', data: pageUrl }).toString();

  const downloadUrl = new URL(qrUrl);
  downloadUrl.searchParams.set('size', '1000x1000');
  downloadUrl.searchParams.set('download', '1');

  qrImage.src = qrUrl.toString();
  qrDownload.href = downloadUrl.toString();
  qrDownload.hidden = false;
  qrImage.hidden = false;
  qrMessage.textContent = 'Escaneie ou baixe o QR code para abrir esta página.';
  qrImage.addEventListener('error', () => {
    qrDownload.hidden = true;
    qrMessage.textContent = 'Não foi possível carregar o QR code. Tente novamente mais tarde.';
  }, { once: true });
}
