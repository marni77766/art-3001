function myFunction3() {
	var body = document.getElementsByTagName("BODY")[0];
	body.classList.toggle("night");
	var html = document.getElementsByTagName("HTML")[0];
	html.classList.toggle("night");
	var sun = document.getElementById("sun");
	sun.classList.toggle("gone");
	var moon = document.getElementById("moon");
	moon.classList.toggle("gone");
	var element = document.getElementById("toggle-btn");
	element.classList.toggle("right");
	var elem = document.getElementById("toggle");
	elem.classList.toggle("right");
}
