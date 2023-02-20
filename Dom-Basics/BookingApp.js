"use strict";
function saveToLocalStorage(event) {
  event.preventDefault();
  let obj = {};
  const submitName = event.target.username.value;
  const email = event.target.email.value;
  obj.Name = submitName;
  obj.Email = email;
  let obj_serialized = JSON.stringify(obj);
  localStorage.setItem("userDetails", obj_serialized);
}
