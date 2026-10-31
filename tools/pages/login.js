'use strict';

const { layout, ctaBlock, SITE } = require('../layout');

const NAV_LINKS = [
	{ href: 'index.html', label: 'Home', active: false },
	{ href: 'about.html', label: 'About us', active: false },
	{ href: 'courses.html', label: 'Courses', active: false },
	{ href: 'blog.html', label: 'News', active: false },
	{ href: 'contact.html', label: 'Contact', active: false },
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
		`\t\t\t\t<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="fa ${s.icon}"></i></a>`).join('\n');

	const stats = STATS.map(([value, label]) =>
		`\t\t\t\t\t<div class="lg-stat"><strong>${value}</strong><span>${label}</span></div>`).join('\n');

	const quickLinks = [
		['Explore all 253 programmes', 'courses.html', 'Courses'],
		['Apply for the January 2027 intake', 'apply.html', 'Admissions'],
		['Termly fees &amp; payment plans', 'apply.html#fees', 'Finance'],
		['Kericho County bursary guidance', 'contact.html', 'Welfare'],
		['Talk to admissions on WhatsApp', SITE.whatsapp, 'Support']
	].map(([label, href, tag]) =>
		`\t\t\t\t\t<li><a href="${href}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${label}</a><span>${tag}</span></li>`).join('\n');

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
			<ul class="lg-nav-links">
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
					<p>Karibu Eastport International Training College at Chai Plaza 2nd Floor, Kericho CBD. Sign in to your portal for results, fee statements, class timetables, examination slips and attachment letters — caring tutors, modern clinical and computer labs, and guaranteed three-month industry attachments.</p>
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
						<a href="https://facebook.com/EastportCollegeKericho" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
						<a href="https://twitter.com/EastportCollege" target="_blank" rel="noopener" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
						<a href="https://instagram.com/eastportcollege" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
						<a href="https://linkedin.com/company/eastport-college" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa fa-linkedin"></i></a>
						<a href="https://youtube.com/@EastportCollege" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa fa-youtube-play"></i></a>
					</div>
					<span class="lg-legal">KNEC 518112 · CDACC 0350007 · TVETA 401002</span>
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

					<a class="lg-alt-btn" href="apply.html"><i class="fa fa-user-plus"></i> Apply as a new student</a>
					<a class="lg-alt-btn" href="contact.html"><i class="fa fa-life-ring"></i> Get help from the ICT desk</a>

					<div class="lg-demo">
						<strong>Preview credentials</strong>
						Admission <code>EITC/2026/0148</code> · Password <code>eastport2026</code><br>
						<button type="button" class="fill-demo" data-fill-demo>Fill demo credentials</button> — or use any admission number with a 6+ character password.
					</div>

					<ul class="lg-quick">
${quickLinks}
					</ul>

					<p class="lg-note">
						Your password is personal — the ICT desk will never ask for it by phone or WhatsApp.<br>
						<a href="contact.html">Contact ICT</a> · <a href="tel:0757478077">0757 478 077</a>
					</p>
				</div>
			</main>
		</div>
	</section>

	<!-- ================= public content ================= -->
	<div class="lg-public">

		<!-- programmes -->
		<section class="spad">
			<div class="lg-wrap">
				<div class="lg-section-title">
					<span class="ep-uppercase">January · May · September intakes</span>
					<h2>Explore Eastport before you sign in</h2>
					<p>253+ TVETA-approved programmes across eleven faculties, examined by KNEC and assessed by CDACC, with international pathways through ABMA, ABE, ICM and ICDL.</p>
				</div>
				<div class="row" id="featured-grid">
					<!-- programme cards are rendered by js/app.js -->
				</div>
				<div class="text-center" style="margin-top:18px">
					<a href="courses.html" class="site-btn" style="background:var(--ep-navy)">Browse the full catalogue</a>
				</div>
			</div>
		</section>

		<!-- faculties -->
		<section class="spad" style="padding-top:0">
			<div class="lg-wrap">
				<div class="lg-section-title">
					<span class="ep-uppercase">Eleven specialised faculties</span>
					<h2>Schools of study at Chai Plaza</h2>
					<p>Clinical simulation, software engineering, commercial kitchens and engineering workshops — 70% of curriculum time is practical, industry-standard training.</p>
				</div>
				<div class="lg-faculties" id="login-faculty-grid"></div>
			</div>
		</section>
	</div>

${ctaBlock()}

	<div class="lg-public">
		<!-- news -->
		<section class="spad">
			<div class="lg-wrap">
				<div class="lg-section-title">
					<span class="ep-uppercase">Admissions &amp; academic gazette</span>
					<h2>Campus news &amp; notices</h2>
					<p>Intake deadlines, KNEC examination timetables, county bursary notices and campus innovations — straight from the registrar.</p>
				</div>
				<div class="row" id="news-grid">
					<!-- news cards are rendered by js/app.js -->
				</div>
			</div>
		</section>

		<!-- gazette signup + contact -->
		<section class="spad" style="padding-top:0">
			<div class="lg-wrap">
				<div class="lg-split">
					<div class="lg-card">
						<h3>Subscribe to the Eastport gazette</h3>
						<p>Receive official intake deadlines, KNEC exam timetables, county bursary application notices and campus innovations. Bi-weekly updates, no spam.</p>
						<form data-demo-form data-success="Thank you — you are subscribed to the Eastport Admissions &amp; Academic Gazette.">
							<div class="row">
								<div class="col-md-6">
									<div class="lg-field" style="margin-bottom:14px">
										<label for="gazette-name">Full name</label>
										<input class="form-control" id="gazette-name" type="text" placeholder="Your name" required>
									</div>
								</div>
								<div class="col-md-6">
									<div class="lg-field" style="margin-bottom:14px">
										<label for="gazette-email">E-mail address</label>
										<input class="form-control" id="gazette-email" type="email" placeholder="you@example.com" required>
									</div>
								</div>
							</div>
							<div class="lg-field" style="margin-bottom:0">
								<label for="gazette-profile">Select your profile</label>
								<select class="form-control" id="gazette-profile" required>
									<option value="">Choose one</option>
									<option>Prospective Student</option>
									<option>Current Student</option>
									<option>Guardian / Parent</option>
									<option>Alumni / Employer</option>
								</select>
							</div>
							<div class="ep-alert" role="status"></div>
							<button type="submit" class="site-btn">Subscribe to Newsletter</button>
							<p style="font-size:11.5px;margin:14px 0 0;color:#8a9497">We respect your privacy. Unsubscribe anytime. Official TVET institutional communications only.</p>
						</form>
					</div>

					<div class="lg-card lg-contact-card">
						<h3>Need guidance on courses, grades or fees?</h3>
						<p>Whether you are asking about minimum KCSE entry grades (C-, D plain, D- or KCPE), applying for the Kericho County Bursary Fund, or setting up a flexible 3-part fee instalment, Sharon and our admissions team are ready to sit with you or chat directly.</p>
						<ul class="lg-contact-list">
							<li><i class="fa fa-map-marker"></i><span>Chai Plaza 2nd Floor, Kenyatta St, Kericho</span></li>
							<li><i class="fa fa-clock-o"></i><span>${SITE.hours}</span></li>
							<li><i class="fa fa-phone"></i><span><a href="${SITE.tel}" style="color:#fff">${SITE.phone}</a></span></li>
							<li><i class="fa fa-envelope-o"></i><span><a href="mailto:${SITE.email}" style="color:#fff">${SITE.email}</a></span></li>
							<li><i class="fa fa-certificate"></i><span>${SITE.examCentres}</span></li>
						</ul>
						<div class="lg-hero-actions">
							<a href="${SITE.whatsapp}" class="primary" target="_blank" rel="noopener">Chat with Admissions</a>
							<a href="apply.html" class="ghost">Start your application</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	<!-- ================= public content end ================= -->`;

	return layout({
		title: 'Student Portal Login | Eastport International Training College, Kericho',
		description: 'Sign in to the Eastport International Training College student portal for results, fee statements, timetables and attachment letters. TVETA, KNEC 518112 and CDACC 0350007 centre at Chai Plaza 2nd Floor, Kericho CBD.',
		active: 'login',
		noHeader: true,
		extraStyles: ['css/login.css'],
		body
	});
};
