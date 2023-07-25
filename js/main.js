// Function to Show View by Id
function showView(viewId) {
    const viewElement = document.getElementById(viewId);
    if (viewElement) {
        viewElement.style.display = "flex";
    }
}

// Function to Hide View by Id
function hideView(viewId) {
    const viewElement = document.getElementById(viewId);
    if (viewElement) {
        viewElement.style.display = "none";
    }
}

// Function to handle routing based on URL
function handleRouting() {
    const hash = window.location.hash;
    if (hash === "#login") {
        showView("login-view");
        hideView("home-view");
    } else if (hash === "#home") {
        const userName = "Madison"; // Replace w/ user's name from DB
        showView("home-view");
        hideView("login-view");
        document.getElementById("greeting").textContent = "Hello, " + userName;
    } else {
        // Default to login view if hash is not recognized
        showView("login-view");
        hideView("home-view");
    }
}

// Attach event listener to handle hash changes
window.addEventListener("hashchange", handleRouting);

// Call handleRouting on inital load
handleRouting();