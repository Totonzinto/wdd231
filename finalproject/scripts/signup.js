document.querySelector('.signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent page reload

    // Collect form data
    const data = {
      fname: document.getElementById('fname').value,
      lname: document.getElementById('lname').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      interest: document.getElementById('interest').value,
      newsletter: document.querySelector('input[name="newsletter"]').checked
    };

    // Store in localStorage
    localStorage.setItem('signupData', JSON.stringify(data));

    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
  });

  