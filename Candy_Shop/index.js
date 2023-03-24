"use strict";

async function candyQuantity(event) {
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
  try {
    let res = await axios.post(
      "https://crudcrud.com/api/12c9dde8541e4dd19e95e73992ad1836/CandySales",
      obj
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  axios
    .get("https://crudcrud.com/api/12c9dde8541e4dd19e95e73992ad1836/CandySales")
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        showUserOnScreen(res.data[i]);
      }
    })
    .catch((err) => {
      showUserOnScreen(err);
    });
});

async function showUserOnScreen(obj) {
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
  btn1.onclick = async () => {
    try {
      const btn1Axios = await axios.put(
        `https://crudcrud.com/api/12c9dde8541e4dd19e95e73992ad1836/CandySales/${obj._id}`,
        {
          candy: `${obj.candy}`,
          description: `${obj.description}`,
          price: `${obj.price}`,
          quantity: `${obj.quantity - 1}`,
        }
      );

      const btngetData = await axios
        .get(
          `https://crudcrud.com/api/12c9dde8541e4dd19e95e73992ad1836/CandySales/${obj._id}`
        )
        .then((res) => {
          showUserOnScreen(res.data);
          console.log(obj);
        });
      parentEl.removeChild(childEl);
    } catch (err) {
      console.log(err);
      console.log(obj);
    }
  };
  btn2.onclick = async () => {
    try {
      const btn2axios = axios.put(
        `https://crudcrud.com/api/12c9dde8541e4dd19e95e73992ad1836/CandySales/${obj._id}`,
        {
          candy: `${obj.candy}`,
          description: `${obj.description}`,
          price: `${obj.price}`,
          quantity: `${obj.quantity - 2}`,
        }
      );
      const btnGetData2 = await axios
        .get(
          `https://crudcrud.com/api/12c9dde8541e4dd19e95e73992ad1836/CandySales/${obj._id}`
        )
        .then((res) => {
          showUserOnScreen(res.data);
        });
      parentEl.removeChild(childEl);
    } catch (err) {
      console.log(err);
    }
  };
  btn3.onclick = async () => {
    try {
      const btnAxios3 = axios.put(
        `https://crudcrud.com/api/12c9dde8541e4dd19e95e73992ad1836/CandySales/${obj._id}`,
        {
          candy: `${obj.candy}`,
          description: `${obj.description}`,
          price: `${obj.price}`,
          quantity: `${obj.quantity - 3}`,
        }
      );
      const btnGetData3 = await axios
        .get(
          `https://crudcrud.com/api/12c9dde8541e4dd19e95e73992ad1836/CandySales/${obj._id}`
        )
        .then((res) => {
          showUserOnScreen(res.data);
        });
      parentEl.removeChild(childEl);
    } catch (err) {
      console.log(err);
    }
  };
}
