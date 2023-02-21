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

// let headTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
// const addItem = document.getElementsByClassName("title");
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
// let submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";
// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// // secondItem.style.backgroundColor = "green";
// const thridItem = document.querySelector(".list-group-item:nth-child(3");
// // thridItem.style.opacity = "0";

// // QuerySelectorAll
// let font1 = document.querySelectorAll(".list-group-item");
// font1[1].style.color = "green";
// let odd = document.querySelectorAll("li:nth-child(odd");
// for (const el of odd) {
//   el.style.backgroundColor = "green";
// }

// //Traversing The DOM
// let itemList = document.querySelector("#items");
// // ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// // LastelementChild
// console.log(itemList.lastElementChild.innerText);
// //Last Child
// console.log(itemList.lastChild);
// //FirstElementChild
// console.log(itemList.firstElementChild);
// //FirstChild
// console.log(itemList.firstChild);
// //nextSibling
// console.log(itemList.nextSibling);
// //NextElementSibling
// console.log(itemList.nextElementSibling);
// //PerviousSibling
// console.log(itemList.previousSibling);
// //PerviousElementSibling
// console.log(itemList.previousElementSibling);

// CreateElement
// let newDiv = document.createElement("div");
// newDiv.className = "Hello";
// newDiv.id = "hello1";
// console.log(newDiv);
// //SetAttribute
// newDiv.setAttribute("title", "HELLo");

// //CreatTextNode
// let newDivText = document.createTextNode("HELLo");
// // Add Text To Div (AppendChild)
// newDiv.appendChild(newDivText);

// //Insert newDiv in HTML
// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h2");
// container.insertBefore(newDiv, h1);

// let newDiv1 = document.createElement("div");
// newDiv1.className = "Hello";
// newDiv1.id = "hello1";
// console.log(newDiv1);
// //SetAttribute
// newDiv1.setAttribute("title", "HELLo");

// //CreatTextNode
// let newDiv1Text = document.createTextNode("HEllo");
// // Add Text To Div (AppendChild)
// newDiv1.appendChild(newDiv1Text);
// let divId = document.querySelector("div #main");
// let h2 = document.querySelector("div h2");
// console.log(h2);
// divId.insertBefore(newDiv1, h2);

let addForm = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

//Form Submit Event
addForm.addEventListener("submit", additem);
// Delete Event
itemList.addEventListener("click", removeItem);
// Filter Elements
filter.addEventListener("keyup", filterItems);
//
function additem(e) {
  e.preventDefault();

  //Get Input Value
  let newItem = document.getElementById("item").value;
  let newItem1 = document.getElementById("description").value;

  //Creat new Li Element
  let li = document.createElement("li");

  //Adding a classto it
  li.className = "list-group-item";
  console.log(li);
  //Adding a The Text
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" " + newItem1));

  //Delete Button
  let button = document.createElement("button");

  //Adding Classes
  button.className = "btn btn-danger btn-sm float-right delete";

  //Appending Text Node
  button.appendChild(document.createTextNode("X"));
  //Appending button to li
  li.appendChild(button);

  //Creating A New Edit Button
  let editButton = document.createElement("button");
  //Adding The Classes to it
  editButton.classList = "btn btn-sm float-right";
  //Adding the Text Content
  editButton.appendChild(document.createTextNode("Edit"));
  //Appending to List
  li.appendChild(editButton);

  itemList.appendChild(li);
}

//Remove Item

function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure..?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filter Items
function filterItems(e) {
  //conver text to lowercase
  let text = e.target.value.toLowerCase();
  // Getting All LI Elements
  let items = itemList.querySelectorAll("li");
  items.forEach((item, i) => {
    const itemName = item.firstChild.textContent;
    const description = item.childNodes[1].textContent;
    if (
      itemName.toLowerCase().indexOf(text) != -1 ||
      description.toLowerCase().indexOf(text) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
