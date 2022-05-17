$(document).ready(function () {
	const mMenuBtn = $(".m-menu-button");
	const mMenu = $(".m-menu");

	const openMenu = () => {
		mMenu.toggleClass("activeMenu");
		$("body").toggleClass("no-scroll");
	};

	mMenuBtn.on("click", openMenu);

	$(function () {
		$(".m-menu-button").click(function () {
			$(this).toggleClass("open");
		});
	});
});
