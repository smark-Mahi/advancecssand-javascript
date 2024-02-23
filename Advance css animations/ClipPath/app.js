const form = document.querySelector("#form");
const email = document.querySelector("#email");
const date = document.querySelector("#date");
const password = document.querySelector("#password");

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("im running");
  validateInputs();
});

const validateInputs = () => {
  const emailValue = email?.value.trim();
  const passwordValue = password?.value.trim();
  const date2Value = date.value?.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (date2Value === "") {
    setError(date, "Date is required");
  } else if (date2Value < 0 || date2Value > 31) {
    setError(date2Value, "Please enter a valid date");
  } else {
    setSuccess(date2Value);
  }
};

const setError = (element, message) => {
  console.log(element.parentElement);
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
