document.addEventListener('DOMContentLoaded', function () {
    // Check if user is not logged in
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = 'signup.html'; // Redirect to signup page
    }

    // Display user details on the profile page
    const usernameElement = document.querySelector('#name');
    const emailElement = document.querySelector('#email');
    const Token=document.querySelector("#accessToken");
    const password=document.querySelector("#pass1");

    const username = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const token=localStorage.getItem('accessToken');
    const pass=localStorage.getItem('pass1');


    usernameElement.textContent = `name: ${username}`;
    emailElement.textContent = `Email: ${email}`;
    Token.textContent= `Token: ${token}`;
    password.textContent=`Password: ${pass}`;


    // Handle logout
    const logoutButton = document.querySelector('#btn');
    logoutButton.addEventListener('click', function () {
        // Clear local storage and redirect to signup page
        localStorage.removeItem('accessToken');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('pass1');
        window.location.href = 'index.html';
    });
});
