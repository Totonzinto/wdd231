import { places } from "../data/places.mjs";
console.log(places);

const showHere = document.querySelector("#allplaces")


async function  displayPlaces(places) {
  places.forEach(element => {
const thecard = document.createElement('div')
thecard.id = element.more

const photo = document.createElement('img')
photo.src = `images/${element.image}`
photo.alt = element.name 
photo.loading = "lazy"; 
thecard.appendChild(photo)

const title = document.createElement('h2')
title.innerText = element.name
thecard.appendChild(title)

const address = document.createElement('address')
address.innerText = element.address
thecard.appendChild(address)

const desc = document.createElement('p')
desc.innerText = element.description
thecard.appendChild(desc)

const more = document.createElement('button')
more.textContent = "Learn More"
more.id = "more"
thecard.appendChild(more)

showHere.appendChild(thecard)
  });
}

displayPlaces(places)

const myclose = document.querySelector(".modal-header button");
const mydialog = document.querySelector("#more-modal");
const buttons = document.querySelectorAll("#allplaces button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const level = button.parentElement.id;
      showMore(level);
    });
  });


myclose.addEventListener("click", () => {
  mydialog.close();
  });

function showMore(level) {
  const title = document.getElementById("modal-title");
  const list = document.getElementById("modal-more");
    title.textContent = level;
    list.innerHTML = ""; 
    mydialog.showModal();
       
  };


const messageBox = document.getElementById('visitMessage');
    const messageText = document.getElementById('visitText');
    const lastVisit = localStorage.getItem('lastVisit');
    const closeBtn = document.getElementById('closeBtn');
    const now = Date.now();

    closeBtn.addEventListener("click", () => {
    messageBox.style.display = 'none';
  });

    function showMessage(text) {
      messageText.textContent = text;
      messageBox.style.display = 'block';
    }

  if (!lastVisit) {
      showMessage("Welcome! Let us know if you have any questions.");
    } else {
      const msInDay = 1000 * 60 * 60 * 24;
      const daysPassed = Math.floor((now - Number(lastVisit)) / msInDay);

      if (daysPassed < 1) {
        showMessage("Back so soon! Awesome!");
      } else if (daysPassed === 1) {
        showMessage("You last visited 1 day ago.");
      } else {
        showMessage(`You last visited ${daysPassed} days ago.`);
      }
    }

    localStorage.setItem('lastVisit', now.toString());

    document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#nav-menu a");
  const currentPage = location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active");
    }
  });
});