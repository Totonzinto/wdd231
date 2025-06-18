// ==== 1. Current Year ====
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("currentyear").textContent = new Date().getFullYear();

// ==== 2. Last Modified ====
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// ==== 3. Welcome Message ====
const welcomeKey = "wishlistVisit";
const visitMessage = document.createElement("p");
visitMessage.style.textAlign = "center";
visitMessage.style.fontWeight = "bold";
visitMessage.style.margin = "1rem";
visitMessage.style.fontFamily = "'Open Sans', sans-serif";

const storedVisit = localStorage.getItem(welcomeKey);
if (!storedVisit) {
    visitMessage.textContent = "🎉 Welcome to Wishlist! This is your first visit.";
    localStorage.setItem(welcomeKey, new Date().toISOString());
} else {
    const lastVisitDate = new Date(storedVisit);
    visitMessage.textContent = `👋 Welcome back! Your last visit was on ${lastVisitDate.toDateString()}.`;
    localStorage.setItem(welcomeKey, new Date().toISOString());
}

// Add message to top of main
document.querySelector("main").insertAdjacentElement("afterbegin", visitMessage);

// ==== 4. Lazy Loading Confirmation ====
document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.addEventListener('load', () => {
        console.log(`Lazy-loaded image: ${img.src}`);
    });
});

// ==== 5. Mobile Nav Toggle ====
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        const expanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", !expanded);
        navMenu.classList.toggle("open");
    });
}
