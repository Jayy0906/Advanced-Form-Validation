document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
  
    // Full Name Validation
    const fullname = document.getElementById('fullname').value;
    const fullnameError = document.getElementById('fullnameError');
    const fullnameRegex = /^[A-Za-z\s]+$/;
    if (!fullname || !fullnameRegex.test(fullname)) {
      fullnameError.textContent = 'Please enter a valid name (letters and spaces only).';
      isValid = false;
    } else {
      fullnameError.textContent = '';
    }
  
    // Email Validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }
  
    // Contact Number Validation
    const contact = document.getElementById('contact').value;
    const contactError = document.getElementById('contactError');
    const contactRegex = /^[0-9]{10}$/;
    if (!contact || !contactRegex.test(contact)) {
      contactError.textContent = 'Please enter a valid 10-digit phone number.';
      isValid = false;
    } else {
      contactError.textContent = '';
    }
  
    // Password Validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!password || !passwordRegex.test(password)) {
      passwordError.textContent = 'Password must be at least 8 characters, with one uppercase letter, one number, and one special character.';
      isValid = false;
    } else {
      passwordError.textContent = '';
    }
  
    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      isValid = false;
    } else {
      confirmPasswordError.textContent = '';
    }
  
    // City Validation
    const city = document.getElementById('city').value;
    const cityError = document.getElementById('cityError');
    const cityRegex = /^[A-Za-z\s]+$/;
    if (!city || !cityRegex.test(city)) {
      cityError.textContent = 'Please enter a valid city name (letters and spaces only).';
      isValid = false;
    } else {
      cityError.textContent = '';
    }
  
    // Country Validation
    const country = document.getElementById('country').value;
    const countryError = document.getElementById('countryError');
    const countryRegex = /^[A-Za-z\s]+$/;
    if (!country || !countryRegex.test(country)) {
      countryError.textContent = 'Please enter a valid country name (letters and spaces only).';
      isValid = false;
    } else {
      countryError.textContent = '';
    }
  
    // Success Message
    const successMessage = document.getElementById('successMessage');
    if (isValid) {
      successMessage.textContent = 'Form submitted successfully!';
    } else {
      successMessage.textContent = '';
    }
  });
  