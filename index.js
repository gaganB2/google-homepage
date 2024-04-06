let darkMode = false;



function toggleDarkMode() {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff"; // Change text color for better visibility
        document.getElementById("mode-switch").innerText = "Light Mode";
    } else {
        document.body.style.backgroundColor = "#f9f9f9";
        document.body.style.color = "#000"; // Reset text color
        document.getElementById("mode-switch").innerText = "Dark Mode";
    }
}


function search() {
    let query = document.getElementById("search-input").value;
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
}

function lucky() {
    let query = document.getElementById("search-input").value;
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query) + "&btnI";
}
