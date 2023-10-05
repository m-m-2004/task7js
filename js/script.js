function validation() {
  // Get form inputs
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var usernameError = document.getElementById("username-error");
  var emailError = document.getElementById("email-error");
  var passwordError = document.getElementById("password-error");

  if (username.length < 8 || username == "") {
    usernameError.innerHTML = "*Username must be at least 8 characters long";
    return false; // Prevent form submission
  } else {
    usernameError.innerHTML = "";
  }

  if (email.length < 15 || email == "") {
    emailError.innerHTML = "* Email must be at least 15 characters long";
    return false; // Prevent form submission
  } else {
    emailError.innerHTML = "";
  }
  if (password.length < 10 || password == "") {
    passwordError.innerHTML = " *Password must be at least 10 characters long";
    return false; // Prevent form submission
  } else {
    passwordError.innerHTML = "";
  }
  window.location.href = "facebook.html";
  return true;
}
