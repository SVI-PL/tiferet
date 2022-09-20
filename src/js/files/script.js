// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// ^^^ - видео на главной странице ----

window.addEventListener("load", function (e) {
	//  работа с видео
	// if (document.querySelector(".video-module")) {
	// 	document.addEventListener("watcherCallback", function (e) {
	// 		const entry = e.detail.entry;
	// 		const targetElement = entry.target;
	// 		if (targetElement.dataset.watch === "video" && !targetElement.classList.contains("_init")) {
	// 			if (entry.isIntersecting) {
	// 				// Видим объект
	// 				targetElement.querySelector("video").play();
	// 			} else {
	// 				// Не видим объект
	// 				targetElement.querySelector("video").pause();
	// 			}
	// 		}
	// 	});
	// 	const videoModule = document.querySelector(".video-module");
	// 	videoModule.addEventListener("click", function (e) {
	// 		if (!videoModule.classList.contains("_init")) {
	// 			videoModule.querySelector("video").src = videoModule.querySelector("video").dataset.full;
	// 			videoModule.classList.add("_active");
	// 			videoModule.classList.add("_init");
	// 			videoModule.querySelector("video").play();
	// 			videoModule.querySelector("video").muted = false;
	// 		} else {
	// 			if (videoModule.querySelector("video").paused) {
	// 				videoModule.querySelector("video").play();
	// 			} else {
	// 				videoModule.querySelector("video").pause();
	// 			}
	// 			videoModule.classList.toggle("_active");
	// 		}
	// 	});
	// }
	// ===============================================================
	// ===============================================================
	// ===============================================================
	// animation
	const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
					console.log('hello animation');
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active');
					}
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}

		setTimeout(() => {
			animOnScroll();
		}, 300);
	}
	// ===================================================
	// ===================================================
	// ===================================================
	// ===================================================
	(function () {
		$(document).ready(function () {
			$("#roundslider").roundSlider({
				sliderType: "min-range",
				value: 80,
				width: 3,
				radius: 257,
				max: "10000",
				handleSize: "+70",
				startAngle: 90,
				tooltipFormat: "tooltipVal2",
				svgMode: true
			});
			function tooltipVal2(args) {
				return "$ " + args.value;
			}
		});

	}).call(this); 

});

