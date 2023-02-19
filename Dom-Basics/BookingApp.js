"use strict";
function saveToLocalStorage(event) {
  event.preventDefault();
  const submitName = event.target.username.value;
  const email = event.target.email.value;
  console.log(submitName);
  console.log(email);
  localStorage.setItem("name", submitName);
  localStorage.setItem("Emial", email);
}
