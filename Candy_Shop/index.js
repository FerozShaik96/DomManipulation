"use strict";
function candyQuantity(event) {
  event.preventDefault();
  const candy = event.target.CandyName.value;
  const description = event.target.description.value;
  const price = event.target.Price.value;
  let quantity = event.target.Quantity.value;
  let obj = {
    candy,
    description,
    price,
    quantity,
  };
  showUserOnScreen(obj);
  axios
    .post(
      "https://crudcrud.com/api/b2d7dcf135f94595bd68c08086006d5e/CandySales",
      obj
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/b2d7dcf135f94595bd68c08086006d5e/CandySales")
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        showUserOnScreen(res.data[i]);
      }
    })
    .catch((err) => {
      showUserOnScreen(err);
    });
});

function showUserOnScreen(obj) {
  const parentEl = document.querySelector("#formElements");
  const childEl = document.createElement("li");
  childEl.textContent = `${obj.candy} - ${obj.description} - ${obj.price} - ${obj.quantity}`;
  childEl.classList = "candy-Details";
  parentEl.appendChild(childEl);
  const btn1 = document.createElement("input");
  btn1.type = "button";
  btn1.value = "Buy1";
  btn1.classList = "btn btn-dark";
  childEl.appendChild(btn1);
  const btn2 = document.createElement("input");
  btn2.type = "button";
  btn2.value = "Buy2";
  btn2.classList = "btn btn-dark";
  childEl.appendChild(btn2);
  const btn3 = document.createElement("input");
  btn3.type = "button";
  btn3.value = "Buy3";
  btn3.classList = "btn btn-dark";
  childEl.appendChild(btn3);

  // Button Click
  btn1.onclick = () => {
    console.log(obj.candy);
    axios
      .delete(
        `https://crudcrud.com/api/b2d7dcf135f94595bd68c08086006d5e/CandySales/${obj._id}`
      )
      .then(() => {
        parentEl.removeChild(childEl);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(
        "https://crudcrud.com/api/b2d7dcf135f94595bd68c08086006d5e/CandySales",
        {
          candy: `${obj.candy}`,
          description: `${obj.description}`,
          price: `${obj.price}`,
          quantity: `${obj.quantity - 1}`,
        }
      )
      .then((res) => {
        showUserOnScreen(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  btn2.onclick = () => {
    axios
      .delete(
        `https://crudcrud.com/api/b2d7dcf135f94595bd68c08086006d5e/CandySales/${obj._id}`
      )
      .then((res) => {
        parentEl.removeChild(childEl);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(
        "https://crudcrud.com/api/b2d7dcf135f94595bd68c08086006d5e/CandySales",
        {
          candy: `${obj.candy}`,
          description: `${obj.description}`,
          price: `${obj.price}`,
          quantity: `${obj.quantity - 2}`,
        }
      )
      .then((res) => {
        showUserOnScreen(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  btn3.onclick = () => {
    axios
      .delete(
        `https://crudcrud.com/api/b2d7dcf135f94595bd68c08086006d5e/CandySales/${obj._id}`
      )
      .then((res) => {
        parentEl.removeChild(childEl);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(
        "https://crudcrud.com/api/b2d7dcf135f94595bd68c08086006d5e/CandySales",
        {
          candy: `${obj.candy}`,
          description: `${obj.description}`,
          price: `${obj.price}`,
          quantity: `${obj.quantity - 3}`,
        }
      )
      .then((res) => {
        showUserOnScreen(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
