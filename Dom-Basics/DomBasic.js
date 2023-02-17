`use strict`;
// //Examine the document object
// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);

let headTitle = document.getElementById("header-title");
let header = document.getElementById("main-header");
const addItem = document.getElementsByClassName("title");
//textContent will show the exact the content of that tag it wont care about the styleings
// console.log(headTitle.innerText);
// But this innerText will consider the styling and show the content
// headTitle.innerText = "You are Alone";
// headTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "solid 3px black";
// addItem[0].style.fontWeight = "bold";
// addItem[0].style.color = "green";
// const listItems = document.getElementsByClassName("list-group-item");
// listItems[2].style.backgroundColor = "green";

// for (const el of listItems) {
//   el.style.fontWeight = "bold";
//   // }
// }

//GetElement By tagName

// const li = document.getElementsByTagName("li");
// console.log(li);
// li[2].style.backgroundColor = "green";

// for (const el of li) {
//   el.style.fontWeight = "bold";
//   // }
// }

//Get Element BY QuerySelector
let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";
let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor = "green";
const thridItem = document.querySelector(".list-group-item:nth-child(3");
// thridItem.style.opacity = "0";

// QuerySelectorAll
let font1 = document.querySelectorAll(".list-group-item");
font1[1].style.color = "green";
let odd = document.querySelectorAll("li:nth-child(odd");
for (const el of odd) {
  el.style.backgroundColor = "green";
}
