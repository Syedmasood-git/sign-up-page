document.addEventListener('DOMContentLoaded', function () {
    // Check if user is already logged in
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        window.location.href = 'profile.html'; // Redirect to profile page
    }

    const signUpForm = document.querySelector('#signUpForm');
    const errorText = document.querySelector('#errorText');

    signUpForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get user input
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const pass1 = document.querySelector('#pass1').value;
        const pass2 = document.querySelector('#pass2').value;

        // Validate user input (you can add more validation)
        if (!name || !email || !pass1 || !pass2) {
            errorText.textContent = 'All fields are mandatory!';
            return;
        }
        if(pass1!=pass2){
            alert("Passwords does not match");
            return;
        }

        // Generate random access token (16-byte string)
        const accessToken = generateAccessToken();

        // Store user data in local storage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('pass1',pass1);

        // Redirect to profile page
        window.location.href = 'profile.html';
    });

    function generateAccessToken() {
        // Generate a random 16-byte string (you can use a library for this)
        // For simplicity, we'll use a basic example
        return Math.random().toString(36).substring(2, 18);
    }
});
