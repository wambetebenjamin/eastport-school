/* Shared layout helpers for the Eastport static site build.
   Every version A page is assembled from the "Edura" template shell:
   royal-blue top strip, white sticky navbar with search + CTA, page banner,
   CTA band and navy footer. */
'use strict';

const VERSION = require('./version');

/* Append the build hash so updated styles/scripts are never served from a
   stale browser cache (see tools/version.js). */
const v = (file) => `${file}?v=${VERSION}`;

const SITE = {
	name: 'Eastport International Training College',
	short: 'Eastport College',
	campus: 'Chai Plaza, 2nd Floor, Kenyatta Street, Kericho CBD',
	phone: '0757 478 077',
	tel: 'tel:0757478077',
	whatsapp: 'https://wa.me/254757478077',
	email: 'admissions@eastportinternationalcollege.ac.ke',
	hours: 'Mon–Fri: 8:00 AM – 5:00 PM · Sat: 8:30 AM – 1:00 PM',
	examCentres: 'KNEC 518112 · CDACC 0350007 · TVETA Centre 401002'
};

const BASE_STYLES = [
	'css/bootstrap.min.css',
	'css/font-awesome.min.css',
	'css/owl.carousel.css',
	'css/style.css',
	'css/eastport.css',
	'css/design.css',
	'css/theme.css'
];

const SCRIPTS = [
	'js/jquery-3.2.1.min.js',
	'js/bootstrap.min.js',
	'js/data.js',
	'js/app.js'
];

const NAV = [
	{ href: 'index.html', label: 'Home', key: 'home' },
	{ href: 'about.html', label: 'About us', key: 'about' },
	{ href: 'courses.html', label: 'Courses', key: 'courses' },
	{ href: 'blog.html', label: 'News', key: 'blog' },
	{ href: 'contact.html', label: 'Contact', key: 'contact' }
];

const SOCIALS = [
	{ href: 'https://facebook.com/EastportCollegeKericho', icon: 'fa-facebook', label: 'Facebook' },
	{ href: 'https://twitter.com/EastportCollege', icon: 'fa-twitter', label: 'Twitter / X' },
	{ href: 'https://instagram.com/eastportcollege', icon: 'fa-instagram', label: 'Instagram' },
	{ href: 'https://linkedin.com/company/eastport-college', icon: 'fa-linkedin', label: 'LinkedIn' },
	{ href: 'https://youtube.com/@EastportCollege', icon: 'fa-youtube-play', label: 'YouTube' },
	{ href: 'https://tiktok.com/@eastportcollege', icon: 'fa-music', label: 'TikTok' }
];

function scriptTags() {
	return SCRIPTS.map((src) => `\t<script src="${v(src)}"></script>`).join('\n');
}

function head({ title, description, bodyClass = '', extraStyles = [], ogImage = '' }) {
	const styleTags = [...BASE_STYLES, ...extraStyles]
		.map((href) => `\t<link rel="stylesheet" href="${v(href)}"/>`)
		.join('\n');
	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>${title}</title>
	<meta name="description" content="${description}">
	<meta name="keywords" content="Eastport International Training College, Kericho, TVET, KNEC, CDACC, diploma, certificate, artisan, student portal">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta property="og:title" content="${title}">
	<meta property="og:description" content="${description}">
	<meta property="og:type" content="website">
${ogImage ? `\t<meta property="og:image" content="${ogImage}">\n` : ''}	<meta name="twitter:card" content="summary_large_image">
	<meta name="theme-color" content="#1463f3">
	<link href="img/favicon.ico" rel="shortcut icon"/>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
${styleTags}
</head>
<body class="${bodyClass}">`;
}

/* Royal-blue top strip: contact details on the left, portal links on the right. */
function topStrip() {
	return `	<!-- top strip -->
	<div class="xg-topstrip">
		<div class="container">
			<div class="xg-topstrip-left">
				<a href="${SITE.tel}"><i class="fa fa-phone"></i>${SITE.phone}</a>
				<span class="xg-topstrip-sep">|</span>
				<a href="mailto:${SITE.email}"><i class="fa fa-envelope-o"></i>${SITE.email}</a>
				<span class="xg-topstrip-sep xg-topstrip-hours">|</span>
				<span class="xg-topstrip-hours"><i class="fa fa-clock-o"></i>${SITE.hours}</span>
			</div>
			<div class="xg-topstrip-right">
				<a href="login.html">Login / Register</a>
				<span class="xg-topstrip-sep">|</span>
				<div class="xg-topstrip-social">
${SOCIALS.slice(0, 4).map((s) => `					<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="fa ${s.icon}"></i></a>`).join('\n')}
				</div>
			</div>
		</div>
	</div>
	<!-- top strip end -->`;
}

/* White sticky navbar with the course search and the apply CTA. */
function header(active) {
	const links = NAV.map((item) => {
		const cls = item.key === active ? ' class="is-active"' : '';
		return `				<li><a href="${item.href}"${cls}>${item.label}</a></li>`;
	}).join('\n');
	const mobileLinks = NAV.concat([{ href: 'login.html', label: 'Portal login', key: 'login' }])
		.map((item) => {
			const cls = item.key === active ? ' class="is-active"' : '';
			return `				<a href="${item.href}"${cls}>${item.label}<i class="fa fa-angle-right"></i></a>`;
		}).join('\n');

	return `${topStrip()}

	<!-- header -->
	<header class="xg-header">
		<div class="container">
			<div class="xg-nav">
				<a href="index.html" class="xg-brand" aria-label="Eastport International Training College home">
					<img src="img/logo-dark.svg" alt="Eastport International Training College">
				</a>
				<ul class="xg-nav-links">
${links}
				</ul>
				<div class="xg-nav-actions">
					<form class="xg-search xg-search--desktop" action="courses.html" role="search">
						<input type="text" name="q" placeholder="Search for a course..." aria-label="Search for a course">
						<button type="submit" aria-label="Search"><i class="fa fa-search"></i></button>
					</form>
					<a href="login.html" class="xg-btn xg-btn--outline xg-btn--sm xg-login-btn">Portal login</a>
					<a href="apply.html" class="xg-btn xg-btn--sm">Apply now <span class="xg-arrow">&rsaquo;</span></a>
					<button type="button" class="xg-nav-toggle" aria-expanded="false" aria-controls="xg-mobile-nav" aria-label="Open menu" data-nav-toggle>
						<i class="fa fa-bars"></i>
					</button>
				</div>
				<div class="xg-mobile-nav" id="xg-mobile-nav">
${mobileLinks}
					<form class="xg-search" action="courses.html" role="search">
						<input type="text" name="q" placeholder="Search for a course..." aria-label="Search for a course">
						<button type="submit" aria-label="Search"><i class="fa fa-search"></i></button>
					</form>
					<div class="xg-mobile-cta">
						<a href="login.html" class="xg-btn xg-btn--outline xg-btn--sm">Portal login</a>
						<a href="apply.html" class="xg-btn xg-btn--sm">Apply now</a>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- header end -->`;
}

function footer() {
	const socials = SOCIALS.map((s) =>
		`					<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="fa ${s.icon}"></i></a>`).join('\n');

	return `	<!-- footer section -->
	<footer class="xg-footer">
		<div class="container">
			<div class="xg-footer-grid">
				<div>
					<a href="index.html" class="xg-footer-brand" aria-label="Eastport International Training College home">
						<img src="img/logo-white.svg" alt="Eastport International Training College">
					</a>
					<p>TVETA-registered TVET college at Chai Plaza 2nd Floor, Kericho CBD. 253 approved programmes across eleven faculties, with a guaranteed three-month industrial attachment.</p>
					<div class="xg-footer-social">
${socials}
					</div>
				</div>
				<div>
					<h4>Explore</h4>
					<ul>
						<li><a href="about.html">About Eastport</a></li>
						<li><a href="courses.html">All programmes</a></li>
						<li><a href="blog.html">News &amp; notices</a></li>
						<li><a href="apply.html">Apply online</a></li>
						<li><a href="contact.html">Contact admissions</a></li>
					</ul>
				</div>
				<div>
					<h4>Faculties</h4>
					<ul>
						<li><a href="courses.html?faculty=health">Health Sciences</a></li>
						<li><a href="courses.html?faculty=ict">ICT &amp; Computing</a></li>
						<li><a href="courses.html?faculty=business">Business Studies</a></li>
						<li><a href="courses.html?faculty=technical">Technical Studies</a></li>
						<li><a href="courses.html?faculty=hospitality">Hospitality &amp; Tourism</a></li>
					</ul>
				</div>
				<div>
					<h4>Stay in touch</h4>
					<ul class="xg-footer-contact">
						<li><i class="fa fa-map-marker"></i><span>${SITE.campus}</span></li>
						<li><i class="fa fa-phone"></i><a href="${SITE.tel}">${SITE.phone}</a></li>
						<li><i class="fa fa-envelope-o"></i><a href="mailto:${SITE.email}">${SITE.email}</a></li>
						<li><i class="fa fa-clock-o"></i><span>${SITE.hours}</span></li>
					</ul>
					<form class="xg-newsletter" data-demo-form data-success="Thank you. You are subscribed to the Eastport admissions and academic gazette.">
						<input type="email" placeholder="Your e-mail" aria-label="Your e-mail" required>
						<button class="xg-btn xg-btn--sm" type="submit">Join</button>
						<div class="xg-alert" role="status"></div>
					</form>
					<p style="font-size:11px;margin:0;color:rgba(255,255,255,.42)">*We don’t spam. Unsubscribe any time.</p>
				</div>
			</div>
			<div class="xg-footer-bar">
				<span>Copyright &copy; <span data-year>2026</span> ${SITE.name}. All rights reserved. | ${SITE.examCentres}</span>
				<div class="xg-footer-links">
					<a href="versions.html">Compare designs</a>
					<a href="contact.html">Terms &amp; Conditions</a>
					<a href="contact.html">Privacy</a>
					<a href="login.html">Student portal</a>
				</div>
			</div>
		</div>
	</footer>
	<!-- footer section end -->`;
}

function scripts() {
	return `	<!--====== Javascripts & Jquery ======-->
${scriptTags()}
</body>
</html>`;
}

function layout({ title, description, active, body, bodyClass = '', noHeader = false, noFooter = false, extraStyles = [], ogImage = '' }) {
	return [
		head({ title, description, bodyClass, extraStyles, ogImage }),
		noHeader ? '' : header(active),
		body,
		noFooter ? '' : footer(),
		scripts()
	].join('\n');
}

/* Interior page banner: breadcrumb, title, lead on the left and a white
   facts card on the right. */
function pageInfo({ image, crumb, title, lead, card }) {
	const panel = card || {
		title: 'Talk to admissions',
		text: 'Chai Plaza 2nd Floor, Kenyatta Street, Kericho CBD — walk in any weekday.',
		items: [
			{ icon: 'fa-phone', html: `<a href="${SITE.tel}">${SITE.phone}</a>` },
			{ icon: 'fa-whatsapp', html: `<a href="${SITE.whatsapp}" target="_blank" rel="noopener">WhatsApp admissions</a>` },
			{ icon: 'fa-envelope-o', html: `<a href="mailto:${SITE.email}">${SITE.email}</a>` }
		],
		cta: { href: 'apply.html', label: 'Start your application' }
	};

	const items = (panel.items || []).map((item) =>
		`						<li><i class="fa ${item.icon}"></i><span>${item.html}</span></li>`).join('\n');
	const cta = panel.cta
		? `\n					<a href="${panel.cta.href}" class="xg-btn">${panel.cta.label} <span class="xg-arrow">&rsaquo;</span></a>`
		: '';

	const bannerStyle = image
		? ` style="background-image:linear-gradient(135deg, rgba(240,246,255,.97) 0%, rgba(255,255,255,.9) 62%), url(${image});background-size:cover;background-position:center right;"`
		: '';

	return `	<!-- page banner -->
	<section class="xg-banner"${bannerStyle}>
		<div class="container">
			<div class="xg-banner-grid">
				<div>
					<nav class="xg-crumbs" aria-label="Breadcrumb">
						<a href="index.html">Home</a>
						<i class="fa fa-angle-right"></i>
						<span>${crumb}</span>
					</nav>
					<h1>${title}</h1>
${lead ? `					<p class="xg-banner-lead">${lead}</p>\n` : ''}				</div>
				<aside class="xg-banner-card">
					<h3>${panel.title}</h3>
${panel.text ? `					<p>${panel.text}</p>\n` : ''}					<ul class="xg-banner-list">
${items}
					</ul>${cta}
				</aside>
			</div>
		</div>
	</section>
	<!-- page banner end -->`;
}

function stats() {
	const items = [
		['253+', 'Approved Courses'],
		['100%', 'TVETA &amp; KNEC Certified'],
		['11', 'Specialised Faculties'],
		['98%', 'Attachment Placement']
	];
	return `	<!-- stats -->
	<section class="xg-sec xg-sec--tight">
		<div class="container">
			<div class="xg-stats">
${items.map(([value, label]) => `				<div class="xg-stat"><strong>${value}</strong><span>${label}</span></div>`).join('\n')}
			</div>
		</div>
	</section>
	<!-- stats end -->`;
}

/* Full CTA band that closes most pages. */
function ctaBlock({
	eyebrow = 'Talk with real humans — not an automated bot',
	title = 'Need guidance on courses, grades or fees?',
	text = 'Whether you are asking about minimum KCSE entry grades, applying for the Kericho County bursary fund, or setting up a flexible three-part fee instalment, Sharon and our admissions team are ready to sit with you or chat directly.'
} = {}) {
	return `	<!-- cta -->
	<section class="xg-cta">
		<div class="container">
			<div class="xg-cta-grid">
				<div>
					<span class="xg-eyebrow">${eyebrow}</span>
					<h2>${title}</h2>
					<p>${text}</p>
				</div>
				<div class="xg-cta-actions">
					<a href="${SITE.whatsapp}" class="xg-btn xg-btn--ghost" target="_blank" rel="noopener"><i class="fa fa-whatsapp"></i> WhatsApp admissions</a>
					<a href="apply.html" class="xg-btn">Start your application <span class="xg-arrow">&rsaquo;</span></a>
				</div>
			</div>
		</div>
	</section>
	<!-- cta end -->`;
}

function banner({ title = 'Join Our Community Now!', text = 'Applications for the January 2027 intake are open across all eleven faculties. Secure your place with a 40% deposit and pay the balance in three flexible instalments.', cta = 'Register Now', href = 'apply.html' }) {
	return `	<!-- banner -->
	<section class="xg-cta">
		<div class="container">
			<div class="xg-cta-grid">
				<div>
					<span class="xg-eyebrow">Admissions open</span>
					<h2>${title}</h2>
					<p>${text}</p>
				</div>
				<div class="xg-cta-actions">
					<a href="${href}" class="xg-btn">${cta} <span class="xg-arrow">&rsaquo;</span></a>
					<a href="contact.html" class="xg-btn xg-btn--ghost">Talk to admissions</a>
				</div>
			</div>
		</div>
	</section>
	<!-- banner end -->`;
}

/* Photo grid used at the foot of the home and about pages. */
function gallery({ title, text, items }) {
	const tiles = items.map((item) => {
		const caption = item.caption ? `\n					<figcaption>${item.caption}</figcaption>` : '';
		return `				<figure>
					<img src="${item.image}" alt="${item.caption || 'Eastport International Training College campus'}">${caption}
				</figure>`;
	}).join('\n');

	return `	<!-- gallery -->
	<section class="xg-sec">
		<div class="container">
			<div class="xg-head xg-head--center">
				<h2>${title}</h2>
				<p>${text}</p>
			</div>
			<div class="xg-gallery">
${tiles}
			</div>
		</div>
	</section>
	<!-- gallery end -->`;
}

module.exports = {
	SITE,
	NAV,
	SOCIALS,
	VERSION,
	layout,
	head,
	header,
	footer,
	scriptTags,
	pageInfo,
	stats,
	ctaBlock,
	banner,
	gallery
};
