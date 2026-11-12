'use strict';

const { layout, SITE } = require('../layout');

/* Portal login — approved "split glass" design.
   Full-bleed photograph, clear copy panel on the left (title, claim, facts,
   pill actions, contact strip) and a frosted glass sign-in panel on the right
   with underlined fields and a pill submit — exactly the reference layout. */

const NAV_LINKS = [
	{ href: 'index.html', label: 'Home' },
	{ href: 'about.html', label: 'About us' },
	{ href: 'courses.html', label: 'Courses' },
	{ href: 'blog.html', label: 'News' },
	{ href: 'contact.html', label: 'Contact' }
];

const SOCIALS = [
	{ href: 'https://facebook.com/EastportCollegeKericho', icon: 'fa-facebook', label: 'Facebook' },
	{ href: 'https://twitter.com/EastportCollege', icon: 'fa-twitter', label: 'Twitter / X' },
	{ href: 'https://instagram.com/eastportcollege', icon: 'fa-instagram', label: 'Instagram' },
	{ href: 'https://linkedin.com/company/eastport-college', icon: 'fa-linkedin', label: 'LinkedIn' },
	{ href: 'https://youtube.com/@EastportCollege', icon: 'fa-youtube-play', label: 'YouTube' },
	{ href: 'https://tiktok.com/@eastportcollege', icon: 'fa-music', label: 'TikTok' }
];

const FACTS = [
	['253+', 'Approved Courses'],
	['100%', 'TVETA &amp; KNEC Certified'],
	['11', 'Specialised Faculties'],
	['98%', 'Attachment Placement']
];

module.exports = function login() {
	const navLinks = NAV_LINKS.map((l) =>
		`\t\t\t\t\t<li><a href="${l.href}">${l.label}</a></li>`).join('\n');

	const socials = SOCIALS.map((s) =>
		`\t\t\t\t\t<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="fa ${s.icon}"></i></a>`).join('\n');

	const facts = FACTS.map(([value, label]) =>
		`\t\t\t\t\t\t<li><strong>${value}</strong><span>${label}</span></li>`).join('\n');

	const body = `\t<div class="lg-page">
\t\t<div class="lg-bg" style="background-image:url(img/bg.jpg)"></div>

\t\t<!-- slim header over the photograph -->
\t\t<div class="lg-topbar">
\t\t\t<div class="lg-wrap">
\t\t\t\t<a href="index.html" class="lg-brand" aria-label="Eastport International Training College home">
\t\t\t\t\t<img src="img/logo-white.svg" alt="Eastport International Training College">
\t\t\t\t</a>
\t\t\t\t<nav>
\t\t\t\t\t<ul class="lg-topnav" id="lg-topnav">
${navLinks}
\t\t\t\t\t</ul>
\t\t\t\t</nav>
\t\t\t\t<div class="lg-topbar-side">
\t\t\t\t\t<a href="${SITE.tel}" class="lg-topbar-phone"><i class="fa fa-phone"></i>${SITE.phone}</a>
\t\t\t\t\t<button class="lg-topnav-toggle" type="button" aria-expanded="false" aria-controls="lg-topnav" aria-label="Open menu" data-nav-toggle>
\t\t\t\t\t\t<i class="fa fa-bars"></i>
\t\t\t\t\t</button>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>

\t\t<div class="lg-split">

\t\t\t<!-- left: clear copy panel -->
\t\t\t<section class="lg-intro">
\t\t\t\t<span class="lg-eyebrow">Student &amp; staff portal · Kericho</span>
\t\t\t\t<h1>Real practical skills.<br><span>A career you can count on.</span></h1>
\t\t\t\t<p>Sign in to your Eastport portal for results, fee statements, class timetables, examination slips and attachment letters — all from the one account your tutor sees.</p>
\t\t\t\t<ul class="lg-facts">
${facts}
\t\t\t\t</ul>
\t\t\t\t<div class="lg-intro-actions">
\t\t\t\t\t<a href="apply.html" class="lg-pill lg-pill-gold">Apply for January 2027 <span class="lg-pill-arrow">&rsaquo;</span></a>
\t\t\t\t\t<a href="courses.html" class="lg-pill lg-pill-ghost">Explore 253 courses</a>
\t\t\t\t</div>
\t\t\t\t<div class="lg-intro-foot">
\t\t\t\t\t<div class="lg-social">
${socials}
\t\t\t\t\t</div>
\t\t\t\t\t<span class="lg-legal">${SITE.examCentres}</span>
\t\t\t\t</div>
\t\t\t</section>

\t\t\t<!-- right: frosted glass form panel -->
\t\t\t<section class="lg-panel">
\t\t\t\t<div class="lg-form-inner">
\t\t\t\t\t<div class="lg-form-head">
\t\t\t\t\t\t<h2>Welcome back</h2>
\t\t\t\t\t\t<p>Sign in with your admission number to continue to your Eastport portal.</p>
\t\t\t\t\t</div>

\t\t\t\t\t<div class="lg-tabs" role="tablist">
\t\t\t\t\t\t<button type="button" class="active" data-role="student" role="tab" aria-selected="true"><i class="fa fa-graduation-cap"></i>Student</button>
\t\t\t\t\t\t<button type="button" data-role="staff" role="tab" aria-selected="false"><i class="fa fa-briefcase"></i>Staff</button>
\t\t\t\t\t\t<button type="button" data-role="guardian" role="tab" aria-selected="false"><i class="fa fa-users"></i>Guardian</button>
\t\t\t\t\t</div>

\t\t\t\t\t<div class="ep-alert" id="login-alert" role="alert" aria-live="polite"></div>

\t\t\t\t\t<form id="login-form" novalidate>
\t\t\t\t\t\t<div class="lg-field">
\t\t\t\t\t\t\t<label for="identifier" id="identifier-label">Admission Number / Student E-mail</label>
\t\t\t\t\t\t\t<div class="lg-input-wrap">
\t\t\t\t\t\t\t\t<input class="lg-input" type="text" id="identifier" name="identifier" placeholder="e.g. EITC/2026/0148" autocomplete="username" spellcheck="false" required>
\t\t\t\t\t\t\t\t<i class="fa fa-user-o lg-icon"></i>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class="lg-error ep-field-error"></div>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<div class="lg-field">
\t\t\t\t\t\t\t<label for="password">Password</label>
\t\t\t\t\t\t\t<div class="lg-input-wrap">
\t\t\t\t\t\t\t\t<input class="lg-input" type="password" id="password" name="password" placeholder="Enter your portal password" autocomplete="current-password" required>
\t\t\t\t\t\t\t\t<button type="button" class="lg-input-action" data-toggle-password="password" aria-label="Show password"><i class="fa fa-eye"></i></button>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class="lg-error ep-field-error"></div>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<div class="lg-row">
\t\t\t\t\t\t\t<label class="ep-checkbox" for="remember">
\t\t\t\t\t\t\t\t<input type="checkbox" id="remember">
\t\t\t\t\t\t\t\t<span class="box"></span>
\t\t\t\t\t\t\t\tKeep me signed in
\t\t\t\t\t\t\t</label>
\t\t\t\t\t\t\t<a href="#" class="lg-link" id="forgot-password">Forgot password?</a>
\t\t\t\t\t\t</div>

\t\t\t\t\t\t<div class="lg-actions">
\t\t\t\t\t\t\t<button type="submit" class="lg-submit" id="login-submit">Sign in <span class="lg-pill-arrow">&rsaquo;</span></button>
\t\t\t\t\t\t\t<a href="apply.html" class="lg-link">Don’t have an account?</a>
\t\t\t\t\t\t</div>
\t\t\t\t\t</form>

\t\t\t\t\t<div class="lg-alt"><span>or</span></div>

\t\t\t\t\t<div class="lg-alt-grid">
\t\t\t\t\t\t<a class="lg-alt-btn" href="apply.html"><i class="fa fa-user-plus"></i> Apply as a new student</a>
\t\t\t\t\t\t<a class="lg-alt-btn" href="contact.html"><i class="fa fa-life-ring"></i> Get help from the ICT desk</a>
\t\t\t\t\t</div>

\t\t\t\t\t<div class="lg-demo">
\t\t\t\t\t\t<strong>Preview credentials</strong>
\t\t\t\t\t\tAdmission <code>EITC/2026/0148</code> · Password <code>eastport2026</code><br>
\t\t\t\t\t\t<button type="button" class="fill-demo" data-fill-demo>Fill demo credentials</button>
\t\t\t\t\t</div>

\t\t\t\t\t<p class="lg-note">
\t\t\t\t\t\tYour password is personal — the ICT desk will never ask for it by phone or WhatsApp.
\t\t\t\t\t</p>
\t\t\t\t</div>
\t\t\t</section>

\t\t</div>
\t</div>

\t<!-- compact brand footer -->
\t<footer class="lg-footer">
\t\t<div class="lg-wrap">
\t\t\t<a href="index.html" class="lg-brand" aria-label="Eastport International Training College home">
\t\t\t\t<img src="img/logo-white.svg" alt="Eastport International Training College">
\t\t\t</a>
\t\t\t<ul class="lg-footer-facts">
\t\t\t\t<li><i class="fa fa-map-marker"></i>${SITE.campus}</li>
\t\t\t\t<li><i class="fa fa-phone"></i><a href="${SITE.tel}">${SITE.phone}</a></li>
\t\t\t\t<li><i class="fa fa-envelope-o"></i><a href="mailto:${SITE.email}">${SITE.email}</a></li>
\t\t\t</ul>
\t\t\t<div class="lg-footer-bar">
\t\t\t\t<span>Copyright &copy; <span data-year>2026</span> ${SITE.name}. All rights reserved.</span>
\t\t\t\t<span>${SITE.examCentres}</span>
\t\t\t</div>
\t\t</div>
\t</footer>`;

	return layout({
		title: 'Student Portal Login | Eastport International Training College, Kericho',
		ogImage: 'img/versions/a-login.jpg',
		description: 'Sign in to the Eastport International Training College student portal for results, fee statements, timetables and attachment letters. TVETA, KNEC 518112 and CDACC 0350007 centre at Chai Plaza 2nd Floor, Kericho CBD.',
		active: 'login',
		noHeader: true,
		noFooter: true,
		bodyClass: 'login-body',
		extraStyles: ['css/login.css'],
		body
	});
};
