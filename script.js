document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const openPopup = document.getElementById('openPopup');
    const close = document.getElementById('close');
    const showLogin = document.getElementById('showLogin');
    const showRegister = document.getElementById('showRegister');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    openPopup.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor click behavior
        popup.style.display = 'flex';
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    showLogin.addEventListener('click', () => {
       window.location.href="login.html";
    });

    showRegister.addEventListener('click', () => {
        window.location.href="login1.html";
    });
});