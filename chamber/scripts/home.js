async function loadWeather() {
    const apiKey = "bc18c86a112e3ba8409b0518c4556be4";
    const lat = 6.52;
    const lon = 3.38;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    try {
        const response = await fetch(url);

        if (response.ok) {
            const weatherData = await response.json();
            console.log(weatherData);
            displayForecastData(weatherData);
        } else {
            throw new Error("Weather data could not be retrieved.");
        }
    } catch (error) {
        console.error("Error loading weather:", error);
        document.getElementById("weather-section").innerHTML = "<p>Weather data unavailable</p>";
    }
}

function displayForecastData(data) {
    const forecastData = data.list;

    
    let dailyTemps = {};

    forecastData.forEach(entry => {
        const date = entry.dt_txt.split(" ")[0]; 
        const temp = entry.main.temp;

        
        if (!dailyTemps[date]) {
            dailyTemps[date] = { high: temp, low: temp };
        } else {
           
            dailyTemps[date].high = Math.max(dailyTemps[date].high, temp);
            dailyTemps[date].low = Math.min(dailyTemps[date].low, temp);
        }
    });

   
    const forecastDates = Object.keys(dailyTemps).slice(1, 4); 

   
    const forecastContainer = document.querySelector("#weather-info");
    forecastContainer.innerHTML = "<h3>3-Day Forecast</h3>";

    forecastDates.forEach(date => {
        const dayOfWeek = new Date(date).toLocaleDateString("en-US", { weekday: "long" });

        const forecastHTML = `
            <div class="forecast-day">
                <h4>${dayOfWeek}</h4>
                <p>High: ${Math.round(dailyTemps[date].high)}°F</p>
                <p>Low: ${Math.round(dailyTemps[date].low)}°F</p>
            </div>
        `;

        forecastContainer.innerHTML += forecastHTML;
    });
}


document.addEventListener("DOMContentLoaded", loadWeather);







const chamberMembers = [
    {
        "company_name": "Chevron Hotels",
        "logo": "https://www.chevron.com/-/media/shared-media/images/hallmark-2023.png",
        "phone": "+1 832.854.1000",
        "address": "1400 Smith Street Houston, TX 77002, USA",
        "website": "https://www.chevron.com/worldwide",
        "membership_level": "gold"
    },
    {
        "company_name": "innoson vehicle manufacturing",
        "logo": "https://www.innosonvehicles.com/wp-content/uploads/2018/04/innoson-ivm-logo.png",
        "phone": "+234 8122202053",
        "address": " IVM Service Center, Lekki/ Ajah express Way, After Cosharis Ibeju Lekki",
        "website": "https://www.innosonvehicles.com/",
        "membership_level": "silver"
    },
    
];


const filteredMembers = chamberMembers.filter(member => 
    member.membership_level === "gold" || member.membership_level === "silver"
);


function getRandomSpotlightMembers() {
    const randomMembers = [];
    const randomIndex = Math.floor(Math.random() * filteredMembers.length);
    randomMembers.push(filteredMembers[randomIndex]);

    if (filteredMembers.length > 1) {
        const secondRandomIndex = (randomIndex + 1 + Math.floor(Math.random() * (filteredMembers.length - 1))) % filteredMembers.length;
        randomMembers.push(filteredMembers[secondRandomIndex]);
    }

    return randomMembers;
}

function displaySpotlights() {
    const spotlightContainer = document.querySelector(".spotlights");
    const spotlightMembers = getRandomSpotlightMembers();

    spotlightContainer.innerHTML = ""; 

    spotlightMembers.forEach(member => {
        const card = document.createElement("div");
        card.className = "spotlight-card";

        card.innerHTML = `
            <img src="${member.logo}" alt="${member.company_name} Logo">
            <h3>${member.company_name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${member.membership_level.charAt(0).toUpperCase() + member.membership_level.slice(1)}</p>
        `;
        
        spotlightContainer.appendChild(card);
    });
}

window.onload = displaySpotlights;



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
