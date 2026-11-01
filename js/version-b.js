/* Eastport — VERSION B interactions
   Vanilla JS, no dependencies. */
(function () {
	'use strict';

	function ready(fn) {
		if (document.readyState !== 'loading') fn();
		else document.addEventListener('DOMContentLoaded', fn);
	}

	ready(function () {
		initHero();
		initNavs();
		initEnquiryForm();
		initPromo();
		initLogin();
		initCourses();
	});

	/* ---------------- Hero slider ---------------- */
	function initHero() {
		var hero = document.querySelector('[data-hero]');
		if (!hero) return;

		var slides = [].slice.call(hero.querySelectorAll('.u-slide'));
		var dots = [].slice.call(hero.querySelectorAll('.u-hero-dots button'));
		if (slides.length < 2) return;

		var index = 0;
		var timer = null;

		function show(next) {
			index = (next + slides.length) % slides.length;
			slides.forEach(function (slide, i) {
				slide.classList.toggle('is-live', i === index);
			});
			dots.forEach(function (dot, i) {
				dot.classList.toggle('is-live', i === index);
				dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
			});
		}

		function play() {
			stop();
			timer = window.setInterval(function () {
				show(index + 1);
			}, 6000);
		}

		function stop() {
			if (timer) window.clearInterval(timer);
			timer = null;
		}

		dots.forEach(function (dot, i) {
			dot.addEventListener('click', function () {
				show(i);
				play();
			});
		});

		var prev = hero.querySelector('.u-hero-arrow.prev');
		var next = hero.querySelector('.u-hero-arrow.next');
		if (prev) prev.addEventListener('click', function () { show(index - 1); play(); });
		if (next) next.addEventListener('click', function () { show(index + 1); play(); });

		hero.addEventListener('mouseenter', stop);
		hero.addEventListener('mouseleave', play);

		show(0);
		play();
	}

	/* ---------------- Mobile navs ---------------- */
	function initNavs() {
		[].slice.call(document.querySelectorAll('[data-nav-toggle]')).forEach(function (btn) {
			var target = document.querySelector(btn.getAttribute('data-nav-toggle'));
			if (!target) return;
			btn.addEventListener('click', function () {
				var open = target.classList.toggle('is-open');
				btn.setAttribute('aria-expanded', open ? 'true' : 'false');
			});
		});
	}

	/* ---------------- Enquiry form: category → programme ---------------- */
	function initEnquiryForm() {
		var form = document.querySelector('[data-enquiry-form]');
		if (!form) return;

		var category = form.querySelector('[data-category]');
		var programme = form.querySelector('[data-programme]');
		var alertBox = form.querySelector('.u-alert');
		var master = [];

		if (programme) {
			master = [].slice.call(programme.querySelectorAll('option[data-level]')).map(function (option) {
				return { value: option.value, level: option.getAttribute('data-level') };
			});
		}

		function fill(level) {
			if (!programme) return;
			programme.innerHTML = '';

			var placeholder = document.createElement('option');
			placeholder.value = '';
			placeholder.textContent = level ? 'Select programme' : 'Choose a category first';
			programme.appendChild(placeholder);

			master.forEach(function (entry) {
				if (level && entry.level !== level) return;
				var option = document.createElement('option');
				option.value = entry.value;
				option.textContent = entry.value;
				programme.appendChild(option);
			});
		}

		if (category && programme) {
			fill('');
			category.addEventListener('change', function () {
				fill(category.value);
			});
		}

		form.addEventListener('submit', function (event) {
			event.preventDefault();
			if (!form.checkValidity()) {
				form.reportValidity();
				return;
			}
			if (alertBox) {
				alertBox.textContent = 'Asante! Your request has reached the Eastport admissions desk — we call or WhatsApp back within one working day.';
				alertBox.classList.add('is-on');
			}
			form.reset();
			fill('');
		});
	}

	/* ---------------- Promo modal ---------------- */
	function initPromo() {
		var modal = document.querySelector('[data-promo]');
		if (!modal) return;

		var KEY = 'ep-intake-promo-2027';
		var dismissed = false;
		try {
			dismissed = window.sessionStorage.getItem(KEY) === 'off';
		} catch (error) {
			dismissed = false;
		}
		if (dismissed) return;

		window.setTimeout(function () {
			modal.classList.add('is-open');
		}, 1400);

		[].slice.call(modal.querySelectorAll('[data-promo-close]')).forEach(function (btn) {
			btn.addEventListener('click', function () {
				modal.classList.remove('is-open');
				try {
					window.sessionStorage.setItem(KEY, 'off');
				} catch (error) { /* ignore */ }
			});
		});

		modal.addEventListener('click', function (event) {
			if (event.target === modal) {
				modal.classList.remove('is-open');
			}
		});

		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape') modal.classList.remove('is-open');
		});
	}

	/* ---------------- Portal login ---------------- */
	function initLogin() {
		var form = document.querySelector('[data-el-login]');
		if (!form) return;

		var notice = form.querySelector('[data-el-alert]');

		[].slice.call(document.querySelectorAll('[data-toggle-pass]')).forEach(function (btn) {
			btn.addEventListener('click', function () {
				var input = document.getElementById(btn.getAttribute('data-toggle-pass'));
				if (!input) return;
				var show = input.type === 'password';
				input.type = show ? 'text' : 'password';
				btn.innerHTML = show ? '<i class="fa fa-eye-slash"></i>' : '<i class="fa fa-eye"></i>';
				btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
			});
		});

		var demo = form.querySelector('[data-fill-demo]');
		if (demo) {
			demo.addEventListener('click', function () {
				var user = form.querySelector('[name="username"]');
				var pass = form.querySelector('[name="password"]');
				if (user) user.value = 'EITC/2026/0148';
				if (pass) pass.value = 'eastport2026';
			});
		}

		form.addEventListener('submit', function (event) {
			event.preventDefault();
			var user = form.querySelector('[name="username"]');
			var pass = form.querySelector('[name="password"]');
			var ok = user && pass && user.value.trim() !== '' && pass.value.trim() !== '';

			if (!ok) {
				if (notice) {
					notice.textContent = 'Missing required field: enter your admission number and password.';
					notice.classList.add('is-on');
				}
				return;
			}

			var button = form.querySelector('.el-submit');
			if (button) {
				button.disabled = true;
				button.textContent = 'Signing you in…';
			}
			window.setTimeout(function () {
				window.location.href = 'dashboard.html';
			}, 550);
		});
	}

	/* ---------------- Course catalogue ---------------- */
	function initCourses() {
		var grid = document.querySelector('[data-course-grid]');
		if (!grid) return;

		var search = document.querySelector('[data-course-search]');
		var form = document.querySelector('[data-course-search-form]');
		var tabs = [].slice.call(document.querySelectorAll('[data-level]'));
		var count = document.querySelector('[data-course-count]');
		var cards = [].slice.call(grid.querySelectorAll('[data-course]'));
		var level = 'all';

		function apply() {
			var term = search ? search.value.trim().toLowerCase() : '';
			var shown = 0;

			cards.forEach(function (card) {
				var text = card.textContent.toLowerCase();
				var matchesTerm = !term || text.indexOf(term) !== -1;
				var matchesLevel = level === 'all' || card.getAttribute('data-course') === level;
				var visible = matchesTerm && matchesLevel;
				card.style.display = visible ? '' : 'none';
				if (visible) shown += 1;
			});

			if (count) count.textContent = shown + (shown === 1 ? ' course' : ' courses');
		}

		if (search) search.addEventListener('input', apply);

		if (form) {
			form.addEventListener('submit', function (event) {
				event.preventDefault();
				apply();
			});
		}

		tabs.forEach(function (tab) {
			tab.addEventListener('click', function () {
				tabs.forEach(function (other) { other.classList.remove('is-active'); });
				tab.classList.add('is-active');
				level = tab.getAttribute('data-level');
				apply();
			});
		});

		apply();
	}
})();
