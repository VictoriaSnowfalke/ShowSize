ShowSize();

window.addEventListener('resize', ShowSize);

function ShowSize(){

	var x=document.documentElement.clientWidth;
	document.getElementById('number').innerHTML =x;
}
var elem = document.getElementsByClassName("treyg");
for (var i=0;i<elem.length;i++){
	elem[i].addEventListener("click", myFunction1);
}

function myFunction1() {
    document.getElementById("adjustment").style.display = "none";
    document.getElementById("SS").style.display = "inline-block";
}

document.getElementById("SS").addEventListener("click", myFunction2);


function myFunction2() {
    document.getElementById("adjustment").style.display = "block";
    document.getElementById("SS").style.display = "none";
}
