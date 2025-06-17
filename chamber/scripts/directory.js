async function fetchMembers() {
    try {
        const response = await fetch('./data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error fetching members data:", error);
    }
}

function displayMembers(members) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; 

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <div>
                <h4>${member.name}</h4>
                <p>${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>URL:</strong> <a href="${member.url}" target="_blank">${member.url}</a></p>
                <p>${member.level}</p>

            </div>
        `;
        gridContainer.appendChild(card);
    }); 
}


document.addEventListener('DOMContentLoaded', function () {
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    const container = document.querySelector('.grid-container');

    gridViewBtn.addEventListener('click', function () {
        container.classList.add('grid-view');
        container.classList.remove('list-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    });

    listViewBtn.addEventListener('click', function () {
        container.classList.add('list-view');
        container.classList.remove('grid-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    });
});



document.addEventListener('DOMContentLoaded', fetchMembers);



document.querySelector('nav').style.display = 'flex';


document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');
  
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        const isExpanded = navMenu.classList.contains('show');
        menuButton.setAttribute('aria-expanded', isExpanded);
    });
  });

  






