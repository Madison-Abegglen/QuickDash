document.addEventListener('DOMContentLoaded', function(){
    const registerForm = document.getElementById('registerForm');
    const registerToggle = document.getElementById('registerToggle');
    const loginForm = document.getElementById('loginForm');
    const loginToggle = document.getElementById('loginToggle');

    // Set default display types
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