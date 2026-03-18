document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      submitForm(event);
    });

  function validateForm() {
    var name = document.forms["myForm"]["fullName"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var message = document.forms["myForm"]["message"].value;

    if (name == "") {
      displayErrorMessage(
        document.forms["myForm"]["fullName"],
        "Please fill in name",
      );
      return false;
    }

    if (email == "") {
      displayErrorMessage(
        document.forms["myForm"]["email"],
        "Please fill in email",
      );
      return false;
    }

    if (phone == "") {
      displayErrorMessage(
        document.forms["myForm"]["phone"],
        "Please fill in phone number",
      );
      return false;
    }

    if (message == "") {
      displayErrorMessage(
        document.forms["myForm"]["message"],
        "Please add message",
      );
      return false;
    }

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      displayErrorMessage(
        document.forms["myForm"]["email"],
        "Invalid email address",
      );
      return false;
    }

    return true;
  }

  function displayErrorMessage(element, message) {
    var errorMessage = element.nextElementSibling;

    if (errorMessage && errorMessage.className == "error-message") {
      errorMessage.textContent = message;
    } else {
      errorMessage = document.createTextNode(message);
      var span = document.createElement("span");
      span.className = "error-message";
      span.appendChild(errorMessage);
      element.parentNode.insertBefore(span, element.nextSibling);
    }
  }

  function submitForm(event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    var name = document.forms["myForm"]["fullName"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var message = document.forms["myForm"]["message"].value;

    alert("Thank you for submitting the form! We will contact you shortly!");
    document.forms["myForm"].reset();
  }
});
