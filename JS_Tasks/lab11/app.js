// function isEmpty(value, fieldName) {
//   if (value.trim() === '') {
//       displayErrorMessage(fieldName, 'Field cannot be empty');
//       return true;
//   }
//   return false;
// }

// function isValidIdNumber(idNumber) {
//   if (!/^\d{11}$/.test(idNumber)) {
//       displayErrorMessage('idNumber', 'ID Number must consist of 11 digits');
//       return false;
//   }
//   return true;
// }

// function displayErrorMessage(fieldName, message) {
//   const fieldElement = document.getElementById(fieldName);
//   const errorMessageElement = document.createElement('div');
//   errorMessageElement.className = 'error-message';
//   errorMessageElement.textContent = message;

//   const existingErrorMessage = fieldElement.nextElementSibling;
//   if (existingErrorMessage && existingErrorMessage.className === 'error-message') {
//       fieldElement.parentElement.removeChild(existingErrorMessage);
//   }

//   fieldElement.parentElement.appendChild(errorMessageElement);
// }

// function updateRegistrationDate() {
//   const registrationDateElement = document.getElementById('registrationDate');
//   const currentDate = new Date();
//   const formattedDate = `${currentDate.getDate()}:${currentDate.getMonth() + 1}:${currentDate.getFullYear()}`;
//   registrationDateElement.value = formattedDate;
// }

// function isValidEmail(email) {
//   if (!/@/.test(email)) {
//       displayErrorMessage('email', 'Invalid e-mail address');
//       return false;
//   }
//   return true;
// }

// function validateForm() {
//   const name = document.getElementById('name').value;
//   const lastName = document.getElementById('lastName').value;
//   const idNumber = document.getElementById('idNumber').value;
//   const email = document.getElementById('email').value;

//   const errorMessages = document.querySelectorAll('.error-message');
//   errorMessages.forEach(message => message.parentElement.removeChild(message));

//   if (isEmpty(name, 'name') || isEmpty(lastName, 'lastName')) {
//       return;
//   }

//   if (!isValidIdNumber(idNumber)) {
//       return;
//   }

//   updateRegistrationDate();

//   if (!isValidEmail(email)) {
//       return;
//   }

//   document.getElementById('registrationForm').submit();
// }


function generateRandomOddNumbers() {

  var n = parseInt(document.getElementById("n").value);
  var k = parseInt(document.getElementById("k").value);
  var p = parseInt(document.getElementById("p").value);

  if (isNaN(n) || isNaN(k) || isNaN(p)) {
      alert("Please enter valid numeric values.");
      return;
  }

  k = k % 2 === 0 ? k + 1 : k;

  var oddNumbers = [];
  for (var i = 0; i < n; i++) {
      var randomNumber = Math.floor(Math.random() * ((p - k) / 2 + 1)) * 2 + k;
      oddNumbers.push(randomNumber);
  }


  document.getElementById("result").innerHTML = "Generated Odd Numbers: " + oddNumbers.join(", ");
}