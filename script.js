const exploreBtn = document.getElementById("exploreBtn");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

// ===============================
// Explore Button
// ===============================

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        window.location.href = "destinations/index.html";
    });
}

// ===============================
// Search Button
// ===============================

if (searchBtn) {
    searchBtn.addEventListener("click", () => {

        const place = searchInput.value.trim().toLowerCase();

        if (place === "") {
            alert("Please enter a destination.");
            return;
        }

        if (place === "goa") {
            window.location.href = "destinations/goa.html";
        }
        else if (place === "kerala") {
            window.location.href = "destinations/kerala.html";
        }
        else if (place === "ladakh") {
            window.location.href = "destinations/ladakh.html";
        }
        else if (place === "jaipur") {
            window.location.href = "destinations/jaipur.html";
        }
        else {
            alert("Destination not found!");
        }

    });
}

// ===============================
// Budget Calculator
// ===============================

function calculateBudget() {

    const destination = document.getElementById("destination").value;
    const days = parseInt(document.getElementById("days").value);

    if (!days || days <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid days.";
        return;
    }

    let costPerDay = 0;

    switch (destination) {

        case "Goa":
            costPerDay = 4000;
            break;

        case "Kerala":
            costPerDay = 3500;
            break;

        case "Ladakh":
            costPerDay = 6000;
            break;

        case "Jaipur":
            costPerDay = 3000;
            break;

    }

    const total = days * costPerDay;

    document.getElementById("result").innerHTML =
        `Estimated Budget: ₹${total.toLocaleString("en-IN")}`;

}

// ===============================
// Weather API
// ===============================

async function getWeather() {

    const destination = document.getElementById("destination").value;

    let city = "";

    switch (destination) {

        case "Goa":
            city = "Panaji";
            break;

        case "Kerala":
            city = "Kochi";
            break;

        case "Ladakh":
            city = "Leh";
            break;

        case "Jaipur":
            city = "Jaipur";
            break;

    }

    const apiKey = "5670e676f8741adfa97b4189caec3dff";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (Number(data.cod) === 200) {

            document.getElementById("weatherResult").innerHTML = `
                <h3>🌤 Weather in ${data.name}</h3>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>☁ Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            `;

        } else {

            document.getElementById("weatherResult").innerHTML =
                "Weather not available.";

        }

    } catch (error) {

        document.getElementById("weatherResult").innerHTML =
            "Unable to fetch weather.";

    }

}

// ===============================
// Checklist Local Storage
// ===============================

const checkboxes = document.querySelectorAll(".checklist-box input");

checkboxes.forEach((checkbox, index) => {

    if (localStorage.getItem("item" + index) === "true") {
        checkbox.checked = true;
    }

    checkbox.addEventListener("change", () => {
        localStorage.setItem("item" + index, checkbox.checked);
    });

});

function clearChecklist() {

    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = false;
        localStorage.removeItem("item" + index);
    });

}
// ===============================
// DARK MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

    // Load saved theme
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark-mode");
        themeToggle.innerHTML = "☀️";
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("theme","dark");
            themeToggle.innerHTML = "☀️";
        }
        else{
            localStorage.setItem("theme","light");
            themeToggle.innerHTML = "🌙";
        }

    });

}
