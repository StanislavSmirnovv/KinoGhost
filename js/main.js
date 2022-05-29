$(document).ready(function () {
	const mMenuBtn = $(".m-menu-button");
	const mMenu = $(".m-menu");
	const tab = $(".tab");

	const openMenu = () => {
		mMenu.toggleClass("activeMenu");
		$("body").toggleClass("no-scroll");
	};

	mMenuBtn.on("click", openMenu);

	tab.on("click", function () {
		tab.removeClass("active");
		$(this).toggleClass("active");
		$(this).attr("data - target");
		let activeTabContent = $(this).attr("data-target");
		$(".tabs-content").removeClass("visible");
		$(activeTabContent).toggleClass("visible");
	});

	$(function () {
		$(".m-menu-button").click(function () {
			$(this).toggleClass("open");
		});
	});
	const swiper = new Swiper(".swiper", {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 25,
		breakpoints: {
			992: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
				slidersOffsetAfter: 50,
				navigation: {
					nextEl: ".button-next",
				},
			},
		},
	});
});
