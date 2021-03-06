//1) Select the section with an id of container without using querySelector.
const container = document.getElementById("container");
//2) Select the section with an id of container using querySelector.
const container1 = document.querySelector("#container");
//3) Select all of the list items with a class of "second".
const items = document.getElementsByClassName("second");
//4) Select a list item with a class of third, but only the list item inside of the ol tag.
const item = document.querySelector("ol .third");
//5) Give the section with an id of container the text "Hello!".
container.innerText = "Hello!";
//6) Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer");
footer.classList.add("main");
//7) Remove the class main on the div with a class of footer.
footer.classList.remove("main");
//8) Create a new li element.
const li = document.createElement('li');
//9) Give the li the text "four".
li.innerText = "four";
//10) Append the li to the ul element.
document.querySelector("ul").appendChild(li);
//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const lis = document.querySelectorAll("ol li");
const arr = Array.from(lis);
arr.forEach((l) => {
    l.style.backgroundColor = "green";
});
//13) Remove the div with a class of footer.
footer.remove();
