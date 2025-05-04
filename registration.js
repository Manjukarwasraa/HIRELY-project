function registerUser() {
	const username = document.getElementById('register-username').value;
	const email = document.getElementById('register-email').value;
	const password = document.getElementById('register-password').value;
  
	if (!username || !email || !password) {
	  alert('All fields are required.');
	} else {
	  alert('Registration successful! You can now log in.');
	  window.location.href = 'login.html'; // Redirect to login
	}
}
  