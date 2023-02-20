"use strict";
function saveToLocalStorage(event) {
  event.preventDefault();
  let obj = {};
  const submitName = event.target.username.value;
  const email = event.target.email.value;
  obj.Name = submitName;
  obj.Email = email;
  let obj_serialized = JSON.stringify(obj);
  localStorage.setItem(obj.Email, obj_serialized);
  showUserOnScreen(obj);
}
function showUserOnScreen(obj) {
  const parentElement = document.getElementById("listofItems");
  const childElement = document.createElement("li");
  childElement.textContent = `${obj.Name}-${obj.Email} `;
  const button = document.createElement("input");
  button.type = "button";
  button.value = "Delete";
  button.onclick = () => {
    localStorage.removeItem(obj.Email);
    parentElement.removeChild(childElement);
  };
  childElement.appendChild(button);
  parentElement.appendChild(childElement);
}
