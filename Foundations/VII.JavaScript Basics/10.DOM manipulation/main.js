/* NOTE: Elements created in the HTML file will be displayed before elements
 *   created in the .js file */

// There are 2 ways to adding elements to the page

// 1. Select the element to which we are going to add the element to
const body = document.body;

// Method 1 : append() allows you to append anything
// body.append("Hello world ", " How are you today?");

// Method 2 : appendChild() allows you to append only elements (i.e. H1, div, p)
const div1 = document.createElement('div');
div1.textContent = 'Hey I\'m a div!';
body.append(div1);

const div2 = document.createElement('div');
div2.textContent = 'Hey I\'m a div 2!';
body.append(div2);

const div3 = document.createElement('div');
div3.innerHTML = '<strong>Hey I\'m a div-3 and I\'m bold!</strong>';
body.append(div3);

// Grab elements from .html file
const div4 = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanHey = document.querySelector('#hey');

// Remove element from html
// spanHi.remove();
spanHi.setAttribute('title', 'Wtf');
spanHey.removeAttribute('id');

console.log(spanHi.dataset);

// Work with class
spanHey.classList.toggle('className', false);

/* Odin's Exercise =========================================================== */

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = 'Hey I\'m red';
body.append(p);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'Hey I\'m blue h3!';
p.append(h3);

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div ^^';

const p2 = document.createElement('p');
p2.textContent = 'Me Too ^^';

const div = document.createElement('div');
div.style.border = '3px solid black';
div.append(h1);
div.append(p2);

body.append(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', e => {
	e.target.style.background = 'orange';
	alert('You just clicked me');
});

const buttons = document.querySelectorAll('button');
for (const button of buttons) {
	button.addEventListener('click', () => {
		console.log(button.id);
	});
}
