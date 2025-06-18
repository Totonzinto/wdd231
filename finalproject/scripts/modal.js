export function setupModal() {
  const modal = document.getElementById('modal');
  const closeBtn = modal.querySelector('.close-btn');

  closeBtn.addEventListener('click', () => {
    modal.setAttribute('hidden', true);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.setAttribute('hidden', true);
    }
  });
}

export function showModal(item) {
  const modal = document.getElementById('modal');
  document.getElementById('modal-title').textContent = item.name;
  document.getElementById('modal-description').textContent = item.longDescription;
  document.getElementById('modal-image').src = item.image;
  document.getElementById('modal-image').alt = item.name;
  document.getElementById('modal-extra').textContent = `Category: ${item.category}`;

  modal.removeAttribute('hidden');
}
