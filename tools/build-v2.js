#!/usr/bin/env node
/* Builds VERSION B (university-style website + eLearning) into /v2/.
   Usage: node tools/build-v2.js  (also called by tools/build.js) */
'use strict';

const fs = require('fs');
const path = require('path');

const { EP, SITE, LEVELS, levelCount, mPage, ePage } = require('./v2');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'v2');

/* ---------------------------------------------------------------
   Marketing site — home
   --------------------------------------------------------------- */

const SLIDES = [
	{
		image: '../img/bg.jpg',
		tag: 'January 2027 intake',
		title: 'Real practical skills in the heart of Kericho',
		text: 'Eastport International Training College trains 2,400 students a year at Chai Plaza, Second Floor — a two-minute walk from the Kericho matatu stage. TVETA registered, KNEC and CDACC examination centre 401002.',
		primary: { href: '../apply.html', label: 'Apply Now' },
		secondary: { href: '#programmes', label: 'Learn More' }
	},
	{
		image: '../img/page-bg/1.jpg',
		tag: 'TVETA &amp; KNEC accredited',
		title: '253 approved programmes across eleven faculties',
		text: 'From community health and nursing assistant practice to ICT, business, hospitality, solar installation and international courses — every qualification is examined by KNEC, CDACC or an international awarding body.',
		primary: { href: '../courses.html', label: 'Explore Programmes' },
		secondary: { href: '#admissions', label: 'Talk to Admissions' }
	},
	{
		image: '../img/page-bg/3.jpg',
		tag: 'Applied learning',
		title: 'Train in working labs, not just classrooms',
		text: 'Clinical simulation and phlebotomy labs, a live cyber range, a working restaurant and pastry hub, and a solar workshop. Every diploma carries a guaranteed three-month industrial attachment.',
		primary: { href: '../about.html', label: 'Learn More' },
		secondary: { href: '../contact.html', label: 'Book a campus visit' }
	},
	{
		image: '../img/signup-bg.jpg',
		tag: 'Flexible study modes',
		title: 'Morning, afternoon or evening streams',
		text: 'Study around work and family. Fees are payable in three instalments per term, and the admissions desk will help you pick a stream that fits your day.',
		primary: { href: '../apply.html', label: 'Apply Now' },
		secondary: { href: '#admissions', label: 'Request information' }
	}
];

function heroSlides() {
	return SLIDES.map((slide, index) => `<div class="u-slide${index === 0 ? ' is-live' : ''}" style="background-image:url('${slide.image}')">
			<div class="u-slide-body">
				<div class="u-wrap">
					<div class="u-slide-inner">
						<span class="u-slide-tag">${slide.tag}</span>
						<h1>${slide.title}</h1>
						<p>${slide.text}</p>
						<div class="u-slide-actions">
							<a class="u-btn u-btn-gold" href="${slide.primary.href}">${slide.primary.label}</a>
							<a class="u-btn u-btn-outline-white" href="${slide.secondary.href}">${slide.secondary.label}</a>
						</div>
					</div>
				</div>
			</div>
		</div>`).join('\n\t\t');
}

function hero() {
	const dots = SLIDES.map((_, index) => `<button type="button"${index === 0 ? ' class="is-live"' : ''} aria-label="Slide ${index + 1}" aria-selected="${index === 0}"></button>`).join('\n\t\t\t');
	return `<section class="u-hero" data-hero aria-label="Highlights">
		${heroSlides()}
		<div class="u-hero-dots" role="tablist">
			${dots}
		</div>
		<button class="u-hero-arrow prev" type="button" aria-label="Previous slide"><i class="fa fa-angle-left"></i></button>
		<button class="u-hero-arrow next" type="button" aria-label="Next slide"><i class="fa fa-angle-right"></i></button>
	</section>`;
}

const QUICK = [
	{ href: '../login.html', icon: 'fa-id-card-o', label: 'Student Portal' },
	{ href: 'login.html', icon: 'fa-laptop', label: 'eLearning' },
	{ href: '../courses.html', icon: 'fa-book', label: 'Course Catalogue' },
	{ href: '../apply.html', icon: 'fa-pencil-square-o', label: 'Apply Online' },
	{ href: '../contact.html', icon: 'fa-map-marker', label: 'Visit Campus' }
];

function quickStrip() {
	const items = QUICK.map((item) => `<a href="${item.href}"><i class="fa ${item.icon}"></i> ${item.label}</a>`).join('\n\t\t\t');
	return `<section class="u-quick" aria-label="Online resources">
		<div class="u-wrap">
			<div class="u-quick-grid">
				${items}
			</div>
		</div>
	</section>`;
}

function levels() {
	const cards = LEVELS.map((level) => `<div class="u-level">
					<div class="u-level-media" style="background-image:url('${level.image}')"></div>
					<div class="u-level-body">
					<div class="u-level-top">
						<h3><i class="fa ${level.icon}" style="color:var(--u-gold-dark);margin-right:8px"></i> ${level.title}</h3>
						<span class="u-level-count">${levelCount(level.key)} online</span>
					</div>
					<p>${level.blurb}</p>
					<a class="u-level-link" href="courses.html?level=${level.key.toLowerCase()}">View programmes <i class="fa fa-angle-right"></i></a>
					</div>
				</div>`).join('\n\t\t\t\t');

	return `<section class="u-section" id="programmes">
		<div class="u-wrap">
			<div class="u-head u-center">
				<span class="u-eyebrow">Our Programmes</span>
				<h2>Every level from artisan to international diploma</h2>
				<p><strong>Eastport International Training College</strong> has opportunities for every learner — artisan and craft trades, certificates, diplomas, professional KASNEB and CHRP awards, and internationally benchmarked courses. Students can enrol in <strong>three intakes</strong>: <strong>January</strong>, <strong>May</strong> and <strong>September</strong>. Twenty-four of them carry full details online today — the rest are available from the admissions desk.</p>
			</div>
			<div class="u-levels">
				${cards}
				<div class="u-level" style="background:var(--u-gold-tint);border-color:var(--u-gold)">
					<div class="u-level-media" style="background-image:url('../img/signup-bg.jpg')"></div>
					<div class="u-level-body">
					<div class="u-level-top">
						<h3>Not sure where to start?</h3>
					</div>
					<p>Send us your KCSE grade and interests — the admissions desk will shortlist three programmes and their fee plans for you.</p>
					<a class="u-level-link" href="#admissions">Request free advice <i class="fa fa-angle-right"></i></a>
					</div>
				</div>
			</div>
			<div class="u-programme-actions">
				<a class="u-btn u-btn-navy" href="../apply.html">Apply online</a>
				<a class="u-btn u-btn-ghost" href="../courses.html">Download application form</a>
			</div>
		</div>
	</section>`;
}


const GALLERY = [
	'../img/courses/5.jpg',
	'../img/courses/f-1.jpg',
	'../img/categories/4.jpg',
	'../img/courses/3.jpg',
	'../img/courses/f-2.jpg',
	'../img/categories/6.jpg',
	'../img/blog/3.jpg',
	'../img/courses/7.jpg',
	'../img/courses/6.jpg'
];

function campusGallery() {
	const tiles = GALLERY.map((image) => `<figure class="u-shot" style="background-image:url('${image}')"></figure>`).join('\n\t\t\t\t');

	return `<section class="u-section u-section-mist" id="campus">
		<div class="u-wrap">
			<div class="u-head u-center">
				<span class="u-eyebrow">Campus life</span>
				<h2>Campus in pictures</h2>
				<p>Classrooms, computer suites, the training kitchen, workshops, the salon and the study areas students use between lessons — all at Chai Plaza on Kenyatta Street.</p>
			</div>
			<div class="u-gallery">
				${tiles}
			</div>
		</div>
	</section>`;
}

function statsBand() {
	return `<section class="u-stats" aria-label="Eastport in numbers">
		<div class="u-wrap">
			<div class="u-stats-grid">
				<div class="u-stat"><strong>253+</strong><span>Approved programmes</span></div>
				<div class="u-stat"><strong>11</strong><span>Specialised faculties</span></div>
				<div class="u-stat"><strong>98%</strong><span>Attachment placement</span></div>
				<div class="u-stat"><strong>100%</strong><span>TVETA &amp; KNEC certified</span></div>
			</div>
		</div>
	</section>`;
}

function enquiry() {
	const categories = LEVELS.map((level) => `<option value="${level.key.toLowerCase()}">${level.title.replace('&amp;', '&')}</option>`).join('\n\t\t\t\t\t\t\t');
	const programmeOptions = EP.programmes
		.map((programme) => `<option value="${programme.title}" data-level="${programme.level.toLowerCase()}">${programme.title}</option>`)
		.join('\n\t\t\t\t\t\t\t\t');

	return `<section class="u-section u-enquiry" id="admissions">
		<div class="u-wrap">
			<div class="u-enquiry-grid">
				<div>
					<span class="u-eyebrow">Request free information</span>
					<h2>For courses and admission</h2>
					<p>Tell us what you would like to study and the admissions desk will call or WhatsApp you back within one working day — including the current fee structure and the intake dates.</p>
					<ul class="u-enquiry-list">
						<li><i class="fa fa-map-marker"></i><span>${SITE.campus}</span></li>
						<li><i class="fa fa-phone"></i><span>${SITE.phone} — calls and WhatsApp</span></li>
						<li><i class="fa fa-envelope-o"></i><span>${SITE.email}</span></li>
						<li><i class="fa fa-clock-o"></i><span>${SITE.hours}</span></li>
					</ul>
				</div>
				<div class="u-form-card">
					<h3>Request FREE information</h3>
					<p>No obligation — we only use your details to answer this enquiry.</p>
					<form data-enquiry-form novalidate>
						<div class="u-field">
							<label for="ep-cat">Programme category *</label>
							<select id="ep-cat" name="category" data-category required>
								<option value="">Select programme category</option>
								${categories}
							</select>
						</div>
						<div class="u-field">
							<label for="ep-prog">Programme *</label>
							<select id="ep-prog" name="programme" data-programme required>
								<option value="">Choose a category first</option>
								${programmeOptions}
							</select>
						</div>
						<div class="u-field-row">
							<div class="u-field">
								<label for="ep-name">Full name *</label>
								<input id="ep-name" type="text" name="name" placeholder="As on your ID" required>
							</div>
							<div class="u-field">
								<label for="ep-email">E-mail address *</label>
								<input id="ep-email" type="email" name="email" placeholder="you@example.com" required>
							</div>
						</div>
						<div class="u-field">
							<label for="ep-wa">WhatsApp number *</label>
							<input id="ep-wa" type="tel" name="whatsapp" placeholder="07xx xxx xxx" required>
						</div>
						<div class="u-field">
							<label for="ep-inquiry">Your inquiry *</label>
							<textarea id="ep-inquiry" name="inquiry" placeholder="Intake, fees, study mode or anything else" required></textarea>
						</div>
						<label class="u-check">
							<input type="checkbox" required>
							<span>I confirm these details are correct and consent to Eastport contacting me about my application.</span>
						</label>
						<button class="u-btn u-btn-navy" type="submit" style="width:100%">Submit request</button>
						<div class="u-alert" role="status"></div>
						<p class="u-form-note">${SITE.examCentres}</p>
					</form>
				</div>
			</div>
		</div>
	</section>`;
}

function talkBand() {
	return `<section class="u-section">
		<div class="u-wrap">
			<div class="u-talk-grid">
				<div class="u-talk-media" style="background-image:url('../img/page-bg/4.jpg')">
					<div class="u-talk-badge"><strong>98%</strong><span>Attachment placement</span></div>
				</div>
				<div>
					<h2>Let's talk about studying at Eastport</h2>
					<p>Eastport combines trade practice with management and technology in every programme, and our trainers are practising nurses, chefs, network engineers and accountants. The aim is simple: every graduate leaves with the hands-on competence, communication and problem-solving skills that Kericho employers are hiring for.</p>
					<p>Classes run in three streams, attachment letters are processed by the placement office, and the bursary desk helps students apply for county and national funding.</p>
					<ul class="u-enquiry-list" style="margin-bottom:26px">
						<li style="color:var(--u-body)"><i class="fa fa-check" style="color:var(--u-gold-dark)"></i><span>TVETA registered · KNEC 518112 · CDACC 0350007</span></li>
						<li style="color:var(--u-body)"><i class="fa fa-check" style="color:var(--u-gold-dark)"></i><span>Three intakes a year — January, May and September</span></li>
						<li style="color:var(--u-body)"><i class="fa fa-check" style="color:var(--u-gold-dark)"></i><span>Fees payable in three instalments per term</span></li>
					</ul>
					<a class="u-btn u-btn-ghost" href="../about.html">Learn More</a>
				</div>
			</div>
		</div>
	</section>`;
}

function testimonials() {
	const quotes = EP.testimonials.slice(0, 4).map((item) => `<div class="u-quote">
					<div class="u-quote-top">
						<img src="../${item.image}" alt="${item.name}">
						<div>
							<strong>${item.name}</strong>
							<span>${item.course || item.programme || 'Eastport graduate'}</span>
						</div>
					</div>
					<div class="u-stars" aria-label="5 out of 5">★★★★★</div>
					<p>“${item.quote}”</p>
					<div class="u-quote-source"><i class="fa fa-google"></i> Posted on Google · verified review</div>
				</div>`).join('\n\t\t\t\t');

	return `<section class="u-section u-section-mist">
		<div class="u-wrap">
			<div class="u-head u-center">
				<span class="u-eyebrow">Student testimonials</span>
				<h2>What our students say</h2>
				<p>Reviews from Eastport students and graduates in Kericho, Bomet, Nandi and Kisumu.</p>
			</div>
			<div class="u-quotes">
				${quotes}
			</div>
		</div>
	</section>`;
}

function news() {
	const cards = EP.news.slice(0, 3).map((item) => `<article class="u-news-card">
					<a class="u-news-media" href="../blog.html" style="background-image:url('../${item.image}')" aria-label="${item.title}">
						<span class="u-news-date">${item.date}</span>
					</a>
					<div class="u-news-body">
						<h3><a href="../blog.html">${item.title}</a></h3>
						<p>${item.excerpt || item.summary || ''}</p>
						<a class="u-news-more" href="../blog.html">Read More <i class="fa fa-angle-right"></i></a>
					</div>
				</article>`).join('\n\t\t\t\t');

	return `<section class="u-section" id="news">
		<div class="u-wrap">
			<div class="u-head u-head-row" style="max-width:none;display:flex;justify-content:space-between;align-items:flex-end;gap:20px;flex-wrap:wrap">
				<div>
					<span class="u-eyebrow">Campus news</span>
					<h2 style="margin-bottom:0">Latest from Eastport</h2>
				</div>
				<a class="u-btn u-btn-ghost" href="../blog.html">All news</a>
			</div>
			<div class="u-news-grid">
				${cards}
			</div>
		</div>
	</section>`;
}

function marketingHome() {
	const body = `${hero()}
${quickStrip()}
${levels()}
${statsBand()}
${campusGallery()}
${enquiry()}
${talkBand()}
${testimonials()}
${news()}`;

	return mPage({
		title: 'Eastport International Training College | TVETA & KNEC Centre 401002 — Kericho',
		description: 'Eastport International Training College at Chai Plaza, Kericho CBD. 253 TVETA-approved, KNEC and CDACC certified programmes across 11 faculties with guaranteed three-month attachment.',
		active: 'home',
		body,
		withModal: true
	});
}

/* ---------------------------------------------------------------
   eLearning — login
   --------------------------------------------------------------- */

/* The eLearning login uses the same shell as the main site so both portals
   read as one product: royal-blue top strip, white navbar, navy footer. */
function v2Header() {
	const links = [
		['../index.html', 'Home'],
		['../about.html', 'About us'],
		['../courses.html', 'Courses'],
		['../blog.html', 'News'],
		['../contact.html', 'Contact']
	].map(([href, label]) => `\t\t\t\t\t<li><a href="${href}">${label}</a></li>`).join('\n');

	return `\t<div class="xg-topstrip">
\t\t<div class="container">
\t\t\t<div class="xg-topstrip-left">
\t\t\t\t<a href="${SITE.tel}"><i class="fa fa-phone"></i>${SITE.phone}</a>
\t\t\t\t<span class="xg-topstrip-sep">|</span>
\t\t\t\t<span><i class="fa fa-graduation-cap"></i>Eastport eLearning System</span>
\t\t\t</div>
\t\t\t<div class="xg-topstrip-right">
\t\t\t\t<a href="../login.html">Portal login</a>
\t\t\t\t<span class="xg-topstrip-sep">|</span>
\t\t\t\t<a href="../index.html">College website</a>
\t\t\t</div>
\t\t</div>
\t</div>
\t<header class="xg-header">
\t\t<div class="container">
\t\t\t<div class="xg-nav">
\t\t\t\t<a href="../index.html" class="xg-brand" aria-label="Eastport International Training College home">
\t\t\t\t\t<img src="../img/logo-dark.svg" alt="Eastport International Training College">
\t\t\t\t</a>
\t\t\t\t<ul class="xg-nav-links">
${links}
\t\t\t\t\t<li><a href="login.html" class="is-active">eLearning</a></li>
\t\t\t\t</ul>
\t\t\t\t<div class="xg-nav-actions">
\t\t\t\t\t<form class="xg-search xg-search--desktop" action="../courses.html" role="search">
\t\t\t\t\t\t<input type="text" name="q" placeholder="Search for a course..." aria-label="Search for a course">
\t\t\t\t\t\t<button type="submit" aria-label="Search"><i class="fa fa-search"></i></button>
\t\t\t\t\t</form>
\t\t\t\t\t<a href="../apply.html" class="xg-btn xg-btn--sm">Apply now <span class="xg-arrow">&rsaquo;</span></a>
\t\t\t\t\t<button type="button" class="xg-nav-toggle" aria-expanded="false" aria-controls="xg-mobile-nav" aria-label="Open menu" data-nav-toggle>
\t\t\t\t\t\t<i class="fa fa-bars"></i>
\t\t\t\t\t</button>
\t\t\t\t</div>
\t\t\t\t<div class="xg-mobile-nav" id="xg-mobile-nav">
\t\t\t\t\t<a href="../index.html">Home<i class="fa fa-angle-right"></i></a>
\t\t\t\t\t<a href="../about.html">About us<i class="fa fa-angle-right"></i></a>
\t\t\t\t\t<a href="../courses.html">Courses<i class="fa fa-angle-right"></i></a>
\t\t\t\t\t<a href="../blog.html">News<i class="fa fa-angle-right"></i></a>
\t\t\t\t\t<a href="../contact.html">Contact<i class="fa fa-angle-right"></i></a>
\t\t\t\t\t<a href="../login.html">Portal login<i class="fa fa-angle-right"></i></a>
\t\t\t\t\t<div class="xg-mobile-cta">
\t\t\t\t\t\t<a href="../login.html" class="xg-btn xg-btn--outline xg-btn--sm">Portal login</a>
\t\t\t\t\t\t<a href="../apply.html" class="xg-btn xg-btn--sm">Apply now</a>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</header>`;
}

function loginPage() {
	const body = `${v2Header()}
	<main id="maincontent">
		<section class="xl-wrap">
			<div class="container">
				<div class="xl-grid">
					<div class="xl-left">
						<div class="xl-copy">
							<span class="xg-eyebrow">Eastport eLearning · Kericho</span>
							<h1>One portal for <span>every Eastport learner.</span></h1>
							<p>The eLearning system uses the same account as the college website portal. Sign in once to reach your notes, assignments, results and fee statement.</p>
							<ul class="xl-flist">
								<li><strong>Course notes and recorded lessons</strong></li>
								<li><strong>Assignments with submission dates</strong></li>
								<li><strong>Results, transcripts and fee statements</strong></li>
								<li><strong>Attachment letters for your employer</strong></li>
							</ul>
							<div class="xg-hero-btns">
								<a href="../apply.html" class="xg-btn">Apply for January 2027 <i class="fa fa-angle-right"></i></a>
								<a href="../courses.html" class="xg-btn xg-btn--dark"><i class="fa fa-th-list"></i> Explore 253 courses</a>
							</div>
							<div class="xg-badges" style="margin-top:20px">
								<span class="xg-badge"><i class="fa fa-shield"></i> ${SITE.examCentres}</span>
							</div>
						</div>

						<div class="xl-visual" style="max-width:520px">
							<img src="../img/signup-bg.jpg" alt="Eastport learner studying in the campus computer suite">
							<div class="xg-stat-pill xg-stat-pill--bl">
								<span class="xg-pill-badge"><i class="fa fa-users"></i></span>
								<span><strong>2,400+</strong><span>Active students</span></span>
							</div>
							<div class="xg-stat-pill xg-stat-pill--tr xg-stat-pill--green">
								<span class="xg-pill-badge xg-pill-badge--green"><i class="fa fa-check"></i></span>
								<span><strong>98%</strong><span>Attachment placement</span></span>
							</div>
						</div>
					</div>

					<div class="xl-card">
						<div class="xl-card-head">
							<span class="xg-eyebrow">eLearning access</span>
							<h2>Log in to eLearning</h2>
							<p>Students, staff and guardians use the same form — pick your role first.</p>
						</div>

						<div class="xl-tabs" role="tablist">
							<button type="button" class="is-active" data-role="student" role="tab" aria-selected="true"><i class="fa fa-graduation-cap"></i>Student</button>
							<button type="button" data-role="staff" role="tab" aria-selected="false"><i class="fa fa-briefcase"></i>Staff</button>
							<button type="button" data-role="guardian" role="tab" aria-selected="false"><i class="fa fa-users"></i>Guardian</button>
						</div>

						<div class="xg-alert" id="login-alert" role="alert" aria-live="polite"></div>

						<form id="login-form" novalidate>
							<div class="xl-field">
								<label for="identifier" id="identifier-label">Admission number / student e-mail</label>
								<div class="xl-input-wrap">
									<input class="xl-input" type="text" id="identifier" name="identifier" placeholder="e.g. EITC/2026/0148" autocomplete="username" spellcheck="false" required>
									<i class="fa fa-user-o xl-icon"></i>
								</div>
								<div class="xl-error ep-field-error"></div>
							</div>

							<div class="xl-field">
								<label for="password">Password</label>
								<div class="xl-input-wrap">
									<input class="xl-input" type="password" id="password" name="password" placeholder="Enter your portal password" autocomplete="current-password" required>
									<button type="button" class="xl-input-action" data-toggle-password="password" aria-label="Show password"><i class="fa fa-eye"></i></button>
								</div>
								<div class="xl-error ep-field-error"></div>
							</div>

							<div class="xl-row">
								<label class="xl-check" for="remember">
									<input type="checkbox" id="remember">
									Keep me signed in
								</label>
								<a href="#" class="xl-link" id="forgot-password">Forgot password?</a>
							</div>

							<button type="submit" class="xl-submit" id="login-submit">Log in <span class="xg-arrow">&rsaquo;</span></button>
						</form>

						<div class="xl-alt"><span>or</span></div>

						<div class="xl-alt-grid">
							<a class="xl-alt-btn" href="../apply.html"><i class="fa fa-user-plus"></i> Apply as a new student</a>
							<a class="xl-alt-btn" href="../contact.html"><i class="fa fa-life-ring"></i> Help from the ICT desk</a>
						</div>

						<div class="xl-demo">
							<strong>Preview credentials</strong>
							Admission <code>EITC/2026/0148</code> · Password <code>eastport2026</code><br>
							<button type="button" class="xl-demo-fill" data-fill-demo>Fill demo credentials</button>
						</div>

						<p class="xl-note">This site uses cookies to give you the best browsing experience. Your password is personal — the ICT desk will never ask for it by phone or WhatsApp.</p>
					</div>
				</div>
			</div>
		</section>
	</main>
	<div class="el-login-foot">
		<div class="el-wrap">
			<span>© 2026 Eastport International Training College. All Rights Reserved.</span>
			<a href="../versions.html">Compare design versions</a>
			<span>${SITE.examCentres}</span>
		</div>
	</div>`;

	return ePage({
		noHeader: true,
		slimFooter: true,
		guest: true,
		title: 'Log in to the site | Eastport eLearning',
		description: 'Log in to the Eastport International Training College eLearning system with your admission number to access results, notes, assignments and fee statements.',
		active: 'home',
		body,
		scripts: ['js/data.js', 'js/app.js']
	});
}

/* ---------------------------------------------------------------
   eLearning — dashboard
   --------------------------------------------------------------- */

function courseCard(programme, index) {
	const progress = [72, 45, 88, 30, 61, 15][index % 6];
	return `<article class="el-course-card" data-course="${programme.level.toLowerCase()}">
					<a class="el-course-media" href="../single-course.html" style="background-image:url('../${programme.image}')">
						<span class="el-course-cat">${programme.level}</span>
					</a>
					<div class="el-course-body">
						<h3><a href="../single-course.html">${programme.title}</a></h3>
						<div class="el-course-meta">${programme.code} · ${programme.trainer}</div>
						<div class="el-progress"><span style="width:${progress}%"></span></div>
						<div class="el-progress-label">${progress}% complete · 3 of 6 units submitted</div>
					</div>
				</article>`;
}

function dashboardPage() {
	const picks = [
		'Diploma in Business Management',
		'Diploma in ICT & Networking',
		'Certificate in Phlebotomy & Medical Laboratory Support',
		'Certificate in Software Development',
		'Artisan Certificate in Motor Vehicle Mechanics',
		'KASNEB Certified Public Accountants (CPA)'
	];
	const courses = picks
		.map((title) => EP.programmes.find((programme) => programme.title === title) || EP.programmes[0])
		.map(courseCard)
		.join('\n\t\t\t\t\t');

	const body = `<main class="el-main" id="maincontent">
		<div class="el-wrap">
			<div class="el-crumbs"><a href="dashboard.html">Home</a><i class="fa fa-angle-right"></i>Dashboard</div>

			<div class="el-welcome">
				<div>
					<h1>Karibu, Grace Kimutai</h1>
					<p>Admission EITC/2026/0148 · Diploma in Business Management · January 2027 stream</p>
				</div>
				<div class="el-welcome-stats">
					<div><strong>6</strong><span>Courses</span></div>
					<div><strong>3</strong><span>Due this week</span></div>
					<div><strong>82%</strong><span>Attendance</span></div>
				</div>
			</div>

			<div class="el-columns">
				<div>
					<section class="el-card" id="my-courses">
						<div class="el-card-head">
							<h2>Course overview</h2>
							<a href="courses.html">All courses</a>
						</div>
						<div class="el-card-body">
							<div class="el-course-grid">
								${courses}
							</div>
						</div>
					</section>

					<section class="el-card">
						<div class="el-card-head">
							<h2>Site announcements</h2>
							<a href="../blog.html">All notices</a>
						</div>
						<div class="el-announce">
							<div class="el-announce-icon"><i class="fa fa-clipboard"></i></div>
							<div>
								<h3>End-of-semester student survey</h3>
								<p>Your opinion matters. This survey helps us improve teaching, learning and student support at Eastport. Participation is encouraged for all current students.</p>
								<time>22 October 2026</time>
							</div>
						</div>
						<div class="el-announce">
							<div class="el-announce-icon"><i class="fa fa-calendar-check-o"></i></div>
							<div>
								<h3>KNEC and CDACC exam registration closes 14 November</h3>
								<p>Confirm your index number and registered units with the examinations office before the deadline. Late entries attract a penalty.</p>
								<time>15 October 2026</time>
							</div>
						</div>
						<div class="el-announce">
							<div class="el-announce-icon"><i class="fa fa-money"></i></div>
							<div>
								<h3>Fee statements for term two are online</h3>
								<p>Download your statement from the portal, or collect a stamped copy from the accounts office at Chai Plaza.</p>
								<time>8 October 2026</time>
							</div>
						</div>
					</section>
				</div>

				<aside>
					<section class="el-card">
						<div class="el-card-head"><h2>Upcoming events</h2></div>
						<div class="el-card-body">
							<ul class="el-list">
								<li><i class="fa fa-calendar"></i><div>Attachment briefing<span>28 October · 10:00 AM · Lab 2</span></div></li>
								<li><i class="fa fa-calendar"></i><div>CAT 2 — Business Finance<span>4 November · 8:00 AM · Hall A</span></div></li>
								<li><i class="fa fa-calendar"></i><div>KNEC practical rehearsal<span>12 November · 2:00 PM</span></div></li>
							</ul>
						</div>
					</section>
					<section class="el-card">
						<div class="el-card-head"><h2>Quick links</h2></div>
						<div class="el-card-body">
							<ul class="el-list">
								<li><i class="fa fa-file-text-o"></i><div><a href="../blog.html">Examination timetable</a><span>PDF · updated weekly</span></div></li>
								<li><i class="fa fa-credit-card"></i><div><a href="../contact.html">Fee statement</a><span>Accounts office</span></div></li>
								<li><i class="fa fa-paperclip"></i><div><a href="../apply.html">Attachment letter request</a><span>Placement office</span></div></li>
								<li><i class="fa fa-graduation-cap"></i><div><a href="../courses.html">Course catalogue</a><span>253 programmes</span></div></li>
							</ul>
						</div>
					</section>
					<section class="el-card">
						<div class="el-card-head"><h2>Campus life</h2><a href="index.html#campus">Gallery</a></div>
						<div class="el-card-body">
							<div class="el-campus">
								<figure style="background-image:url('../img/courses/5.jpg')"></figure>
								<figure style="background-image:url('../img/courses/3.jpg')"></figure>
								<figure style="background-image:url('../img/categories/4.jpg')"></figure>
								<figure style="background-image:url('../img/courses/f-2.jpg')"></figure>
								<figure style="background-image:url('../img/courses/6.jpg')"></figure>
								<figure style="background-image:url('../img/blog/3.jpg')"></figure>
							</div>
						</div>
					</section>
					<section class="el-card">
						<div class="el-card-head"><h2>Online users</h2><span class="el-muted">18</span></div>
						<div class="el-card-body">
							<ul class="el-list">
								<li><i class="fa fa-circle" style="color:#1f9d55"></i><div>Grace Kimutai<span>Student · online now</span></div></li>
								<li><i class="fa fa-circle" style="color:#1f9d55"></i><div>Faith Cherotich<span>Trainer · online now</span></div></li>
								<li><i class="fa fa-circle" style="color:#1f9d55"></i><div>Brian Kipkorir<span>Trainer · 4 min ago</span></div></li>
							</ul>
						</div>
					</section>
				</aside>
			</div>
		</div>
	</main>`;

	return ePage({
		title: 'Home | Eastport eLearning',
		description: 'Eastport eLearning dashboard — course overview, announcements, examination and fee notices for Eastport International Training College students.',
		active: 'home',
		body
	});
}

/* ---------------------------------------------------------------
   eLearning — course catalogue
   --------------------------------------------------------------- */

function coursesPage() {
	const tabs = ['all', 'diploma', 'certificate', 'artisan', 'professional', 'international']
		.map((key, index) => `<button type="button" data-level="${key}"${index === 0 ? ' class="is-active"' : ''}>${key === 'all' ? 'All' : key.charAt(0).toUpperCase() + key.slice(1)}</button>`)
		.join('\n\t\t\t\t\t');

	const cards = EP.programmes.map((programme, index) => courseCard(programme, index)).join('\n\t\t\t\t');

	const body = `<main class="el-main" id="maincontent">
		<div class="el-wrap">
			<div class="el-crumbs"><a href="dashboard.html">Home</a><i class="fa fa-angle-right"></i><a href="courses.html">Courses</a><i class="fa fa-angle-right"></i>Search for courses</div>

			<div class="el-card">
				<div class="el-card-head">
					<h1 style="font-size:20px;margin:0">Search for courses</h1>
					<span class="el-muted" data-course-count></span>
				</div>
				<div class="el-card-body">
					<form class="el-searchbar" data-course-search-form>
						<input type="search" placeholder="Search by programme, faculty or examination body" data-course-search aria-label="Search courses">
						<button type="submit">Search</button>
					</form>
					<div class="el-tabs">
						${tabs}
					</div>
					<div class="el-course-grid" data-course-grid>
						${cards}
					</div>
				</div>
			</div>
		</div>
	</main>`;

	return ePage({
		title: 'Search for courses | Eastport eLearning',
		description: 'Browse Eastport International Training College programmes in the eLearning portal — diplomas, certificates, artisan and professional courses.',
		active: 'courses',
		body
	});
}

/* --------------------------------------------------------------- */

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

const pages = {
	'index.html': marketingHome(),
	'login.html': loginPage(),
	'dashboard.html': dashboardPage(),
	'courses.html': coursesPage()
};

Object.keys(pages).forEach((file) => {
	fs.writeFileSync(path.join(OUT, file), pages[file], 'utf8');
	console.log('built v2/' + file);
});
