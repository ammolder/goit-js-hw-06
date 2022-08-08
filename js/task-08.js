const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  const inputName = email.value;
  const inputPassword = password.value;

  if (inputName === "" || inputPassword === "") {
    alert("Please, fill in all the fields");
  }

  infoRef[inputName] = inputName;
  infoRef[inputPassword] = inputPassword;

  console.log(infoRef);
  evt.currentTarget.reset();
}
const infoRef = {};
