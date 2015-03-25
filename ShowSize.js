ShowSize();

window.addEventListener('resize', ShowSize);

function ShowSize(){

	var x=document.documentElement.clientWidth;
	document.getElementById('number').innerHTML =x;
}
