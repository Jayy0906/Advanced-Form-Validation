document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  let isValid = true;

  // Reusable function for validation
  const validateField = (fieldId, errorId, regex, errorMessage) => {
    const value = document.getElementById(fieldId).value;
    const errorElement = document.getElementById(errorId);
    if (!value || !regex.test(value)) {
      errorElement.textContent = errorMessage;
      return false;
    } else {
      errorElement.textContent = '';
      return true;
    }
  };

  // Individual field validations
  isValid &= validateField(
    'fullname',
    'fullnameError',
    /^[A-Za-z\s]+$/,
    'Please enter a valid name (letters and spaces only).'
  );
  
  isValid &= validateField(
    'email',
    'emailError',
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    'Please enter a valid email address.'
  );
  
  isValid &= validateField(
    'contact',
    'contactError',
    /^[0-9]{10}$/,
    'Please enter a valid 10-digit phone number.'
  );
  
  isValid &= validateField(
    'password',
    'passwordError',
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
    'Password must be at least 8 characters, with one uppercase letter, one number, and one special character.'
  );

  // Confirm Password Validation
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  if (confirmPassword !== password) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    isValid = false;
  } else {
    confirmPasswordError.textContent = '';
  }
  
  isValid &= validateField(
    'city',
    'cityError',
    /^[A-Za-z\s]+$/,
    'Please enter a valid city name (letters and spaces only).'
  );
  
  isValid &= validateField(
    'country',
    'countryError',
    /^[A-Za-z\s]+$/,
    'Please enter a valid country name (letters and spaces only).'
  );

  // Display success message
  const successMessage = document.getElementById('successMessage');
  successMessage.textContent = isValid ? 'Form submitted successfully!' : '';
});
