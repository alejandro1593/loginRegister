document.addEventListener('DOMContentLoaded', function () {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const registerLink = document.getElementById('register-link');
    const backToLoginButton = document.getElementById('back-to-login');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    registerLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginContainer.classList.add('hidden');
        registerContainer.classList.remove('hidden');
    });

    backToLoginButton.addEventListener('click', function (event) {
        event.preventDefault();
        registerContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Lógica para el inicio de sesión
        alert('Iniciar Sesión: Implementa la lógica aquí');
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Lógica para el registro
        alert('Registro: Implementa la lógica aquí');
    });
});
