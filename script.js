//1) Select the section with an id of a container wihtout using querySelector.

//const selectedContainer =document.getElementById("container");
//console.log(selectedContainer);

//2) Select the section with an id of container using querySelector.

//const selectedContainer = document.querySelector("#container");
//console.log(selectedContainer);

//3) Select all of the list items with a class of "second".

//const secondItems = document.querySelectorAll(".second");
//console.log(secondItems);

//4) Select a list item with a class of third, but only the list item inside of the ol tag.

//const olThird = document.querySelector("ol > .third");
//console.log(ol);

//5) Give the section with an id of container the text "Hello!".

//document.querySelector("#container").innerHTML = "Hello!";

//6) Add the class main to the div with a class of footer.

/*
const footer = document.querySelector(".footer");
footer.classList = footer.classList += " main";     //add main to class list
console.log(footer);
*/

//7) Remove the class main on the div with a class of footer.

/*
footer.classList = "footer";
console.log(footer);
*/

//8) Create a new li element.

//const newLi = document.createElement("li");

//9) Give the li the text "four".

//newLi.innerHTML = "four";

//10) Append the li to the ul element.

/*
//select ul list
const ulElement = document.querySelector("ul");
//add a child
ulElement.appendChild(newLi);
console.log(ulElement);
*/

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".

/*
//select list 
const olList = document.querySelector("ol")
//select children from ol list
const olListItems = olList.children;
//create an array from object
const olListItemsArray = Array.from(olListItems)
//for each loop to make each list item green
olListItemsArray.forEach((element) => {
    // Get a random number from 0 - 3
    element.style.color = "green";
})
*/

//13) Remove the div with a class of footer.

/*
//selects footer
const footer = document.querySelector(".footer")
//remove footer through parent
footer.parentElement.removeChild(footer);
//proof
console.log(document.querySelector("body"));
*/