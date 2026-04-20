// authService.js

const AUTH_TOKEN_KEY = 'authToken';

// Function to register a user
function register(email, password) {
    // Implementation for user registration
    return fetch('/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    });
}

// Function to login a user
function login(email, password) {
    // Implementation for user login
    return fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    }).then(response => response.json())
      .then(data => {
          if (data.token) {
              localStorage.setItem(AUTH_TOKEN_KEY, data.token);
          }
      });
}

// Function to logout a user
function logout() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
}

// Function to retrieve the token
function getToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY);
}

// Function to check if the user is authenticated
function isAuthenticated() {
    return getToken() !== null;
}

export { register, login, logout, getToken, isAuthenticated };