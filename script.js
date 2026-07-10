const exploreBtn = document.getElementById("exploreBtn");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

// Explore button
if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        window.location.href = "destinations/index.html";
    });
}

// Search button
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