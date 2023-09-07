document.addEventListener('DOMContentLoaded', function(){
    const registerForm = document.getElementById('registerForm');
    const registerToggle = document.getElementById('registerToggle');
    const loginForm = document.getElementById('loginForm');
    const loginToggle = document.getElementById('loginToggle');

    // Retrieve & display error messages from session storage
    const loginError = document.getElementById('loginError');
    const registerError = document.getElementById('registerError');
    
    const sessionLoginError = sessionStorage.getItem('loginError');
    if (sessionLoginError) {
        showError(sessionLoginError, loginError);
        sessionStorage.removeItem('loginError'); // Clear error from session
    }

    const sessionRegisterError = sessionStorage.getItem('registerError');
    if (sessionRegisterError) {
        showError(sessionRegisterError, registerError); 
        sessionStorage.removeItem('registerError'); // Clear error from session
    }

    function showError(message, errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'flex';
    }

    // Set default display for forms
    loginForm.style.display = 'grid';
    registerForm.style.display = 'none';

    // Toggle forms when btn is clicked
    registerToggle.addEventListener('click', () => {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'grid';
    });
    loginToggle.addEventListener('click', () => {
        event.preventDefault();
        loginForm.style.display = 'grid';
        registerForm.style.display = 'none';
    });
});