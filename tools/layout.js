/* Shared layout helpers for the Eastport static site build */
'use strict';

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

const NAV = [
	{ href: 'index.html', label: 'Home', key: 'home' },
	{ href: 'about.html', label: 'About us', key: 'about' },
	{ href: 'courses.html', label: 'Courses', key: 'courses' },
	{ href: 'blog.html', label: 'News', key: 'news' },
	{ href: 'contact.html', label: 'Contact', key: 'contact' }
];

function head({ title, description, bodyClass = '', extraStyles = [] }) {
	const styleTags = extraStyles.map((href) => `\t<link rel="stylesheet" href="${href}"/>`).join('\n');
	return `<!DOCTYPE html>
<html lang="en">
<head>
	<title>${title}</title>
	<meta charset="UTF-8">
	<meta name="description" content="${description}">
	<meta name="keywords" content="Eastport International Training College, Kericho, TVET, KNEC, CDACC, diploma, certificate, artisan, student portal">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta property="og:title" content="${title}">
	<meta property="og:description" content="${description}">
	<meta property="og:type" content="website">
	<meta name="theme-color" content="#24246a">
	<link href="img/favicon.ico" rel="shortcut icon"/>
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,500,500i,600,600i,700,700i,800,800i" rel="stylesheet">
	<link rel="stylesheet" href="css/bootstrap.min.css"/>
	<link rel="stylesheet" href="css/font-awesome.min.css"/>
	<link rel="stylesheet" href="css/owl.carousel.css"/>
	<link rel="stylesheet" href="css/style.css"/>
	<link rel="stylesheet" href="css/eastport.css"/>
${styleTags}
</head>
<body class="${bodyClass}">`;
}

function header(active) {
	const items = NAV.map((item) => {
		const cls = item.key === active ? ' class="active"' : '';
		return `\t\t\t\t\t\t\t<li><a href="${item.href}"${cls}>${item.label}</a></li>`;
	}).join('\n');

	return `	<!-- Header section -->
	<header class="header-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-4 col-8">
					<a href="index.html" class="site-logo" aria-label="Eastport International Training College home">
						<img src="img/logo-white.svg" alt="Eastport International Training College">
					</a>
					<div class="nav-switch">
						<i class="fa fa-bars"></i>
					</div>
				</div>
				<div class="col-lg-9 col-md-8 col-4">
					<a href="login.html" class="site-btn header-btn">Portal Login</a>
					<a href="${SITE.tel}" class="header-phone"><i class="fa fa-phone"></i>${SITE.phone}</a>
					<nav class="main-menu">
						<ul>
${items}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
	<!-- Header section end -->`;
}

function footer() {
	return `	<!-- footer section -->
	<footer class="footer-section spad pb-0">
		<div class="footer-top">
			<div class="footer-warp">
				<div class="row">
					<div class="widget-item">
						<h4>Contact Info</h4>
						<ul class="contact-list">
							<li>${SITE.campus}</li>
							<li><a href="${SITE.tel}">${SITE.phone}</a></li>
							<li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
						</ul>
					</div>
					<div class="widget-item">
						<h4>Faculties</h4>
						<ul>
							<li><a href="courses.html?faculty=health">Health Sciences</a></li>
							<li><a href="courses.html?faculty=ict">ICT &amp; Computing</a></li>
							<li><a href="courses.html?faculty=business">Business Studies</a></li>
							<li><a href="courses.html?faculty=technical">Technical Studies</a></li>
							<li><a href="courses.html?faculty=hospitality">Hospitality &amp; Tourism</a></li>
						</ul>
					</div>
					<div class="widget-item">
						<h4>Programmes</h4>
						<ul>
							<li><a href="single-course.html?p=diploma-food-beverage">Food &amp; Beverage</a></li>
							<li><a href="single-course.html?p=diploma-ict-networking">ICT &amp; Networking</a></li>
							<li><a href="single-course.html?p=diploma-nursing-assistant">Community Health</a></li>
							<li><a href="single-course.html?p=kasneb-cpa">KASNEB CPA</a></li>
							<li><a href="single-course.html?p=icdl">ICDL Digital Skills</a></li>
						</ul>
					</div>
					<div class="widget-item">
						<h4>Quick Links</h4>
						<ul>
							<li><a href="apply.html">Apply online</a></li>
							<li><a href="login.html">Student portal</a></li>
							<li><a href="about.html">About Eastport</a></li>
							<li><a href="blog.html">News &amp; notices</a></li>
							<li><a href="contact.html">Talk to admissions</a></li>
						</ul>
					</div>
					<div class="widget-item">
						<h4>Newsletter</h4>
						<form class="footer-newslatter" data-demo-form data-success="Thank you. You are subscribed to the Eastport admissions and academic gazette.">
							<input type="email" placeholder="E-mail" required>
							<button class="site-btn" type="submit">Subscribe</button>
							<p>*We don’t spam</p>
							<div class="ep-alert" role="status"></div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="footer-warp">
				<ul class="footer-menu">
					<li><a href="contact.html">Terms &amp; Conditions</a></li>
					<li><a href="apply.html">Register</a></li>
					<li><a href="contact.html">Privacy</a></li>
				</ul>
				<div class="copyright">
					Copyright &copy; <span data-year>2026</span> ${SITE.name}. All rights reserved. | ${SITE.examCentres}
				</div>
			</div>
		</div>
	</footer>
	<!-- footer section end -->

	<!--====== Javascripts & Jquery ======-->
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/data.js"></script>
	<script src="js/app.js"></script>
</body>
</html>`;
}

function layout({ title, description, active, body, bodyClass = '', noHeader = false, extraStyles = [] }) {
	return [
		head({ title, description, bodyClass, extraStyles }),
		noHeader ? '' : header(active),
		body,
		footer()
	].join('\n');
}

function pageInfo({ image, crumb, title }) {
	return `	<!-- Page info -->
	<div class="page-info-section set-bg" data-setbg="${image}" style="background-image:url(${image})">
		<div class="container">
			<div class="site-breadcrumb">
				<a href="index.html">Home</a>
				<span>${crumb}</span>
				<h1 class="ep-page-title">${title}</h1>
			</div>
		</div>
	</div>
	<!-- Page info end -->`;
}

function stats() {
	return `	<!-- stats -->
	<section class="ep-stats">
		<div class="container">
			<div class="row">
				<div class="col-6 col-lg-3">
					<div class="ep-stat">
						<h3>253<span>+</span></h3>
						<p>Approved Courses</p>
					</div>
				</div>
				<div class="col-6 col-lg-3">
					<div class="ep-stat">
						<h3>100<span>%</span></h3>
						<p>TVETA &amp; KNEC Certified</p>
					</div>
				</div>
				<div class="col-6 col-lg-3">
					<div class="ep-stat">
						<h3>11</h3>
						<p>Specialised Faculties</p>
					</div>
				</div>
				<div class="col-6 col-lg-3">
					<div class="ep-stat">
						<h3>98<span>%</span></h3>
						<p>Attachment Placement</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- stats end -->`;
}

function ctaBlock() {
	return `	<!-- contact block -->
	<section class="ep-contact-block">
		<div class="container text-center text-white">
			<span class="ep-uppercase">Talk with real humans — not an automated bot</span>
			<h2>Need guidance on courses, grades or fees?</h2>
			<p>Whether you are asking about minimum KCSE entry grades, applying for the Kericho County bursary fund, or setting up a flexible three-part fee instalment, Sharon and our admissions team are ready to sit with you or chat directly.</p>
			<ul class="ep-contact-meta">
				<li><i class="fa fa-map-marker"></i>Chai Plaza 2nd Floor, Kericho</li>
				<li><i class="fa fa-clock-o"></i>${SITE.hours}</li>
				<li><i class="fa fa-phone"></i>${SITE.phone}</li>
			</ul>
			<a href="${SITE.whatsapp}" class="site-btn" target="_blank" rel="noopener"><i class="fa fa-whatsapp"></i>&nbsp; WhatsApp Admissions</a>
			<a href="apply.html" class="site-btn btn-white">Start your application</a>
		</div>
	</section>
	<!-- contact block end -->`;
}

function banner({ title = 'Join Our Community Now!', text = 'Applications for the January 2027 intake are open across all eleven faculties. Secure your place with a 40% deposit and pay the balance in three flexible instalments.', cta = 'Register Now', href = 'apply.html' }) {
	return `	<!-- banner section -->
	<section class="banner-section spad">
		<div class="container">
			<div class="section-title mb-0 pb-2">
				<h2>${title}</h2>
				<p>${text}</p>
			</div>
			<div class="text-center pt-5">
				<a href="${href}" class="site-btn">${cta}</a>
			</div>
		</div>
	</section>
	<!-- banner section end -->`;
}

module.exports = { SITE, NAV, layout, head, header, footer, pageInfo, stats, ctaBlock, banner };
