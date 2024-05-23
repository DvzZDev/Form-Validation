let title = document.getElementById("title");
let nameInput = document.getElementById("name");
let lastname = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let button = document.getElementById("btn");
let error = document.getElementById("error");

let result;

button.addEventListener("click", function (event) {
  event.preventDefault();

  let isNameValid = false;
  let isLastnameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;

  if (nameInput.value === "" || /\d/.test(nameInput.value, result)) {
    error.innerHTML = "Fill to continue";
    error.classList.add("errorAnimation");
    nameInput.classList.add("error");
    isNameValid = false;
  } else {
    error.innerHTML = "";
    nameInput.classList.remove("error");
    isNameValid = true;
    error.classList.remove("errorAnimation");
  }
  if (lastname.value === "" || /\d/.test(lastname.value)) {
    error.innerHTML = "Fill to continue";
    error.classList.add("errorAnimation");
    lastname.classList.add("error");
    isLastnameValid = false;
  } else {
    error.innerHTML = "";
    error.classList.remove("errorAnimation");
    lastname.classList.remove("error");
    isLastnameValid = true;
  }
  if (email.value === "" || !email.value.includes("@")) {
    error.innerHTML = "Fill to continue";
    error.classList.add("errorAnimation");
    email.classList.add("error");
    isEmailValid = false;
  } else {
    error.innerHTML = "";
    error.classList.remove("errorAnimation");
    email.classList.remove("error");
    isEmailValid = true;
  }
  if (password.value === "" || password.value.length < 8) {
    error.innerHTML = "Fill to continue";
    error.classList.add("errorAnimation");
    password.classList.add("error");
    password.value = "";
    password.placeholder = "Minimum 8 characters";
    isPasswordValid = false;
  } else {
    error.innerHTML = "";
    error.classList.remove("errorAnimation");
    password.classList.remove("error");
    password.placeholder = "Password";
    isPasswordValid = true;
  }

  const toJson = () => {
    if (isNameValid && isLastnameValid && isEmailValid && isPasswordValid) {
      return (result = JSON.stringify({
        name: nameInput.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
      }));
    } else {
      return (result = "error");
    }
  };

  isNameValid && isLastnameValid && isEmailValid && isPasswordValid ? title.innerHTML = "YOU'RE IN!" : title.innerHTML = "WELLCOME";
  console.log(toJson())
});
