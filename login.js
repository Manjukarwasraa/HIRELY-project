function loginUser() {
	const username = document.getElementById('login-username').value;
	const password = document.getElementById('login-password').value;
  
	if (username === '' || password === '') {
	  alert('Please enter both username and password.');
	} else {
	  // Mock login check
	  alert('Login successful! Welcome, ' + username);
	  window.location.href = 'index.html'; // Redirect to homepage
	}
  }
  