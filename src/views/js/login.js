document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const recoveryPhrase = document.getElementById('recoveryPhrase').value;

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, recoveryPhrase }),
    });

    const result = await response.json();
    if (result.success) {
        window.location.href = '/dashboard';
    } else {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = result.message;
        messageDiv.className = 'text-red-600';
    }
});