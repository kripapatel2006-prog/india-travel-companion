const exploreBtn = document.getElementById("exploreBtn");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

exploreBtn.addEventListener("click", () => {
    window.location.href = "destinations/index.html";
});

searchBtn.addEventListener("click", () => {

    const place = searchInput.value.trim();

    if(place === ""){
        alert("Please enter a destination.");
        return;
    }

    alert("You searched for: " + place + "\n\nSearch functionality will be implemented in the next update!");

});