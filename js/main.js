const logInButton = document.getElementById('login-button');
logInButton.addEventListener('click', function () {
    const userEmail = document.getElementById('user-input-email').value;
    const userPassword = document.getElementById('user-input-password').value;

    if (userEmail == 'abc@def.gmail.com' && userPassword == 'abcdef12') {
        window.location.href = '../bank-site.html';
    }
})