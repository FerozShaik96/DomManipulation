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
// console.log(headTitle.textContent);
//textContent will show the exact the content of that tag it wont care about the styleings
// console.log(headTitle.innerText);
// But this innerText will consider the styling and show the content
// headTitle.innerText = "You are Alone";
// headTitle.innerHTML = "<h3>Hello</h3>";
header.style.borderBottom = "solid 3px black";
addItem[0].style.fontWeight = "bold";
addItem[0].style.color = "green";
