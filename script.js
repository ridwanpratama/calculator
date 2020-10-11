let button = document.querySelector(".containerButton");
let screen = document.querySelector("#screen");

button.addEventListener("click", function(event){
	//alert('its work!')

	let buttonClick = event.target;
	let buttonValue = buttonClick.innerText;

  if (buttonValue.length>=20){
    screen.Value=""
  }

	if (buttonValue === "C"){
		screen.value = ""
	}
	else if (buttonValue === "del"){
		screen.value = screen.value.slice(0,-1)
	}
	else if (buttonValue === "="){
		screen.value = eval(screen.value)
	}
	else {
		screen.value = screen.value + buttonValue;
	}
});