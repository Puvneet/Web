function init(){
	var h1tags = document.getElementsByTagName("h1");

	h1tags[0].onclick = changeColor;
}

function changeColor(){
	this.innerHTML = "Click again";

}
onload = init;