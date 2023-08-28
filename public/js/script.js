document.addEventListener('DOMContentLoaded', function(){
    const toLoginForm = document.getElementById('toLoginForm');
    const registerForm = document.getElementById('registerForm');
    const registerToggle = document.getElementById('registerToggle');
    const loginForm = document.getElementById('loginForm');
    const loginToggle = document.getElementById('loginToggle');

    // // Get Login Page from Welcome Page
    // toLoginForm.addEventListener('click', () => {
    //     fetch('/login', {
    //         method: 'GET'
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             console.log('Fetching Login Form Page');
    //         } else {
    //             throw new Error('Failed to fetch Login Form Page');
    //         }
    //     })
    // });

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