const body = document.body;
// Получаем элемент навигации
const nav = document.querySelector('[data-element="nav"]');

// Определяем начальную позицию навигации
const initialNavPosition = nav.offsetTop;

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
	$('.slider__controls-rev-button--prew').on('click', function() {
		$slider.slick('slickPrev');  // Переход к предыдущему слайду
	});

	// Обработчик нажатия на кнопку next
	$('.slider__controls-rev-button--next').on('click', function() {
		$slider.slick('slickNext');  // Переход к следующему слайду
	});
});

// Функция для изменения классов
const updateNavClasses = () => {
	const scrollPosition = window.scrollY;

	// Если навигация скрылась из вида
	if (scrollPosition > initialNavPosition) {
		body.classList.add('is-scroll');
	} else {
		body.classList.remove('is-scroll');
	}
}

const buttons = document.querySelectorAll('.review__more');

buttons.forEach(button => {
	button.addEventListener('click', function() {
	  // Находим родительский элемент <p> для этой кнопки
	  const reviewText = button.closest('.review__controls').previousElementSibling;

	  // Удаляем класс .review__text--cutted
	  reviewText.classList.toggle('review__text--cutted');
	  
	  // Изменяем текст кнопки (по желанию)
	  if (reviewText.classList.contains('review__text--cutted')) {
		button.textContent = 'Читать полностью';
	  } else {
		button.textContent = 'Скрыть';
	  }
	});
  });

updateNavClasses();
// Навешиваем обработчик события прокрутки
window.addEventListener('scroll', updateNavClasses);