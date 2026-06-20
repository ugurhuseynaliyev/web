const password = document.querySelector(".password");
const confirm = document.querySelector(".confirm");
const strengthText = document.querySelector(".strength");
const matchText = document.querySelector(".match");
const button = document.querySelector("button");

function checkStrength(pass) {
  let strength = 0;

  if (pass.length >= 6) strength++;
  if (pass.match(/[A-Z]/)) strength++;
  if (pass.match(/[0-9]/)) strength++;
  if (pass.match(/[@$!%*?&]/)) strength++;

  return strength;
}

password.addEventListener("input", () => {
  const val = password.value;
  const strength = checkStrength(val);

  if (val.length === 0) {
    strengthText.innerText = "";
  } else if (strength <= 1) {
    strengthText.innerText = "Weak password";
    strengthText.style.color = "red";
  } else if (strength === 2 || strength === 3) {
    strengthText.innerText = "Medium password";
    strengthText.style.color = "orange";
  } else {
    strengthText.innerText = "Strong password";
    strengthText.style.color = "green";
  }
});

confirm.addEventListener("input", () => {
  if (confirm.value === "") {
    matchText.innerText = "";
    return;
  }

  if (confirm.value === password.value) {
    matchText.innerText = "Passwords match";
    matchText.style.color = "green";
  } else {
    matchText.innerText = "Passwords do not match";
    matchText.style.color = "red";
  }
});

button.addEventListener("click", () => {
  if (
    password.value &&
    confirm.value &&
    password.value === confirm.value &&
    checkStrength(password.value) >= 2
  ) {
    alert("Registered successfully!");
  } else {
    alert("Please fix errors!");
  }
});
