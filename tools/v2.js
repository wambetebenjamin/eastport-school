/* Shared layout for VERSION B — the university-style website with an
   eLearning portal. Content is Eastport's. */
'use strict';

const EP = require('./content');
const VERSION = require('./version');

const v = (file) => `${file}?v=${VERSION}`;

const SITE = {
	name: 'Eastport International Training College',
	short: 'Eastport College',
	campus: 'Chai Plaza, 2nd Floor, Kenyatta Street, Kericho CBD',
	phone: '0757 478 077',
	tel: 'tel:0757478077',
	whatsapp: 'https://wa.me/254757478077',
	email: 'admissions@eastportinternationalcollege.ac.ke',
	ict: 'icteastport@gmail.com',
	hours: 'Mon–Fri: 8:00 AM – 5:00 PM · Sat: 8:30 AM – 1:00 PM',
	examCentres: 'KNEC 518112 · CDACC 0350007 · TVETA Centre 401002'
};

const LEVELS = [
	{
		key: 'Certificate',
		image: '../img/categories/1.jpg',
		title: 'Certificate Programmes',
		blurb: 'One-year artisan-to-certificate pathways assessing you against KNEC and CDACC occupational standards.',
		icon: 'fa-certificate'
	},
	{
		key: 'Diploma',
		image: '../img/courses/3.jpg',
		title: 'Diploma Programmes',
		blurb: 'Two-year professional diplomas with a guaranteed three-month industry attachment in Kericho and beyond.',
		icon: 'fa-graduation-cap'
	},
	{
		key: 'Artisan',
		image: '../img/courses/4.jpg',
		title: 'Artisan & Craft Programmes',
		blurb: 'Hands-on workshop trades for school leavers — plumbing, welding, masonry, mechanics and tailoring.',
		icon: 'fa-wrench'
	},
	{
		key: 'Professional',
		image: '../img/categories/3.jpg',
		title: 'Professional &amp; KASNEB',
		blurb: 'KASNEB CPA and CS, CHRP, CDACC assessor awards and short professional certificates for working adults.',
		icon: 'fa-briefcase'
	},
	{
		key: 'International',
		image: '../img/courses/5.jpg',
		title: 'International Courses',
		blurb: 'Internationally benchmarked certificates and diplomas delivered with partner colleges and awarding bodies.',
		icon: 'fa-globe'
	}
];

function levelCount(key) {
	return EP.programmes.filter((programme) => programme.level === key).length;
}

function head({ title, description, styles = [], scripts = [] }) {
	const styleTags = ['css/font-awesome.min.css', 'css/version-b.css', ...styles]
		.map((href) => `\t<link rel="stylesheet" href="${v('../' + href)}"/>`)
		.join('\n');
	const scriptTags = [...scripts]
		.map((src) => `\t<script src="${v('../' + src)}" defer></script>`)
		.join('\n');

	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${title}</title>
	<meta name="description" content="${description}">
	<meta name="theme-color" content="#24246a">
	<link rel="icon" href="../img/favicon.ico">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
${styleTags}
${scriptTags}
</head>`;
}

/* ---------------------------------------------------------------
   Marketing shell
   --------------------------------------------------------------- */

const M_NAV = [
	{ href: 'index.html', label: 'Home', key: 'home' },
	{ href: '../about.html', label: 'About Eastport', key: 'about' },
	{ href: '#programmes', label: 'Programmes', key: 'programmes' },
	{ href: '#admissions', label: 'Admissions', key: 'admissions' },
	{ href: 'login.html', label: 'eLearning', key: 'elearning' },
	{ href: '#news', label: 'News', key: 'news' },
	{ href: '#contact', label: 'Contact', key: 'contact' }
];

function mTopbar() {
	return `<div class="u-topbar">
		<div class="u-wrap">
			<div class="u-topbar-left">
				<a class="u-topbar-item" href="${SITE.tel}"><i class="fa fa-phone"></i> ${SITE.phone}</a>
				<a class="u-topbar-item" href="mailto:${SITE.email}"><i class="fa fa-envelope-o"></i> ${SITE.email}</a>
				<span class="u-topbar-item"><i class="fa fa-clock-o"></i> ${SITE.hours}</span>
			</div>
			<div class="u-topbar-right">
				<a href="login.html">Student Portal</a>
				<a href="dashboard.html">eLearning</a>
				<a href="../courses.html">Course Catalogue</a>
				<span class="u-topbar-social">
					<a href="https://facebook.com/EastportCollegeKericho" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
					<a href="https://twitter.com/EastportCollege" aria-label="X"><i class="fa fa-twitter"></i></a>
					<a href="https://instagram.com/eastportcollege" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
					<a href="https://linkedin.com/company/eastport-college" aria-label="LinkedIn"><i class="fa fa-linkedin"></i></a>
					<a href="https://youtube.com/@EastportCollege" aria-label="YouTube"><i class="fa fa-youtube-play"></i></a>
				</span>
			</div>
		</div>
	</div>`;
}

function mHeader(active) {
	const links = M_NAV.map((item) => {
		const cls = item.key === active ? ' class="is-active"' : '';
		return `<a href="${item.href}"${cls}>${item.label}</a>`;
	}).join('\n\t\t\t\t');

	return `${mTopbar()}
	<header class="u-header">
		<div class="u-wrap">
			<a class="u-brand" href="index.html">
				<img src="../img/logo-dark.svg" alt="Eastport International Training College">
			</a>
			<nav class="u-nav" id="m-nav" aria-label="Main navigation">
				${links}
			</nav>
			<div class="u-header-actions">
				<a class="u-portal-link" href="login.html"><i class="fa fa-laptop"></i> Portal Login</a>
				<a class="u-btn u-btn-gold" href="../apply.html">Apply Now</a>
				<button class="u-burger" type="button" data-nav-toggle="#m-nav" aria-expanded="false" aria-label="Open menu"><i class="fa fa-bars"></i></button>
			</div>
		</div>
	</header>`;
}

function mFooter() {
	return `<footer class="u-footer" id="contact">
		<div class="u-wrap">
			<div class="u-footer-grid">
				<div class="u-footer-brand">
					<img src="../img/logo-white.svg" alt="Eastport International Training College">
					<p>TVETA-registered, KNEC and CDACC examination centre in Kericho CBD. 253 approved programmes across eleven specialised faculties, with three intakes every year.</p>
					<div class="u-footer-social">
						<a href="https://facebook.com/EastportCollegeKericho" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
						<a href="https://twitter.com/EastportCollege" aria-label="X"><i class="fa fa-twitter"></i></a>
						<a href="https://instagram.com/eastportcollege" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
						<a href="https://linkedin.com/company/eastport-college" aria-label="LinkedIn"><i class="fa fa-linkedin"></i></a>
						<a href="https://youtube.com/@EastportCollege" aria-label="YouTube"><i class="fa fa-youtube-play"></i></a>
						<a href="https://tiktok.com/@eastportcollege" aria-label="TikTok"><i class="fa fa-music"></i></a>
					</div>
				</div>
				<div>
					<h4>Quick Links</h4>
					<ul class="u-footer-list">
						<li><a href="../about.html">About Eastport</a></li>
						<li><a href="../courses.html">All programmes</a></li>
						<li><a href="../apply.html">Apply online</a></li>
						<li><a href="../blog.html">Campus news</a></li>
						<li><a href="../contact.html">Contact us</a></li>
						<li><a href="../login.html">Student portal</a></li>
					</ul>
				</div>
				<div>
					<h4>Programmes</h4>
					<ul class="u-footer-list">
						<li><a href="courses.html">Certificate</a></li>
						<li><a href="courses.html">Diploma</a></li>
						<li><a href="courses.html">Artisan &amp; craft</a></li>
						<li><a href="courses.html">Professional &amp; KASNEB</a></li>
						<li><a href="courses.html">International courses</a></li>
						<li><a href="login.html">eLearning portal</a></li>
					</ul>
				</div>
				<div>
					<h4>Get in touch</h4>
					<ul class="u-footer-list u-footer-contact">
						<li><i class="fa fa-map-marker"></i><span>${SITE.campus}</span></li>
						<li><i class="fa fa-phone"></i><span>${SITE.phone} · WhatsApp available</span></li>
						<li><i class="fa fa-envelope-o"></i><span>${SITE.email}</span></li>
						<li><i class="fa fa-clock-o"></i><span>${SITE.hours}</span></li>
					</ul>
				</div>
			</div>
			<div class="u-footer-bottom">
				<span>© 2026 Eastport International Training College. All rights reserved.</span>
				<span><a href="../versions.html">Compare design versions</a> · ${SITE.examCentres}</span>
			</div>
		</div>
	</footer>`;
}

function promoModal() {
	return `<div class="u-modal" data-promo role="dialog" aria-modal="true" aria-label="January 2027 intake">
		<div class="u-modal-card">
			<div class="u-modal-media" style="background-image:url('../img/page-bg/2.jpg')"></div>
			<div class="u-modal-body">
				<h3>Don't miss</h3>
				<h4>Join our January 2027 intake</h4>
				<p>The academic registrar invites applications across all eleven faculties. Applications close on 16 January 2027, and a 40% deposit secures your place.</p>
				<a class="u-btn u-btn-navy" href="../apply.html">Apply now</a>
				<button class="u-modal-decline" type="button" data-promo-close>No thanks, I'm not interested</button>
			</div>
			<button class="u-modal-close" type="button" data-promo-close aria-label="Close"><i class="fa fa-times"></i></button>
		</div>
	</div>`;
}

function switchPill() {
	return `<a class="u-switch" href="../versions.html"><i class="fa fa-random"></i> Compare versions</a>`;
}

function mPage({ title, description, active, body, withModal = false }) {
	return `${head({ title, description, scripts: ['js/version-b.js'] })}
<body class="u-body">
${mHeader(active)}
${body}
${mFooter()}
${withModal ? promoModal() : ''}
</body>
</html>
`;
}

/* ---------------------------------------------------------------
   eLearning shell
   --------------------------------------------------------------- */

function eTopbar() {
	return `<div class="el-topbar">
		<div class="el-wrap">
			<div class="el-topbar-links">
				<a href="index.html"><i class="fa fa-university"></i> Eastport Website</a>
				<a href="../courses.html"><i class="fa fa-book"></i> E-Library</a>
				<a href="../login.html"><i class="fa fa-id-card-o"></i> Student Portal</a>
			</div>
			<div class="el-topbar-links">
				<a href="#help"><i class="fa fa-life-ring"></i> Help desk</a>
				<a href="#help"><i class="fa fa-question-circle"></i> FAQs</a>
				<a href="mailto:${SITE.email}"><i class="fa fa-envelope-o"></i> ${SITE.email}</a>
			</div>
		</div>
	</div>`;
}

function eHeader(active, guest) {
	const links = (guest
		? [
			{ href: 'dashboard.html', label: 'Home', key: 'home' },
			{ href: 'courses.html', label: 'Search for Courses', key: 'courses' },
			{ href: '#help', label: 'Help desk', key: 'help' }
		]
		: [
			{ href: 'dashboard.html', label: 'Home', key: 'home' },
			{ href: 'courses.html', label: 'Search for Courses', key: 'courses' },
			{ href: 'dashboard.html#my-courses', label: 'My Courses', key: 'my' },
			{ href: '#help', label: 'Help desk', key: 'help' }
		]).map((item) => {
		const cls = item.key === active ? ' class="is-active"' : '';
		return `<a href="${item.href}"${cls}>${item.label}</a>`;
	}).join('\n\t\t\t\t');

	return `${eTopbar()}
	<header class="el-header">
		<div class="el-wrap">
			<a class="el-logo" href="dashboard.html">
				<img src="../img/crest.svg" alt="">
				<span class="el-logo-text">
					<strong>Eastport eLearning</strong>
					<span>Kericho · TVETA Centre 401002</span>
				</span>
			</a>
			<nav class="el-nav" id="el-nav" aria-label="Site navigation">
				${links}
			</nav>
			<div class="el-nav-actions">
				${guest ? '' : '<a class="el-nav-avatar" href="dashboard.html" aria-label="Your profile">GK</a>'}
				<button class="el-burger" type="button" data-nav-toggle="#el-nav" aria-expanded="false" aria-label="Open menu"><i class="fa fa-bars"></i></button>
			</div>
		</div>
	</header>`;
}

function eFooter() {
	return `<footer class="el-footer" id="help">
		<div class="el-wrap">
			<div class="el-footer-grid">
				<div>
					<h4>Eastport eLearning System</h4>
					<ul>
						<li><a href="index.html">Eastport Website</a></li>
						<li><a href="../login.html">Student's Portal</a></li>
						<li><a href="../courses.html">E-Library</a></li>
						<li><a href="../blog.html">Notice board</a></li>
						<li><a href="../index.html#contact">Teaching timetable</a></li>
					</ul>
				</div>
				<div>
					<h4>Accounts &amp; QA Office</h4>
					<ul class="el-footer-contact">
						<li><strong>Accounts Office</strong>${SITE.phone}</li>
						<li><strong>Quality Assurance</strong><a href="mailto:${SITE.email}">${SITE.email}</a></li>
						<li><strong>Admissions &amp; Registrar</strong>Chai Plaza, 2nd Floor, Kericho</li>
					</ul>
				</div>
				<div>
					<h4>Technical Support</h4>
					<ul class="el-footer-contact">
						<li><strong>ICT Help desk</strong>Mon–Fri 8:00 AM – 5:00 PM</li>
						<li><strong>ICT Office</strong>Chai Plaza, 2nd Floor, Room 12</li>
						<li><strong>WhatsApp</strong><a href="${SITE.whatsapp}">${SITE.phone}</a></li>
					</ul>
				</div>
				<div>
					<h4>Online Resources</h4>
					<ul>
						<li><a href="../courses.html">Course catalogue</a></li>
						<li><a href="../apply.html">Apply online</a></li>
						<li><a href="../blog.html">Examination notices</a></li>
						<li><a href="../contact.html">Contact admissions</a></li>
					</ul>
				</div>
			</div>
			<div class="el-footer-bottom">
				<span>© 2026 Eastport International Training College. All Rights Reserved.</span>
				<span><a href="../versions.html">Compare design versions</a> · ${SITE.examCentres}</span>
			</div>
		</div>
	</footer>`;
}

function ePage({ title, description, active, body, slimFooter = false, guest = false }) {
	return `${head({ title, description, scripts: ['js/version-b.js'] })}
<body class="el-body">
	<a class="el-skip" href="#maincontent">Skip to main content</a>
${eHeader(active, guest)}
${body}
${slimFooter ? '' : eFooter()}
</body>
</html>
`;
}

module.exports = {
	SITE,
	LEVELS,
	levelCount,
	EP,
	mPage,
	ePage,
	promoModal
};
