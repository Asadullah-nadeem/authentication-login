function generateRecoveryPhrase() {
    let phrase = [];
    for (let i = 0; i < 24; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        phrase.push(words[randomIndex]);
    }
    return phrase.join(' ');
}

document.getElementById('generatePhrase').addEventListener('click', function () {
    const recoveryPhrase = generateRecoveryPhrase();
    document.getElementById('recoveryPhrase').value = recoveryPhrase;
});

document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const recoveryPhrase = document.getElementById('recoveryPhrase').value;

    const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, recoveryPhrase }),
    });

    const result = await response.json();
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = result.message;
    messageDiv.className = result.success ? 'text-green-600' : 'text-red-600';
});

// Add click event for login button
document.getElementById('loginButton').addEventListener('click', function () {
    window.location.href = '/login';  // Change this to the correct route for your login page
});