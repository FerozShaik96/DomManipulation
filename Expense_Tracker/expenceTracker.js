"use strict";
function addExpences(event) {
  const selectElement = document.querySelector("#select");
  event.preventDefault();
  const amount = event.target.expence.value;
  const description = event.target.description.value;
  var select = selectElement.options[selectElement.selectedIndex].value;

  const obj = {
    amount,
    description,
    select,
  };
  localStorage.setItem(obj.select, JSON.stringify(obj));
  display(obj);
}

function display(obj) {
  const displayValues = document.querySelector("#formElements");
  const li = document.createElement("li");

  li.textContent = `${obj.amount} - ${obj.description}--${obj.select}`;
  displayValues.appendChild(li);

  // Delete button
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "Detele";
  li.appendChild(deleteBtn);
  deleteBtn.onclick = () => {
    localStorage.removeItem(obj.select);
    displayValues.removeChild(li);
  };
  const editBtn = document.createElement("input");
  editBtn.type = "button";
  editBtn.value = "Edit";
  li.appendChild(editBtn);
  editBtn.onclick = () => {
    displayValues.removeChild(li);
    localStorage.removeItem(obj.select);
    document.querySelector("#expence").value = obj.amount;
    document.querySelector("#description").value = obj.description;
    document.getElementById("select").value = obj.select;
  };
}
