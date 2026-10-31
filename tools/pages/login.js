'use strict';

const { layout, SITE } = require('../layout');

const NAV_LINKS = [
	{ href: 'index.html', label: 'Home' },
	{ href: 'about.html', label: 'About us' },
	{ href: 'courses.html', label: 'Courses' },
	{ href: 'blog.html', label: 'News' },
	{ href: 'contact.html', label: 'Contact' },
	{ href: 'login.html', label: 'Portal Login', active: true }
];

const SOCIALS = [
	{ href: 'https://facebook.com/EastportCollegeKericho', icon: 'fa-facebook', label: 'Facebook' },
	{ href: 'https://twitter.com/EastportCollege', icon: 'fa-twitter', label: 'Twitter / X' },
	{ href: 'https://instagram.com/eastportcollege', icon: 'fa-instagram', label: 'Instagram' },
	{ href: 'https://linkedin.com/company/eastport-college', icon: 'fa-linkedin', label: 'LinkedIn' },
	{ href: 'https://youtube.com/@EastportCollege', icon: 'fa-youtube-play', label: 'YouTube' },
	{ href: 'https://tiktok.com/@eastportcollege', icon: 'fa-music', label: 'TikTok' }
];

const STATS = [
	['253+', 'Approved Courses'],
	['100%', 'TVETA &amp; KNEC Certified'],
	['11', 'Specialised Faculties'],
	['98%', 'Attachment Placement']
];

module.exports = function login() {
	const navLinks = NAV_LINKS.map((l) =>
		`\t\t\t\t\t<li><a href="${l.href}"${l.active ? ' class="active"' : ''}>${l.label}</a></li>`).join('\n');

	const socials = SOCIALS.map((s) =>
		`\t\t\t<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="fa ${s.icon}"></i></a>`).join('\n');

	const stats = STATS.map(([value, label]) =>
		`\t\t\t\t\t\t<div class="lg-stat"><strong>${value}</strong><span>${label}</span></div>`).join('\n');

	const body = `
	<!-- utility strip -->
	<div class="lg-utility">
		<div class="lg-wrap">
			<div class="lg-utility-links">
				<a href="${SITE.tel}"><i class="fa fa-phone"></i>${SITE.phone}</a>
				<a href="${SITE.whatsapp}" target="_blank" rel="noopener"><i class="fa fa-whatsapp"></i>WhatsApp Admissions</a>
				<a href="mailto:${SITE.email}"><i class="fa fa-envelope-o"></i>${SITE.email}</a>
			</div>
			<div class="lg-social-inline">
${socials}
			</div>
		</div>
	</div>

	<!-- main navigation -->
	<header class="lg-nav">
		<div class="lg-wrap">
			<a href="index.html" class="lg-brand" aria-label="Eastport International Training College home">
				<img src="img/logo-dark.svg" alt="Eastport International Training College">
			</a>
			<button class="lg-nav-toggle" type="button" aria-expanded="false" aria-controls="lg-nav-links" aria-label="Open menu" data-nav-toggle>
				<i class="fa fa-bars"></i>
			</button>
			<ul class="lg-nav-links" id="lg-nav-links">
${navLinks}
			</ul>
			<div class="lg-nav-actions">
				<a href="${SITE.tel}" class="lg-nav-phone"><i class="fa fa-phone"></i>${SITE.phone}</a>
				<a href="apply.html" class="lg-nav-apply">Apply now</a>
			</div>
		</div>
	</header>

	<!-- login card -->
	<section class="lg-page">
		<div class="lg-bg" style="background-image:url(img/bg.jpg)"></div>

		<div class="lg-shell">

			<!-- photo / brand panel -->
			<aside class="lg-visual" style="background-image:url(img/page-bg/1.jpg)">
				<div class="lg-visual-top">
					<a href="index.html" class="lg-brand" aria-label="Eastport International Training College home">
						<img src="img/logo-white.svg" alt="Eastport International Training College">
					</a>
					<a href="index.html" class="lg-back"><i class="fa fa-angle-left"></i>Back to website</a>
				</div>

				<div class="lg-visual-body">
					<span class="lg-eyebrow">Student &amp; staff portal · Kericho</span>
					<h1>Real practical skills.<br><span>A career you can count on.</span></h1>
					<p>Karibu Eastport International Training College at Chai Plaza 2nd Floor, Kericho CBD. Sign in for results, fee statements, class timetables, examination slips and attachment letters.</p>
					<div class="lg-stats">
${stats}
					</div>
					<div class="lg-hero-actions">
						<a href="apply.html" class="primary">Apply for January 2027</a>
						<a href="courses.html" class="ghost">Explore 253 courses</a>
					</div>
				</div>

				<div class="lg-visual-foot">
					<div class="lg-social">
${socials.replace(/\t\t\t<a/g, '\t\t\t\t\t\t<a')}
					</div>
					<span class="lg-legal">${SITE.examCentres}</span>
				</div>
			</aside>

			<!-- form panel -->
			<main class="lg-form-panel">
				<div class="lg-form-inner">
					<div class="lg-form-head">
						<div class="lg-mark"><i class="fa fa-graduation-cap"></i></div>
						<h2>Welcome back</h2>
						<p>Sign in with your admission number to continue to your Eastport portal.</p>
					</div>

					<div class="lg-tabs" role="tablist">
						<button type="button" class="active" data-role="student" role="tab" aria-selected="true"><i class="fa fa-graduation-cap"></i>Student</button>
						<button type="button" data-role="staff" role="tab" aria-selected="false"><i class="fa fa-briefcase"></i>Staff</button>
						<button type="button" data-role="guardian" role="tab" aria-selected="false"><i class="fa fa-users"></i>Guardian</button>
					</div>

					<div class="ep-alert" id="login-alert" role="alert" aria-live="polite"></div>

					<form id="login-form" novalidate>
						<div class="lg-field">
							<label for="identifier" id="identifier-label">Admission Number / Student E-mail</label>
							<div class="lg-input-wrap">
								<input class="lg-input" type="text" id="identifier" name="identifier" placeholder="e.g. EITC/2026/0148" autocomplete="username" spellcheck="false" required>
								<i class="fa fa-user-o lg-icon"></i>
							</div>
							<div class="lg-error ep-field-error"></div>
						</div>

						<div class="lg-field">
							<label for="password">Password</label>
							<div class="lg-input-wrap">
								<input class="lg-input" type="password" id="password" name="password" placeholder="Enter your portal password" autocomplete="current-password" required>
								<button type="button" class="lg-input-action" data-toggle-password="password" aria-label="Show password"><i class="fa fa-eye"></i></button>
							</div>
							<div class="lg-error ep-field-error"></div>
						</div>

						<div class="lg-row">
							<label class="ep-checkbox" for="remember">
								<input type="checkbox" id="remember">
								<span class="box"></span>
								Keep me signed in
							</label>
							<a href="#" class="lg-link" id="forgot-password">Forgot password?</a>
						</div>

						<button type="submit" class="lg-submit" id="login-submit">SIGN IN</button>
					</form>

					<div class="lg-alt"><span>or</span></div>

					<div class="lg-alt-grid">
						<a class="lg-alt-btn" href="apply.html"><i class="fa fa-user-plus"></i> Apply as a new student</a>
						<a class="lg-alt-btn" href="contact.html"><i class="fa fa-life-ring"></i> Get help from the ICT desk</a>
					</div>

					<div class="lg-demo">
						<strong>Preview credentials</strong>
						Admission <code>EITC/2026/0148</code> · Password <code>eastport2026</code><br>
						<button type="button" class="fill-demo" data-fill-demo>Fill demo credentials</button>
					</div>

					<p class="lg-note">
						Your password is personal — the ICT desk will never ask for it by phone or WhatsApp.
					</p>
				</div>
			</main>
		</div>
	</section>

	<!-- slim brand footer -->
	<footer class="lg-footer">
		<div class="lg-wrap">
			<div class="lg-footer-main">
				<a href="index.html" class="lg-brand" aria-label="Eastport International Training College home">
					<img src="img/logo-white.svg" alt="Eastport International Training College">
				</a>
				<ul class="lg-footer-facts">
					<li><i class="fa fa-map-marker"></i>${SITE.campus}</li>
					<li><i class="fa fa-clock-o"></i>${SITE.hours}</li>
					<li><i class="fa fa-phone"></i><a href="${SITE.tel}">${SITE.phone}</a></li>
					<li><i class="fa fa-envelope-o"></i><a href="mailto:${SITE.email}">${SITE.email}</a></li>
				</ul>
				<div class="lg-footer-side">
					<div class="lg-social">
${socials.replace(/\t\t\t<a/g, '\t\t\t\t\t\t<a')}
					</div>
					<a href="apply.html" class="lg-footer-apply">Apply for January 2027</a>
				</div>
			</div>
			<div class="lg-footer-bar">
				<span>Copyright &copy; <span data-year>2026</span> ${SITE.name}. All rights reserved.</span>
				<span>${SITE.examCentres}</span>
			</div>
		</div>
	</footer>`;

	return layout({
		title: 'Student Portal Login | Eastport International Training College, Kericho',
		description: 'Sign in to the Eastport International Training College student portal for results, fee statements, timetables and attachment letters. TVETA, KNEC 518112 and CDACC 0350007 centre at Chai Plaza 2nd Floor, Kericho CBD.',
		active: 'login',
		noHeader: true,
		noFooter: true,
		extraStyles: ['css/login.css'],
		body
	});
};
