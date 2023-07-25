// Load View Content from File & Insert Into Specified Element
async function loadViewContent(viewId, viewFile) {
    try {
        const response = await fetch('public/js/views/${viewFile}');
        const viewContent = await response.text();
        const appDiv = document.getElementById(viewId);
        appDiv.innerHTML = viewContent;
    } catch (error) {
        console.error("Error Loading View: ", error);
    }
}

// Handle Routing based on URL
function handleRouting() {
    const hash = window.location.hash;
    switch (hash) {
        case "#login":
            loadViewContent("app", "login.html");
            break;
        case "#home":
            loadViewContent("app", "home.html");
            break;
        default:
            loadViewContent("app", "login.html");
            break;
    }
}

// Handle Login & Registration Form Toggle
function handleToggle() {
    const authForm = document.getElementById("auth-form");
    const formTitle = document.getElementById("form-title");
    const toggleButton = document.getElementById("toggle-button");
    const toggleText = document.getElementById("toggle-text");
    const registrationField = document.getElementById("registration-field");

    if (authForm.classList.contains("registration")) {
        // Switching from Registration to Login
        formTitle.textContent = "Login";
        authForm.classList.remove("registration");
        toggleButton.textContent = "Register";
        toggleText.textContent = "Don't have an account? ";
        registrationField.style.display = "none";
    } else {
        // Switching from Login to Registration
        formTitle.textContent = "Register";
        authForm.classList.add("registration");
        toggleButton.textContent = "Login";
        toggleText.textContent = "Already have an account? ";
        registrationField.style.display = "block";
    }
}

// Attach Event Listener for Hash Changes
window.addEventListener("hashchange", handleRouting);

// Attach Event Listener for Login & Registration Toggle
const toggleButton = document.getElementById("toggle-button");
if (toggleButton) {
    toggleButton.addEventListener("click", handleToggle);
}

// Call handleRouting on Initial Load
handleRouting();