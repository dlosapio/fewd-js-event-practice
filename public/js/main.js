const button1 = document.querySelector('main div div button')
const button2 = document.getElementsByClassName('button-xl button-success')
const button3 = document.querySelector('button-xl button-warning')
const row = document.querySelector('row')
let red = false;

//First behavior

button1.addEventListener('click', firstBehavior, false)

function firstBehavior() {
		// console.log('hello');
	if (!red) {
		changeRed() 
	} else {
		changeBlue() 
	}
}

function changeRed() {
	red = true
	row.classList.add('button-danger')
	row.classList.remove('button-xl')
}

function changeBlue() {
	red = false
	row.classList.remove('button-xl')
	row.classList.add('button-danger')
}


//Second behavior

button2.addEventListener('click', secondBehavior, false)

function secondBehavior() {
	console.log('hi');
}


//Third behavior

button3.addEventListener('click', thirdBehavior, false)

function thirdBehavior() {
	document.getElementsByClassName('button-xl button-success').innerHTML = "You Clicked Me";
}