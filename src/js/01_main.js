const body = document.body;
const nav = document.querySelector('[data-element="nav"]');
const buttonNewsMore = document.querySelector('.slider__more-news');
const initialNavPosition = nav.offsetTop;

const updateNavClasses = () => {
	const scrollPosition = window.scrollY;
	if (scrollPosition > initialNavPosition) {
		body.classList.add('is-scroll');
	} else {
		body.classList.remove('is-scroll');
	}
}

updateNavClasses();

// прокрутка статьи
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		let destination = document.querySelector(this.getAttribute('href'));
		const header = document.querySelector('[data-element="header"]');
		if (destination) {
			let headerHeight = (header.offsetHeight + 30);
			let topOfDestination = destination.getBoundingClientRect().top + window.scrollY - headerHeight;
			window.scrollTo({ top: topOfDestination, behavior: "smooth" });
		}
	});
});

window.addEventListener('scroll', updateNavClasses);

document.addEventListener("DOMContentLoaded", function () {
	// Функция создания карты
	function createMap(xID, coords) {
		const mapContainer = document.getElementById(xID);
		if (mapContainer) {
			ymaps.ready(function () {
				const myMap = new ymaps.Map(xID, {
					center: coords,
					zoom: 17,
					controls: []
				});

				const myPlacemark = new ymaps.Placemark(coords,
					{
						hintContent: 'Симферополь. ул. Тургенева 20',
						balloonContent: 'Симферополь. ул. Тургенева 20'
					},
					{
						iconLayout: 'default#image',
						iconImageHref: 'img/pin.svg',
						iconImageSize: [59, 84],
						iconImageOffset: [-30, -100]
					}
				);

				myMap.geoObjects.add(myPlacemark);
				myMap.behaviors.disable('scrollZoom');
			});
		} else {
			console.error("Элемент с ID", xID, "не найден.");
		}
	}

	// Вызов функции создания карты
	createMap('map', [44.953162, 34.114215]);
});

[].forEach.call( document.querySelectorAll('.form__input--tel'), function(input) {
	var keyCode;
	function mask(event) {
		event.keyCode && (keyCode = event.keyCode);
		var pos = this.selectionStart;
		if (pos < 3) event.preventDefault();
		var matrix = "+7 (___) ___ __ __",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, ""),
			new_value = matrix.replace(/[_\d]/g, function(a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a
			});
		i = new_value.indexOf("_");
		if (i != -1) {
			i < 5 && (i = 3);
			new_value = new_value.slice(0, i)
		}
		var reg = matrix.substr(0, this.value.length).replace(/_+/g,
			function(a) {
				return "\\d{1," + a.length + "}"
			}).replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
		if (event.type == "blur" && this.value.length < 5) this.value = ""
	}
	input.addEventListener("input", mask, false);
	input.addEventListener("focus", mask, false);
	input.addEventListener("blur", mask, false);
	input.addEventListener("keydown", mask, false)
});

// слайдеры и контролы
$(document).ready(function() {
	var $slider = $('.slider-certificats');

	// Инициализация слайдера без элементов управления
	$slider.slick({
		arrows: false,           // Отключаем стрелки
		dots: false,             // Отключаем точки
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		initialSlide: 0,         // Начальный слайд
		speed: 300,
		centerMode: true,        // Включаем центрирование для отступов
		variableWidth: false,    // Выравнивание слайдов по ширине
		focusOnSelect: false,    // Отключение фокусировки при выборе
		slidesToShow: 4,         // Показывать 4 слайда на десктопе
		responsive: [
			{                       // Настройки для планшетов
				breakpoint: 1024,
				settings: {
					slidesToShow: 3     // Показывать 3 слайда на планшетах
				}
			},
			{                       // Настройки для мобильных устройств
				breakpoint: 796,
				settings: {
					slidesToShow: 1     // Показывать 1 слайд на телефонах
				}
			}
		]
	});

	// Обработчик нажатия на кнопку prev
	$('.slider__controls-certificats-button--prew').on('click', function() {
		$slider.slick('slickPrev');  // Переход к предыдущему слайду
	});

	// Обработчик нажатия на кнопку next
	$('.slider__controls-certificats-button--next').on('click', function() {
		$slider.slick('slickNext');  // Переход к следующему слайду
	});
});

$(document).ready(function() {
	var $slider = $('.slider-blog');

	// Инициализация слайдера без элементов управления
	$slider.slick({
		arrows: false,           // Отключаем стрелки
		dots: false,             // Отключаем точки
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		initialSlide: 0,         // Начальный слайд
		speed: 300,
		centerMode: true,        // Включаем центрирование для отступов
		variableWidth: false,    // Выравнивание слайдов по ширине
		focusOnSelect: false,    // Отключение фокусировки при выборе
		slidesToShow: 4,         // Показывать 4 слайда на десктопе
		responsive: [
			{                       // Настройки для планшетов
				breakpoint: 1024,
				settings: {
					slidesToShow: 3     // Показывать 3 слайда на планшетах
				}
			},
			{                       // Настройки для мобильных устройств
				breakpoint: 796,
				settings: {
					slidesToShow: 1     // Показывать 1 слайд на телефонах
				}
			}
		]
	});

	// Обработчик нажатия на кнопку prev
	$('.slider__controls-blog-button--prew').on('click', function() {
		$slider.slick('slickPrev');  // Переход к предыдущему слайду
	});

	// Обработчик нажатия на кнопку next
	$('.slider__controls-blog-button--next').on('click', function() {
		$slider.slick('slickNext');  // Переход к следующему слайду
	});
});

$(document).ready(function() {
	var $slider = $('.slider-reviews');

	// Инициализация слайдера без элементов управления
	$slider.slick({
		arrows: false,           // Отключаем стрелки
		dots: false,             // Отключаем точки
		infinite: true,
		// autoplay: true,
		accessibility: true, // убедитесь, что доступность включена
		autoplaySpeed: 3000,
		initialSlide: 0,         // Начальный слайд
		speed: 300,
		centerMode: true,        // Включаем центрирование для отступов
		variableWidth: false,    // Выравнивание слайдов по ширине
		focusOnSelect: false,    // Отключение фокусировки при выборе
		slidesToShow: 4,         // Показывать 4 слайда на десктопе
		responsive: [
			{                       // Настройки для планшетов
				breakpoint: 1024,
				settings: {
					slidesToShow: 3     // Показывать 3 слайда на планшетах
				}
			},
			{                       // Настройки для мобильных устройств
				breakpoint: 796,
				settings: {
					slidesToShow: 1     // Показывать 1 слайд на телефонах
				}
			}
		]
	});

	// Обработчик нажатия на кнопку prev
	$('.slider__controls-rev-button--prew').on('click', function() {
		$slider.slick('slickPrev');  // Переход к предыдущему слайду
	});

	// Обработчик нажатия на кнопку next
	$('.slider__controls-rev-button--next').on('click', function() {
		$slider.slick('slickNext');  // Переход к следующему слайду
	});
});

// $(document).ready(function() {
// 	var $slider = $('.slider-news');

// 	// Инициализация слайдера без элементов управления
// 	$slider.slick({
// 		dots: false,
// 		infinite: true,
// 		speed: 300,
// 		arrows: false,           // Отключаем стрелки
// 	});

// 	// Обработчик нажатия на кнопку prev
// 	$('.slider__controls-news-button--prew').on('click', function() {
// 		$slider.slick('slickPrev');  // Переход к предыдущему слайду
// 	});

// 	// Обработчик нажатия на кнопку next
// 	$('.slider__controls-news-button--next').on('click', function() {
// 		$slider.slick('slickNext');  // Переход к следующему слайду
// 	});
// });

$(document).ready(function() {
	var $slider = $('.slider-news');

	function initializeSlider() {
		$slider.slick({
			dots: false,
			infinite: true,
			speed: 300,
			arrows: false,
		});
	}

	initializeSlider();

	$('.slider__controls-news-button--prew').on('click', function() {
		$slider.slick('slickPrev');
	});

	$('.slider__controls-news-button--next').on('click', function() {
		$slider.slick('slickNext');
	});

	var isSliderActive = true;

	$('.slider__more-news').on('click', function(e) {
		e.preventDefault();

		if (isSliderActive) {
			$slider.slick('unslick');

			$('.slider-news').css({
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				// gap: '30px'             // Устанавливаем gap здесь для flex
			});

			$('.slider__controls-news').hide(); // Скрываем контролы
			$(this).text('СКРЫТЬ');
		} else {
			initializeSlider();
			$('.slider-news').css({ display: 'block', gap: '0' }); // Сбрасываем gap
			$('.slider__controls-news').show(); // Показываем контролы
			$(this).text('Смотреть все статьи');
		}

		isSliderActive = !isSliderActive;
	});
});

$('.slider-reviews').on('click', '.review__more', function(e) {
	e.preventDefault();

	// Находим родительский элемент <p> для этой кнопки
	const reviewText = $(this).closest('.review__controls').prev();

	// Переключаем класс .review__text--cutted
	reviewText.toggleClass('review__text--cutted');

	// Изменяем текст кнопки
	if (reviewText.hasClass('review__text--cutted')) {
		$(this).text('Читать полностью');
	} else {
		$(this).text('Скрыть');
	}
});