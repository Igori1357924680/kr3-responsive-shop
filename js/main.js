const modal = document.getElementById('orderModal');
const openModalBtn = document.getElementById('openModal');

if (modal && openModalBtn) {
  openModalBtn.addEventListener('click', () => modal.showModal());
}

const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('to-top--visible', window.scrollY > 300);
  });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}