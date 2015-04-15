ShowSize();

window.addEventListener('resize', ShowSize);
window.addEventListener('resize', ShowSizeBlock);
window.addEventListener('resize', ShowSizeContainer);

function ShowSize(){
	var x=document.documentElement.clientWidth;
	document.getElementById('number').innerHTML =x;
}

//Слушаем не кликнул ли кто на треугольники слева или справа - чтобы скрыть размер экрана
var elem = document.getElementsByClassName("treyg");
	for (var i=0;i<elem.length;i++){
		elem[i].addEventListener("click", myFunction1);
}

function myFunction1() {
    document.getElementById("adjustment").style.display = "none";
    document.getElementById("SS").style.display = "inline-block";
}

//Слушаем не кликнул ли кто на блок с надписью SS - чтобы показать размер экрана
document.getElementById("SS").addEventListener("click", myFunction2);

function myFunction2() {
    document.getElementById("adjustment").style.display = "block";
    document.getElementById("SS").style.display = "none";
}


// пишем размер блока в каждый блок
var elem2 = document.getElementsByClassName("block");
function ShowSizeBlock () {
	for (var i=0;i<elem2.length;i++){
		var Bx = document.getElementsByClassName("block")[i].offsetWidth;
		document.getElementsByClassName("block")[i].innerHTML =Bx;
	}
}

//пишем размер контейнера
function ShowSizeContainer () {
	//для фиксированных контейнеров
	var elem3 = document.getElementsByClassName("container");
	var containerWidth = document.getElementsByClassName("container")[0].offsetWidth;
	for (var i=0;i<elem3.length;i++){
			var Bx = document.getElementsByClassName("container")[i].offsetWidth;
			document.getElementsByClassName("container")[i].getElementsByTagName("span")[0].innerHTML =containerWidth + ' px';
		}
	//для резиновых контейнеров
		var elem4 = document.getElementsByClassName("container-fluid");
	var containerWidth = document.getElementsByClassName("container-fluid")[0].offsetWidth;
	for (var i=0;i<elem4.length;i++){
			var Bx = document.getElementsByClassName("container-fluid")[i].offsetWidth;
			document.getElementsByClassName("container-fluid")[i].getElementsByTagName("span")[0].innerHTML =containerWidth+ ' px';
		}
	
}
