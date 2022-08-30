const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorMessage1 = document.querySelector(".error-message1");
const errorMessage2 = document.querySelector(".error-message2");
const errorMessage3 = document.querySelector(".error-message3");
const errorMessage4 = document.querySelector(".error-message4");

const inputs = [firstName, lastName, email, password];

inputs.forEach((item) => {
  item.addEventListener("focusin", () => {
    errorMessage1.textContent = "";
    errorMessage2.textContent = "";
    errorMessage3.textContent = "";
    errorMessage4.textContent = "";
    item.classList.remove("error");
  });
});

function submitError(e) {
  e.preventDefault();
  if (!firstName.value) {
    firstName.classList.add("error", "icon");
    errorMessage1.textContent = "First Name cannot be empty";
    return;
  } else {
    firstName.classList.remove("icon");
  }
  if (!lastName.value) {
    lastName.classList.add("error", "icon");
    errorMessage2.textContent = "Last Name cannot be empty";
    return;
  } else {
    lastName.classList.remove("icon");
  }
  if (!email.value) {
    email.classList.add("error", "icon");
    errorMessage3.textContent = "Looks like this is not an email";
    email.placeholder = "email@example/com";
    email.classList.add("pink");
    return;
  } else {
    email.classList.remove("icon");
  }
  if (!password.value) {
    password.classList.add("error", "icon");
    errorMessage4.textContent = "Password cannot be empty";
    return;
  } else {
    password.classList.remove("icon");
  }
  return;
}

const form = document.querySelector("form");
form.addEventListener("submit", submitError);
