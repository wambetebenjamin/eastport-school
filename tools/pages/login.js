'use strict';

const { layout, SITE, SOCIALS } = require('../layout');

/* Portal login — the single login theme.
   Same shell as every other page (royal-blue top strip, white navbar with
   search + CTA, navy footer) and the template's split hero: claim and portal
   facts on the left, campus photo with floating stat pills on the right, and
   the white sign-in card. The eLearning login in /v2/ reuses this stylesheet
   so both portals read as one product. */

const PERKS = [
	{ icon: 'fa-calendar-check-o', label: 'Results and examination slips' },
	{ icon: 'fa-money', label: 'Fee statements and balances' },
	{ icon: 'fa-clock-o', label: 'Class timetables' },
	{ icon: 'fa-briefcase', label: 'Attachment letters' }
];

module.exports = function login() {
	const perks = PERKS.map((perk) =>
		`					<li><strong>${perk.label}</strong></li>`).join('\n');

	const socials = SOCIALS.slice(0, 4).map((s) =>
		`				<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="fa ${s.icon}"></i></a>`).join('\n');

	const body = `	<!-- portal hero + sign in -->
	<section class="xl-wrap">
		<div class="container">
			<div class="xl-grid">

				<div class="xl-left">
				<!-- copy -->
				<div class="xl-copy">
					<span class="xg-eyebrow">Student &amp; staff portal · Kericho</span>
					<h1>Welcome back to <span>your Eastport portal.</span></h1>
					<p>Sign in with your admission number to see the same record your tutor sees — results, fees, timetable and attachment letters, all in one account.</p>
					<ul class="xl-flist">
${perks}
					</ul>
					<div class="xg-hero-btns">
						<a href="apply.html" class="xg-btn">Apply for January 2027 <span class="xg-arrow">&rsaquo;</span></a>
						<a href="courses.html" class="xg-btn xg-btn--dark"><i class="fa fa-th-list"></i> Explore 253 courses</a>
					</div>
					<div class="xg-badges" style="margin-top:20px">
						<span class="xg-badge"><i class="fa fa-shield"></i> ${SITE.examCentres}</span>
					</div>
				</div>

				<!-- photo with floating stat pills -->
				<div class="xl-visual">
					<img src="img/courses/f-1.jpg" alt="Eastport computer suite at Chai Plaza, Kericho">
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

				<!-- sign-in card -->
				<div class="xl-card">
					<div class="xl-card-head">
						<span class="xg-eyebrow">Portal access</span>
						<h2>Sign in to your account</h2>
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

						<button type="submit" class="xl-submit" id="login-submit">Sign in <span class="xg-arrow">&rsaquo;</span></button>
					</form>

					<div class="xl-alt"><span>or</span></div>

					<div class="xl-alt-grid">
						<a class="xl-alt-btn" href="apply.html"><i class="fa fa-user-plus"></i> Apply as a new student</a>
						<a class="xl-alt-btn" href="contact.html"><i class="fa fa-life-ring"></i> Help from the ICT desk</a>
					</div>

					<div class="xl-demo">
						<strong>Preview credentials</strong>
						Admission <code>EITC/2026/0148</code> · Password <code>eastport2026</code><br>
						<button type="button" class="xl-demo-fill" data-fill-demo>Fill demo credentials</button>
					</div>

					<p class="xl-note">Your password is personal — the ICT desk will never ask for it by phone or WhatsApp.</p>

					<div class="xl-support">
						<a href="${SITE.tel}"><i class="fa fa-phone"></i>${SITE.phone}</a>
						<a href="${SITE.whatsapp}" target="_blank" rel="noopener"><i class="fa fa-whatsapp"></i>WhatsApp desk</a>
						<a href="mailto:${SITE.email}"><i class="fa fa-envelope-o"></i>ICT desk e-mail</a>
					</div>
				</div>

			</div>
		</div>
	</section>
	<!-- portal hero end -->

	<!-- what you can do in the portal -->
	<section class="xg-sec xg-sec--mist">
		<div class="container">
			<div class="xg-head xg-head--center">
				<span class="xg-eyebrow">Inside the portal</span>
				<h2>Everything on your record, in one place</h2>
				<p>The same account your tutor and the registrar use — so nothing has to be collected by hand at the front desk.</p>
			</div>
			<div class="xg-grid xg-grid--4">
				<div class="xg-card">
					<span class="xg-card-ico"><i class="fa fa-line-chart"></i></span>
					<h4>Results &amp; transcripts</h4>
					<p>Continuous assessment and termly examination results, published by the registrar.</p>
				</div>
				<div class="xg-card">
					<span class="xg-card-ico"><i class="fa fa-credit-card"></i></span>
					<h4>Fee statements</h4>
					<p>Term invoices, the 40% deposit and every instalment, with your running balance.</p>
				</div>
				<div class="xg-card">
					<span class="xg-card-ico"><i class="fa fa-calendar"></i></span>
					<h4>Timetable</h4>
					<p>Weekly classes, lab sessions and examination dates for your stream.</p>
				</div>
				<div class="xg-card xg-card--navy">
					<span class="xg-card-ico"><i class="fa fa-briefcase"></i></span>
					<h4>Attachment letters</h4>
					<p>Download the three-month attachment letter your employer expects.</p>
				</div>
			</div>
			<div class="xg-text-center xg-mt-32">
				<span class="xg-note">Need an account? <a href="apply.html">Apply online</a> — your portal login is created when admissions confirms your place.</span>
			</div>
		</div>
	</section>
	<!-- portal features end -->

	<!-- footer strip -->
	<div class="xg-topstrip">
		<div class="container">
			<div class="xg-topstrip-left">
				<span><i class="fa fa-map-marker"></i>${SITE.campus}</span>
			</div>
			<div class="xg-topstrip-right">
				<div class="xg-topstrip-social">
${socials}
				</div>
			</div>
		</div>
	</div>`;

	return layout({
		title: 'Student Portal Login | Eastport International Training College, Kericho',
		description: 'Sign in to the Eastport International Training College student portal for results, fee statements, timetables and attachment letters. TVETA, KNEC 518112 and CDACC 0350007 centre at Chai Plaza 2nd Floor, Kericho CBD.',
		active: 'login',
		bodyClass: 'login-body',
		extraStyles: ['css/login.css'],
		ogImage: 'img/versions/a-login.jpg',
		body
	});
};
