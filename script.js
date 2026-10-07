const menuButton = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

function closeMenu() {
  mobileMenu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Buka menu navigasi');
}

menuButton.addEventListener('click', () => {
  mobileMenu.hidden = !mobileMenu.hidden;
  menuButton.setAttribute('aria-expanded', String(!mobileMenu.hidden));
  menuButton.setAttribute(
    'aria-label',
    mobileMenu.hidden ? 'Buka menu navigasi' : 'Tutup menu navigasi'
  );
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.querySelectorAll('[data-project-toggle]').forEach(button => {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    panel.hidden = !panel.hidden;
    button.setAttribute('aria-expanded', String(!panel.hidden));
  });
});
