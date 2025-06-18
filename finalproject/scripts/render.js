export async function renderWishlist() {
  const container = document.getElementById('wishlist-container');

  try {
    const response = await fetch('./data/wishlist.json');
    if (!response.ok) throw new Error('Failed to load wishlist data');

    const items = await response.json();
    container.innerHTML = ''; 

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'wishlist-card';

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <h3>${item.name}</h3>
        <p>${item.shortDescription}</p>
        <p><strong>${item.price}</strong></p>
        <button class="fav-btn" data-name="${item.name}">Add to Favorites</button>
      `;

      container.appendChild(card);
    });


    document.querySelectorAll('.view-btn').forEach(btn =>
      btn.addEventListener('click', e => {
        const selected = items.find(i => i.name === e.target.dataset.name);
        showModal(selected);
      })
    );

    document.querySelectorAll('.fav-btn').forEach(btn =>
      btn.addEventListener('click', e => {
        const name = e.target.dataset.name;
        addToFavorites(name);
      })
    );

  } catch (error) {
    container.innerHTML = `<p>Error loading wishlist: ${error.message}</p>`;
  }
}

function addToFavorites(name) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(name)) {
    favorites.push(name);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`${name} added to favorites!`);
  } else {
    alert(`${name} is already in your favorites.`);
  }
}
