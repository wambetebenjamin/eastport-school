/* =================================
------------------------------------
  Eastport International Training College
  Front-end behaviour: content rendering, programme search, portal login
 ------------------------------------
 ====================================*/

'use strict';

(function () {
	var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
	var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

	function esc(str) {
		return String(str == null ? '' : str)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	function faculty(slug) {
		for (var i = 0; i < EP.faculties.length; i++) {
			if (EP.faculties[i].slug === slug) return EP.faculties[i];
		}
		return { short: 'Programme', name: 'Programme', slug: slug };
	}

	var FACILITY = {
		health: 'clinical simulation and phlebotomy laboratories',
		ict: 'computer suites and networking sandbox',
		business: 'business enterprise and accounts laboratory',
		professional: 'examination preparation classrooms and revision clinics',
		media: 'radio studio and digital edit suites',
		languages: 'language laboratory',
		technical: 'engineering workshops',
		hospitality: 'commercial kitchen and restaurant simulation',
		beauty: 'student salon',
		office: 'office simulation suite',
		international: 'digital learning suite'
	};

	function programmeBySlug(slug) {
		for (var i = 0; i < EP.programmes.length; i++) {
			if (EP.programmes[i].slug === slug) return EP.programmes[i];
		}
		return null;
	}

	function params() {
		var out = {};
		var query = window.location.search.replace(/^\?/, '');
		if (!query) return out;
		query.split('&').forEach(function (pair) {
			var bits = pair.split('=');
			if (!bits[0]) return;
			out[decodeURIComponent(bits[0])] = decodeURIComponent((bits[1] || '').replace(/\+/g, ' '));
		});
		return out;
	}

	function truncate(text, len) {
		if (!text) return '';
		return text.length > len ? text.slice(0, len).replace(/\s+\S*$/, '') + '…' : text;
	}

	/* -------------------------------------------------
	   Card templates — "Edura" template cards
	---------------------------------------------------*/

	function stars(seed) {
		var n = 4 + (seed % 2);          /* 4 or 5 stars, stable per card */
		var out = '';
		for (var i = 0; i < 5; i++) {
			out += '<i class="fa ' + (i < n ? 'fa-star' : 'fa-star-o') + '"></i>';
		}
		return out;
	}

	function facultyCard(item) {
		return '' +
			'<a class="xg-faculty" href="courses.html?faculty=' + item.slug + '">' +
				'<span class="xg-faculty-thumb" style="background-image:url(' + item.image + ')"></span>' +
				'<span class="xg-faculty-body">' +
					'<h5>' + esc(item.short) + '</h5>' +
					'<p>' + esc(item.blurb) + '</p>' +
					'<span>' + item.count + ' programmes</span>' +
				'</span>' +
			'</a>';
	}

	function programmeCard(p) {
		var fee = esc(p.fee.split(' per ')[0]);
		var duration = esc(p.duration.replace(' (3 terms per year)', '').replace(' per module', ''));
		return '' +
			'<article class="xg-course ep-programme" data-faculty="' + p.faculty + '" data-level="' + esc(p.level.toLowerCase()) + '">' +
				'<a class="xg-course-thumb" href="single-course.html?p=' + p.slug + '" style="background-image:url(' + p.image + ')" aria-label="' + esc(p.title) + '">' +
					'<span class="xg-tag-duration">' + duration + '</span>' +
					'<span class="xg-tag-level">' + esc(p.level) + '</span>' +
				'</a>' +
				'<div class="xg-course-body">' +
					'<div class="xg-rating">' + stars(p.students) + '<span>(' + p.students + ')</span></div>' +
					'<h3><a href="single-course.html?p=' + p.slug + '">' + esc(p.title) + '</a></h3>' +
					'<p>' + esc(truncate(p.summary, 86)) + '</p>' +
					'<div class="xg-course-meta">' +
						'<span><i class="fa fa-user-o"></i>' + p.students + ' enrolled</span>' +
						'<span><i class="fa fa-certificate"></i>' + esc(String(p.body).split(' / ')[0]) + '</span>' +
					'</div>' +
					'<div class="xg-course-foot">' +
						'<span class="xg-price">' + fee + ' <em>/ term</em></span>' +
						'<a class="xg-link-more" href="single-course.html?p=' + p.slug + '">Details <span class="xg-arrow">&rsaquo;</span></a>' +
					'</div>' +
				'</div>' +
			'</article>';
	}

	function newsCard(n) {
		return '' +
			'<article class="xg-post">' +
				'<a class="xg-post-thumb" href="blog.html" style="background-image:url(' + n.image + ')" aria-label="' + esc(n.title) + '"></a>' +
				'<div class="xg-post-body">' +
					'<div class="xg-post-meta">' +
						'<span class="xg-post-cat">' + esc(n.category) + '</span>' +
						'<span><i class="fa fa-calendar-o"></i>' + esc(n.date) + '</span>' +
					'</div>' +
					'<h3><a href="blog.html">' + esc(n.title) + '</a></h3>' +
					'<p>' + esc(truncate(n.excerpt, 128)) + '</p>' +
					'<div class="xg-post-author">' +
						'<span class="xg-person-pic" style="background-image:url(' + n.authorPic + ')"></span>' +
						'<span class="xg-post-author-name"><strong>' + esc(n.author) + '</strong><span>' + esc(n.category) + '</span></span>' +
					'</div>' +
				'</div>' +
			'</article>';
	}

	function testimonialCard(t) {
		return '' +
			'<div class="xg-quote">' +
				'<div class="xg-stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>' +
				'<p>“' + esc(t.quote) + '”</p>' +
				'<div class="xg-person">' +
					'<span class="xg-person-pic" style="background-image:url(' + t.image + ')"></span>' +
					'<span><h6>' + esc(t.name) + '</h6><span>' + esc(t.course) + '</span></span>' +
				'</div>' +
			'</div>';
	}

	function teamCard(m) {
		return '' +
			'<div class="xg-leader">' +
				'<div class="xg-leader-head" style="background-image:url(' + m.image + ')"></div>' +
				'<div class="xg-leader-body">' +
					'<h5>' + esc(m.name) + '</h5>' +
					'<span class="xg-leader-role">' + esc(m.role) + '</span>' +
					'<p>“' + esc(m.quote) + '”</p>' +
				'</div>' +
			'</div>';
	}

	/* -------------------------------------------------
	   Page renderers
	---------------------------------------------------*/

	function renderFaculties(selector, limit) {
		var box = $(selector);
		if (!box) return;
		var list = limit ? EP.faculties.slice(0, limit) : EP.faculties;
		box.innerHTML = list.map(facultyCard).join('');
	}

	function facultyTile(item) {
		return facultyCard(item);
	}

	function renderFacultyTiles(selector) {
		var box = $(selector);
		if (!box) return;
		box.innerHTML = EP.faculties.map(facultyTile).join('');
	}

	function renderProgrammes(selector, list) {
		var box = $(selector);
		if (!box) return;
		var items = list || EP.programmes;
		box.innerHTML = items.length
			? items.map(programmeCard).join('')
			: '<div class="xg-empty"><i class="fa fa-search"></i><p>No programmes match that search yet. Try a different keyword or faculty, or call admissions on ' + EP.contact.phone + '.</p></div>';
	}

	function renderNews(selector, limit) {
		var box = $(selector);
		if (!box) return;
		var list = limit ? EP.news.slice(0, limit) : EP.news;
		box.innerHTML = list.map(function (n) { return newsCard(n); }).join('');
	}

	/* Testimonials and leadership render into auto-fitting grids, so a short
	   list stretches across the row instead of leaving an empty column. */
	function renderTestimonials(selector) {
		var box = $(selector);
		if (!box) return;
		box.innerHTML = EP.testimonials.map(testimonialCard).join('');
	}

	function renderTeam(selector) {
		var box = $(selector);
		if (!box) return;
		box.innerHTML = EP.team.map(teamCard).join('');
	}

	/* -------------------------------------------------
	   Courses page: search + filters
	---------------------------------------------------*/

	function initCoursesPage() {
		var grid = $('#programme-grid');
		if (!grid) return;

		var state = { faculty: 'all', level: 'all', q: '', grade: '' };

		function gradeRank(text) {
			var order = { 'C+': 6, 'C': 5, 'C-': 4, 'D+': 3, 'D': 2, 'D-': 1 };
			if (!text || /open/i.test(text)) return 0;
			var match = String(text).match(/(?:^|[^A-Za-z])(C\+|C-|D\+|D-|C|D)(?![A-Za-z])/);
			return match ? (order[match[1]] || 0) : 0;
		}
		var chips = $$('.xg-chip[data-faculty]');
		var levelChips = $$('.xg-chip[data-level]');
		var note = $('#results-note');

		var initial = params();
		if (initial.faculty) state.faculty = initial.faculty;
		if (initial.level) state.level = initial.level;
		if (initial.q) state.q = initial.q;
		if (initial.grade) state.grade = initial.grade;

		var searchForm = $('#course-search-form');
		if (searchForm && state.q) {
			var input = searchForm.querySelector('input[name="q"]');
			if (input) input.value = state.q;
		}

		function apply() {
			var q = state.q.toLowerCase().trim();
			var list = EP.programmes.filter(function (p) {
				var facOk = state.faculty === 'all' || p.faculty === state.faculty;
				var lvlOk = state.level === 'all' || p.level.toLowerCase() === state.level;
				var haystack = (p.title + ' ' + p.summary + ' ' + p.level + ' ' + faculty(p.faculty).name + ' ' + p.body).toLowerCase();
				var qOk = !q || haystack.indexOf(q) > -1;
				var gradeOk = !state.grade || gradeRank(p.grade) <= gradeRank(state.grade);
				return facOk && lvlOk && qOk && gradeOk;
			});

			renderProgrammes('#programme-grid', list);

			chips.forEach(function (chip) {
				chip.classList.toggle('is-active', chip.getAttribute('data-faculty') === state.faculty);
			});
			levelChips.forEach(function (chip) {
				chip.classList.toggle('is-active', chip.getAttribute('data-level') === state.level);
			});

			if (note) {
				note.innerHTML = '<strong>' + list.length + '</strong> programme' + (list.length === 1 ? '' : 's') + ' found' +
					(state.faculty !== 'all' ? ' in ' + esc(faculty(state.faculty).short) : '') +
					(state.q ? ' for “' + esc(state.q) + '”' : '') +
					(state.grade ? ' open to grade ' + esc(state.grade) + ' and below' : '');
			}
		}

		chips.forEach(function (chip) {
			chip.addEventListener('click', function () {
				state.faculty = chip.getAttribute('data-faculty');
				apply();
			});
		});

		levelChips.forEach(function (chip) {
			chip.addEventListener('click', function () {
				state.level = chip.getAttribute('data-level');
				apply();
			});
		});

		if (searchForm) {
			searchForm.addEventListener('submit', function (e) {
				e.preventDefault();
				var input = searchForm.querySelector('input[name="q"]');
				var select = searchForm.querySelector('select[name="faculty"]');
				state.q = input ? input.value : '';
				if (select && select.value) state.faculty = select.value;
				apply();
				var target = document.getElementById('programmes');
				if (target) window.scrollTo({ top: target.offsetTop - 40, behavior: 'smooth' });
			});
		}

		apply();
	}

	function initFinder() {
		var form = $('#finder-form');
		if (!form) return;
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			var q = form.querySelector('[name="q"]').value;
			var fac = form.querySelector('[name="faculty"]').value;
			var grade = form.querySelector('[name="grade"]') ? form.querySelector('[name="grade"]').value : '';
			var url = 'courses.html?';
			var bits = [];
			if (q) bits.push('q=' + encodeURIComponent(q));
			if (fac) bits.push('faculty=' + encodeURIComponent(fac));
			if (grade) bits.push('grade=' + encodeURIComponent(grade));
			window.location.href = url + bits.join('&');
		});
	}

	/* -------------------------------------------------
	   Programme detail page
	---------------------------------------------------*/

	function initProgrammePage() {
		var titleEl = $('#programme-title');
		if (!titleEl) return;

		var p = programmeBySlug(params().p) || programmeBySlug('diploma-food-beverage');
		var fac = faculty(p.faculty);

		document.title = p.title + ' | Eastport International Training College';
		titleEl.textContent = p.title;
		$('#programme-note').textContent = fac.name;
		$('#programme-image').src = p.image;
		$('#programme-faculty').textContent = fac.short;
		$('#programme-level').textContent = p.level;
		$('#programme-duration').textContent = p.duration;
		$('#programme-grade').textContent = p.grade;
		$('#programme-fee').textContent = p.fee;
		var feeTwo = $('#programme-fee-2');
		if (feeTwo) feeTwo.textContent = p.fee;
		var feeBtn = $('#programme-fee-btn');
		if (feeBtn) feeBtn.setAttribute('href', '#fees');
		$('#programme-body').textContent = p.body;
		$('#programme-code').textContent = p.code;
		$('#programme-summary').textContent = p.summary;

		var overviewTwo = $('#programme-overview-2');
		if (overviewTwo) {
			overviewTwo.textContent = 'Delivery combines classroom theory with supervised practice in our ' +
				(FACILITY[p.faculty] || 'training facilities') + ', and assessment follows the ' + p.body +
				' competency framework — continuous internal practical evaluations plus the final examining body assessment.';
		}

		var careerText = $('#programme-career-text');
		if (careerText) {
			careerText.textContent = 'Graduates progress into employment, self-employment or further study. Eastport alumni from the ' +
				fac.short + ' faculty are working across Kericho County and the wider South Rift, and our attachment office supports every learner through their three-month placement.';
		}
		$('#programme-students').textContent = p.students + ' enrolled';
		$('#programme-trainer').textContent = p.trainer;
		$('#programme-trainer-role').textContent = p.role;
		$('#programme-trainer-pic').style.backgroundImage = 'url(' + p.image + ')';

		var unitsBox = $('#programme-units');
		if (unitsBox) {
			unitsBox.innerHTML = p.units.map(function (u) {
				return '<tr><td>' + esc(u) + '</td><td>' + esc(p.body) + '</td><td>' + esc(p.level) + '</td></tr>';
			}).join('');
		}

		var careersBox = $('#programme-careers');
		if (careersBox) {
			careersBox.innerHTML = p.careers.map(function (c) {
				return '<li>' + esc(c) + '</li>';
			}).join('');
		}

		var related = EP.programmes.filter(function (x) {
			return x.faculty === p.faculty && x.slug !== p.slug;
		}).concat(EP.programmes.filter(function (x) { return x.faculty !== p.faculty; })).slice(0, 4);
		renderProgrammes('#related-grid', related);

		var cta = $('#programme-apply');
		if (cta) cta.setAttribute('href', 'apply.html?programme=' + encodeURIComponent(p.slug));
	}

	/* -------------------------------------------------
	   Accordions
	---------------------------------------------------*/

	function initAccordions() {
		$$('.ep-accordion-item button, .xg-acc-item button').forEach(function (btn) {
			btn.addEventListener('click', function () {
				var item = btn.parentNode;
				var wasOpen = item.classList.contains('is-open');
				$$('.ep-accordion-item, .xg-acc-item').forEach(function (el) { el.classList.remove('is-open'); });
				if (!wasOpen) item.classList.add('is-open');
			});
		});
	}

	/* -------------------------------------------------
	   Basic forms (contact + application)
	---------------------------------------------------*/

	function initSimpleForms() {
		$$('form[data-demo-form]').forEach(function (form) {
			form.addEventListener('submit', function (e) {
				e.preventDefault();
				var alertBox = form.querySelector('.ep-alert, .xg-alert') || form.parentNode.querySelector('.ep-alert, .xg-alert');
				if (!alertBox) {
					alertBox = document.createElement('div');
					alertBox.className = 'xg-alert';
					alertBox.setAttribute('role', 'status');
					form.appendChild(alertBox);
				}
				var required = $$('input[required], textarea[required], select[required]', form);
				var ok = required.every(function (field) {
					if (field.type === 'checkbox') return field.checked;
					return String(field.value).trim() !== '';
				});
				alertBox.classList.remove('is-success', 'is-error');
				alertBox.classList.add('is-visible', ok ? 'is-success' : 'is-error');
				alertBox.textContent = ok
					? (form.getAttribute('data-success') || 'Thank you. Your message has been received — our team will respond within one working day.')
					: 'Please complete the highlighted fields before submitting.';
				if (ok) form.reset();
			});
		});
	}

	/* -------------------------------------------------
	   Student portal login
	---------------------------------------------------*/

	/* Mobile menu for the standalone navigation used on the login page */
	function initMobileNav() {
		var toggles = $$('[data-nav-toggle]');
		toggles.forEach(function (btn) {
			var list = document.getElementById(btn.getAttribute('aria-controls'));
			if (!list) return;
			btn.addEventListener('click', function () {
				var open = list.classList.toggle('is-open');
				btn.setAttribute('aria-expanded', open ? 'true' : 'false');
				btn.classList.toggle('is-open', open);
				btn.classList.toggle('is-active', open);
			});
			list.addEventListener('click', function (e) {
				if (e.target.tagName === 'A') {
					list.classList.remove('is-open');
					btn.setAttribute('aria-expanded', 'false');
					btn.classList.remove('is-active');
				}
			});
		});
	}

	/* Home page "Featured Courses" filter tabs */
	function initHomeFilters() {
		/* Home page: faculty tab cards filter the popular-course grid. */
		var tabs = $$('#home-faculty-tabs .xg-tab');
		var grid = $('#featured-grid');
		if (!tabs.length || !grid) return;

		tabs.forEach(function (tab) {
			tab.addEventListener('click', function () {
				var slug = tab.getAttribute('data-faculty') || 'all';
				tabs.forEach(function (t) { t.classList.remove('is-active'); });
				tab.classList.add('is-active');

				$$('#featured-grid .ep-programme').forEach(function (card) {
					var match = slug === 'all' || card.getAttribute('data-faculty') === slug;
					card.style.display = match ? '' : 'none';
				});
			});
		});
	}

	function initLoginPage() {
		var form = $('#login-form');
		if (!form) return;

		var identifier = $('#identifier');
		var password = $('#password');
		var remember = $('#remember');
		var submit = $('#login-submit');
		var alertBox = $('#login-alert');
		var activeRole = 'student';

		// Restore a remembered admission number / e-mail
		try {
			var saved = window.localStorage.getItem('eastport.remembered');
			if (saved) {
				identifier.value = saved;
				remember.checked = true;
			}
		} catch (err) { /* storage disabled */ }

		var alertBase = alertBox.className;

		function showAlert(type, message) {
			alertBox.className = alertBase + ' is-visible ' + (type === 'success' ? 'is-success' : 'is-error');
			alertBox.innerHTML = message;
		}

		function clearAlert() {
			alertBox.className = alertBase;
			alertBox.textContent = '';
		}

		function setFieldError(field, message) {
			var wrap = field.closest('.ep-field, .lg-field, .xl-field');
			var error = wrap ? wrap.querySelector('.ep-field-error, .xl-error') : null;
			field.classList.toggle('is-invalid', !!message);
			if (error) {
				error.textContent = message || '';
				error.classList.toggle('is-visible', !!message);
			}
		}

		[identifier, password].forEach(function (field) {
			field.addEventListener('input', function () {
				setFieldError(field, '');
				clearAlert();
			});
		});

		// Password visibility
		$$('[data-toggle-password]').forEach(function (btn) {
			btn.addEventListener('click', function () {
				var target = document.getElementById(btn.getAttribute('data-toggle-password'));
				var showing = target.getAttribute('type') === 'text';
				target.setAttribute('type', showing ? 'password' : 'text');
				btn.innerHTML = showing ? '<i class="fa fa-eye"></i>' : '<i class="fa fa-eye-slash"></i>';
				btn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
			});
		});

		// Role tabs
		$$('.login-tabs button, .lg-tabs button, .xl-tabs button').forEach(function (tab) {
			tab.addEventListener('click', function () {
				$$('.login-tabs button, .lg-tabs button, .xl-tabs button').forEach(function (t) { t.classList.remove('active', 'is-active'); });
				tab.classList.add('active', 'is-active');
				activeRole = tab.getAttribute('data-role');
				var label = activeRole === 'student' ? 'Admission Number / Student E-mail'
					: activeRole === 'staff' ? 'Staff E-mail / Payroll Number'
						: 'Parent E-mail / Phone Number';
				var idLabel = $('#identifier-label');
				if (idLabel) idLabel.textContent = label;
				identifier.placeholder = activeRole === 'student' ? 'e.g. EITC/2026/0148' : (activeRole === 'staff' ? 'e.g. tutor@eastport.ac.ke' : 'e.g. parent@gmail.com');
				clearAlert();
			});
		});

		// Demo credential fill
		$$('[data-fill-demo]').forEach(function (btn) {
			btn.addEventListener('click', function () {
				identifier.value = EP.portal.demo.identifier;
				password.value = EP.portal.demo.password;
				setFieldError(identifier, '');
				setFieldError(password, '');
				clearAlert();
			});
		});

		// Forgot password
		var forgot = $('#forgot-password');
		if (forgot) {
			forgot.addEventListener('click', function (e) {
				e.preventDefault();
				showAlert('success', '<strong>Password reset requested.</strong> If <em>' + esc(identifier.value || 'your portal account') + '</em> is registered, a reset link will be sent by the registrar. You can also call admissions on ' + EP.contact.phone + '.');
			});
		}

		function validate() {
			var valid = true;
			var id = identifier.value.trim();
			var pw = password.value;

			if (!id) {
				setFieldError(identifier, activeRole === 'student' ? 'Enter your admission number or e-mail.' : 'Enter your credential to continue.');
				valid = false;
			} else if (id.length < 5) {
				setFieldError(identifier, 'That does not look complete. Check your admission number or e-mail.');
				valid = false;
			} else {
				setFieldError(identifier, '');
			}

			if (!pw) {
				setFieldError(password, 'Enter your portal password.');
				valid = false;
			} else if (pw.length < 6) {
				setFieldError(password, 'Passwords are at least 6 characters long.');
				valid = false;
			} else {
				setFieldError(password, '');
			}

			return valid;
		}

		form.addEventListener('submit', function (e) {
			e.preventDefault();
			clearAlert();

			if (!validate()) return;

			var originalLabel = submit.innerHTML;
			submit.disabled = true;
			submit.innerHTML = 'Verifying credentials <i class="fa fa-spinner fa-spin"></i>';

			window.setTimeout(function () {
				var id = identifier.value.trim();
				var isDemo = id === EP.portal.demo.identifier || id.toLowerCase() === EP.portal.demo.email;
				var student = JSON.parse(JSON.stringify(EP.portal.student));

				if (isDemo && password.value !== EP.portal.demo.password) {
					submit.disabled = false;
					submit.innerHTML = originalLabel;
					setFieldError(password, 'Incorrect password for this account.');
					showAlert('error', '<strong>We could not sign you in.</strong> The password does not match the demo account. Use the demo credentials shown below, or contact the ICT desk.');
					return;
				}

				if (!isDemo) {
					// Flexible demo: accept any valid admission number / e-mail with a 6+ character password
					student.admission = id.toUpperCase().indexOf('@') > -1 ? 'EITC/2026/0148' : id.toUpperCase();
					student.name = 'Student';
					student.image = 'img/authors/2.jpg';
				}

				try {
					window.localStorage.setItem('eastport.session', JSON.stringify({
						role: activeRole,
						identifier: id,
						name: student.name,
						admission: student.admission,
						at: Date.now()
					}));
					if (remember.checked) {
						window.localStorage.setItem('eastport.remembered', id);
					} else {
						window.localStorage.removeItem('eastport.remembered');
					}
				} catch (err) { /* storage disabled */ }

				submit.innerHTML = 'Signed in <i class="fa fa-check"></i>';
				showAlert('success', '<strong>Welcome back, ' + esc(student.name) + '.</strong> Loading your student portal…');
				window.setTimeout(function () {
					window.location.href = activeRole === 'student' ? 'dashboard.html' : 'dashboard.html?role=' + activeRole;
				}, 850);
			}, 900);
		});
	}

	/* -------------------------------------------------
	   Student dashboard
	---------------------------------------------------*/

	function initDashboard() {
		var root = $('#portal-root');
		if (!root) return;

		var session = null;
		try {
			session = JSON.parse(window.localStorage.getItem('eastport.session') || 'null');
		} catch (err) { session = null; }

		if (!session) {
			window.location.replace('login.html');
			return;
		}

		var student = JSON.parse(JSON.stringify(EP.portal.student));
		student.name = session.name || student.name;
		student.admission = session.admission || student.admission;

		var firstName = student.name.split(' ')[0];
		$('#portal-greeting').textContent = 'Karibu, ' + firstName;
		$('#portal-sub').textContent = student.programme + ' · ' + student.year;
		$('#portal-admission').textContent = student.admission;
		$('#portal-programme').textContent = student.programme;
		$('#portal-year').textContent = student.year;
		$('#portal-balance').textContent = student.balance;
		$('#portal-paid').textContent = student.paid;
		$('#portal-attendance').textContent = student.attendance + '%';
		$('#portal-profile-name').textContent = student.name;
		$('#portal-profile-id').textContent = student.admission;
		$('#portal-profile-programme').textContent = student.faculty;
		$('#portal-profile-pic').style.backgroundImage = 'url(' + student.image + ')';
		$('#portal-email').textContent = student.email;
		$('#portal-phone').textContent = student.phone;
		$('#portal-teacher').textContent = student.classTeacher;
		$('#portal-progress').style.width = student.progress + '%';
		$('#portal-progress-label').textContent = student.progress + '% of Term 3 syllabus covered';

		var results = $('#portal-results');
		if (results) {
			results.innerHTML = student.courses.map(function (c) {
				return '<tr><td><strong>' + esc(c.unit) + '</strong><br><span style="font-size:12px;color:#9aa6aa">' + esc(c.code) + '</span></td>' +
					'<td>' + esc(c.trainer) + '</td><td><strong>' + esc(c.score) + '</strong></td><td>' + esc(c.remark) + '</td></tr>';
			}).join('');
		}

		var timetable = $('#portal-timetable');
		if (timetable) {
			timetable.innerHTML = student.timetable.map(function (t) {
				return '<li><span>' + esc(t.time) + '<br><small style="color:#9aa6aa">' + esc(t.venue) + '</small></span><strong>' + esc(t.subject) + '</strong></li>';
			}).join('');
		}

		var announcements = $('#portal-announcements');
		if (announcements) {
			announcements.innerHTML = student.announcements.map(function (a) {
				return '<div class="portal-announcement"><span>' + esc(a.tag) + '</span><h6>' + esc(a.title) + '</h6><p>' + esc(a.body) + '</p></div>';
			}).join('');
		}

		$$('[data-logout]').forEach(function (link) {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				try { window.localStorage.removeItem('eastport.session'); } catch (err) { /* noop */ }
				window.location.href = 'login.html';
			});
		});
	}

	/* -------------------------------------------------
	   Boot
	---------------------------------------------------*/

	document.addEventListener('DOMContentLoaded', function () {
		// current year in footers
		$$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

		renderFaculties('#faculty-grid', 6);
		renderFaculties('#faculty-grid-all');
		renderFacultyTiles('#login-faculty-grid');
		renderProgrammes('#featured-grid', EP.programmes.slice(0, 8));
		renderProgrammes('#programme-grid');
		renderNews('#news-grid', 3);
		renderTestimonials('#testimonial-grid');
		renderTeam('#team-grid');

		initCoursesPage();
		initFinder();
		initProgrammePage();
		initAccordions();
		initSimpleForms();
		initLoginPage();
		initDashboard();
		initMobileNav();
		initHomeFilters();

		// Pre-fill programme on the application page
		var programmeField = $('#apply-programme');
		if (programmeField && params().programme) {
			var p = programmeBySlug(params().programme);
			if (p) programmeField.value = p.title;
		}
	});
})();

/* Mobile navigation toggle (vanilla) */
(function () {
	var trigger = document.querySelector('.nav-switch');
	var menu = document.querySelector('.main-menu');
	if (!trigger || !menu) return;
	trigger.addEventListener('click', function (e) {
		e.preventDefault();
		menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
	});
})();
