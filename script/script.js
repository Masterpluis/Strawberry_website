function toggleSubMenu(subject) {
	document.getElementById('submenu-' + subject).classList.toggle('visible-submenu')
}

let body = document.getElementsByTagName("body")[0];
let images = document.getElementsByClassName("img-for-popup");
let modal = document.getElementById("modal");
let modalContent = document.getElementById("modal-content");

for (var i = 0; i < images.length; i++) {
	images[i].onclick = modalPopup(i);
	modal.onclick = modalPopup(i);
}

function modalPopup(i) {
	return function() {
		modalContent.setAttribute("src", "media/strawberry_desserts" + (i + 1) + "_big.jpg");
		modalContent.setAttribute("alt", "strawberry dessert " + (i + 1));
		modal.classList.toggle("visible-modal");
		body.classList.toggle("no-scroll");
	}
}