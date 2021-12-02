// There are 2 ways to adding elements to the page

// 1. Select the element to which we are going to add the element to
const body = document.body;

// Method 1 : append() allows you to append anything
body.append("Hello world ", " How are you today?");

// Method 2 : appendChild() allows you to append only elements (i.e. H1, div, p)
const div1 = document.createElement("div");
div1.innerText = "Hey I'm a div !";
body.append(div1);

const div2 = document.createElement("div");
div2.innerText = "Hey I'm a div2 !";
body.appendChild(div2);
