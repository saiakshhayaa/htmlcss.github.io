const loginr = document.querySelector('.login-section');
const Loginlink = document.querySelector('.Login-link');
const registerlink = document.querySelector('.remember-link'); // Corrected class name

registerlink.addEventListener('click', () => {
    loginr.classList.add('active');
});

Loginlink.addEventListener('click', () => {
    loginr.classList.remove('active');
});
