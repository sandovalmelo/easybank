// menu
const menu = document.getElementById("menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
	menu.setAttribute("data-open", "true");
});

closeMenu.addEventListener("click", () => {
	menu.setAttribute("data-open", "false");
});
