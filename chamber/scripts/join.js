document.addEventListener("DOMContentLoaded", () => {
  // Handle modal functionality
  const learnMoreButtons = document.querySelectorAll(".learn-more");
  const closeButtons = document.querySelectorAll(".close");

  learnMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal-id");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
      } else {
        console.error(`Modal with ID '${modalId}' not found.`);
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal-id");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "none";
      } else {
        console.error(`Modal with ID '${modalId}' not found.`);
      }
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });

  window.openModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal?.(); // Optional chaining for browsers that support <dialog>
      modal.classList.add("open");
    } else {
      console.error(`Modal with ID '${modalId}' not found.`);
    }
  };

  window.closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.close?.();
      modal.classList.remove("open");
    } else {
      console.error(`Modal with ID '${modalId}' not found.`);
    }
  };

  // Handle hamburger menu
  const menuButton = document.getElementById('menu-button');
  const navMenu = document.getElementById('nav-menu');

  menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    const isExpanded = navMenu.classList.contains('show');
    menuButton.setAttribute('aria-expanded', isExpanded);
  });

  // Show navigation bar (ensure it's visible when JS loads)
  document.querySelector('nav').style.display = 'flex';

  // ✅ Set timestamp hidden field when page loads
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }
});
