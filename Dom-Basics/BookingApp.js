"use strict";
function saveToLocalStorage(event) {
  let submitName = event.target.username.value;
  let email = event.target.email.value;
  event.preventDefault();
  let obj = {};
  obj.Name = submitName;
  obj.Email = email;
  let obj_serialized = JSON.stringify(obj);
  localStorage.setItem(obj.Email, obj_serialized);
  showUserOnScreen(obj);
}
function showUserOnScreen(obj) {
  const parentElement = document.getElementById("my-form");
  const childElement = document.createElement("li");
  childElement.textContent = `${obj.Name}-${obj.Email}  `;
  const button = document.createElement("input");
  button.type = "button";
  button.value = "Delete";
  button.onclick = () => {
    localStorage.removeItem(obj.Email);
    parentElement.removeChild(childElement);
  };
  const EditButton = document.createElement("input");
  EditButton.type = "button";
  EditButton.value = "Edit";
  EditButton.onclick = () => {
    localStorage.removeItem(obj.Email);
    parentElement.removeChild(childElement);
    document.getElementById("id-name").value = obj.Name;
    document.getElementById("id-email").value = obj.Email;
  };
  childElement.appendChild(button);
  childElement.appendChild(EditButton);
  parentElement.appendChild(childElement);
}
