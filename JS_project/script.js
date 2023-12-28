const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});



// ----------------------------------------------------


function checkPasswordStrength(password) {

  const regexLowercase = /[a-z]/;
  const regexUppercase = /[A-Z]/;
  const regexNumber = /\d/;


  const hasLowercase = regexLowercase.test(password);
  const hasUppercase = regexUppercase.test(password);
  const hasNumber = regexNumber.test(password);


  if (hasLowercase && !hasUppercase && !hasNumber) {
    return 'Weak';
  } else if (hasLowercase && hasUppercase && hasNumber) {
    return 'Strong';
  } else {
    return 'Average';
  }
}

const passwordInput = document.getElementById('passwordInput');
const passwordStrengthIndicator = document.getElementById('passwordStrengthIndicator');
const confirmPasswordInput = document.getElementById('confirmPasswordInput');
const passwordMismatchMessage = document.getElementById('passwordMismatchMessage');


passwordInput.addEventListener('input', function () {
  const password = this.value;
  const strength = checkPasswordStrength(password);

  passwordStrengthIndicator.className = 'password-strength-indicator';

  switch (strength) {
    case 'Weak':
      passwordStrengthIndicator.classList.add('weak');
      break;
    case 'Average':
      passwordStrengthIndicator.classList.add('average');
      break;
    case 'Strong':
      passwordStrengthIndicator.classList.add('strong');
      break;
    default:
      break;
  }
 });

confirmPasswordInput.addEventListener('input', function () {
    const password = passwordInput.value;
    const confirmPassword = this.value;

    if (password !== confirmPassword) {
      passwordMismatchMessage.textContent = 'Passwords do not match';
    } else {
      passwordMismatchMessage.textContent = '';
    }
});

// function correctMail () {
//   const emailInput = document.getElementById('emailInput');
//     const email = emailInput.value;

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

//     if (!emailRegex.test(email)) {
//       alert('Invalid email address. Please enter a valid email.');
//       return false;
//     } else {
//       return true;
//     }
// }


