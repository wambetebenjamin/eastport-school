'use strict';

const { layout, stats, banner, gallery, SITE } = require('../layout');

/* Home page follows the approved template top to bottom:
   royal-blue top strip · white navbar with search + CTA · split hero with
   floating stat pills · 5-item trust strip · overlapping campus about block ·
   category cards · search band · 4-column popular course cards · trainer
   sign-up · campus gallery · CTA band · navy footer. */

const PERKS = ['TVETA &amp; KNEC accredited', 'Guaranteed attachment', '3 fee instalments'];

const TRUST = [
	{ icon: 'fa-graduation-cap', label: '253+ approved programmes' },
	{ icon: 'fa-certificate', label: 'KNEC &amp; CDACC examined' },
	{ icon: 'fa-briefcase', label: 'Guaranteed attachment' },
	{ icon: 'fa-clock-o', label: 'Morning, afternoon, evening' },
	{ icon: 'fa-map-marker', label: 'Chai Plaza, Kericho CBD' }
];

const FACULTIES = [
	{ slug: 'health', icon: 'fa-heartbeat', label: 'Health Sciences', count: '34 programmes' },
	{ slug: 'ict', icon: 'fa-laptop', label: 'ICT & Computing', count: '26 programmes' },
	{ slug: 'business', icon: 'fa-line-chart', label: 'Business Studies', count: '31 programmes' },
	{ slug: 'technical', icon: 'fa-wrench', label: 'Technical Studies', count: '24 programmes' }
];

module.exports = function home() {
	const perks = PERKS.map((perk) => `<span>${perk}</span>`).join('\n\t\t\t\t\t');

	const trust = TRUST.map((item) =>
		`				<div class="xg-trust-item"><span class="xg-trust-dot"><i class="fa ${item.icon}"></i></span>${item.label}</div>`).join('\n');

	const facultyOptions = [
		['health', 'Health Sciences'], ['ict', 'ICT & Computing'], ['business', 'Business Studies'],
		['professional', 'Professional Studies'], ['media', 'Journalism & Media'], ['languages', 'Languages'],
		['technical', 'Technical Studies'], ['hospitality', 'Hospitality & Tourism'],
		['beauty', 'Beauty & Personal Care'], ['office', 'Office Administration'], ['international', 'International Courses']
	].map(([value, label]) => `							<option value="${value}">${label}</option>`).join('\n');

	const chips = FACULTIES.map((item, index) =>
		`				<button type="button" class="xg-tab${index === 0 ? ' is-active' : ''}" data-faculty="${item.slug}">
					<span class="xg-tab-ico"><i class="fa ${item.icon}"></i></span>
					<span>
						<h4>${item.label}</h4>
						<span>${item.count}</span>
					</span>
				</button>`).join('\n');

	const body = `	<!-- hero -->
	<section class="xg-hero">
		<div class="container">
			<div class="xg-hero-grid">
				<div class="xg-hero-copy">
					<span class="xg-eyebrow">Kericho's hands-on TVET college</span>
					<h1>Real practical skills. <span>A career you can count on.</span></h1>
					<p>Karibu Eastport International Training College at Chai Plaza 2nd Floor, Kericho CBD — caring tutors, modern clinical and computer labs, and a guaranteed three-month industry attachment in every programme.</p>
					<div class="xg-perks">
						${perks}
					</div>
					<div class="xg-hero-btns">
						<a href="apply.html" class="xg-btn xg-btn--lg">Apply for January 2027 <i class="fa fa-angle-right"></i></a>
						<a href="courses.html" class="xg-btn xg-btn--dark xg-btn--lg"><i class="fa fa-th-list"></i> Our courses</a>
					</div>
					<p class="xg-hero-note"><span>${SITE.examCentres}</span><span>January · May · September intakes</span></p>
				</div>
				<div class="xg-hero-visual">
					<img src="img/signup-bg.jpg" alt="An Eastport student studying on a laptop in the campus computer suite">
					<div class="xg-stat-pill xg-stat-pill--bl">
						<span class="xg-pill-badge"><i class="fa fa-users"></i></span>
						<span><strong>2,400+</strong><span>Active students</span></span>
					</div>
					<div class="xg-stat-pill xg-stat-pill--tr xg-stat-pill--red">
						<span class="xg-pill-badge xg-pill-badge--red"><i class="fa fa-video-camera"></i></span>
						<span><strong>253</strong><span>Approved programmes</span></span>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- hero end -->

	<!-- 5-item trust strip -->
	<div class="xg-trust">
		<div class="container">
			<div class="xg-trust-grid">
${trust}
			</div>
		</div>
	</div>
	<!-- trust strip end -->

${stats()}

	<!-- about -->
	<section class="xg-sec">
		<div class="container">
			<div class="xg-about-grid">
				<div class="xg-collage">
					<img src="img/courses/5.jpg" alt="Eastport students at work in the training kitchen">
					<img src="img/categories/2.jpg" alt="Eastport computer suite">
					<div class="xg-round-badge"><strong>12</strong>years of<br>hands-on training</div>
				</div>
				<div>
					<span class="xg-eyebrow">Who we are</span>
					<h2>Kericho's hands-on TVET college</h2>
					<p class="xg-lead">Eastport International Training College is a private TVET institution registered by TVETA as centre 401002 and an examination centre for KNEC 518112 and CDACC 0350007. Learning here happens in working labs, kitchens and workshops — not just classrooms.</p>
					<ul class="xg-check-list">
						<li><strong>Clinical simulation, phlebotomy and computer labs</strong> on the same floor as your classroom</li>
						<li><strong>Guaranteed three-month attachment</strong> with our Kericho and county referral partners</li>
						<li><strong>Fees payable in three instalments</strong> per term, with a 40% deposit on acceptance</li>
					</ul>
					<div class="xg-about-actions">
						<a href="about.html" class="xg-btn">More about Eastport <span class="xg-arrow">&rsaquo;</span></a>
						<div class="xg-signature">
							<img src="img/authors/3.jpg" alt="">
							<span>
								<strong>Sharon Chepkemoi</strong>
								<span>Registrar &amp; admissions</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- about end -->

	<!-- categories + popular courses -->
	<section class="xg-sec xg-sec--mist">
		<div class="container">
			<div class="xg-head xg-head--center">
				<span class="xg-eyebrow">Our course categories</span>
				<h2>Popular courses by faculty</h2>
				<p>Eleven specialised faculties under one roof at Chai Plaza — from clinical simulation and software engineering to commercial kitchens and solar workshops.</p>
			</div>

			<div class="xg-tabs" id="home-faculty-tabs">
${chips}
			</div>

			<div class="xg-course-grid" id="featured-grid">
				<!-- programme cards are rendered by js/app.js -->
			</div>

			<div class="xg-text-center xg-mt-32">
				<a href="courses.html" class="xg-btn xg-btn--outline">View all 253 programmes <span class="xg-arrow">&rsaquo;</span></a>
			</div>
		</div>
	</section>
	<!-- categories end -->

	<!-- search band -->
	<section class="xg-search-band">
		<div class="container">
			<div class="xg-search-card">
				<div class="xg-head xg-head--center">
					<h2>Search your course</h2>
					<p>Type a career, a programme or a faculty — we will show you every qualification that matches.</p>
				</div>
				<form class="xg-inline-form" id="home-search-form" action="courses.html">
					<input class="xg-input" type="text" name="q" placeholder="Course or career keyword">
					<select class="xg-select" name="faculty">
						<option value="">All faculties</option>
${facultyOptions}
					</select>
					<button class="xg-btn" type="submit"><i class="fa fa-search"></i> Search course</button>
				</form>
			</div>
		</div>
	</section>
	<!-- search band end -->

	<!-- trainer sign-up -->
	<section class="xg-sec">
		<div class="container">
			<div class="xg-about-grid">
				<div>
					<span class="xg-eyebrow">Join the faculty</span>
					<h2>Sign up to become a trainer</h2>
					<p class="xg-lead">We are always looking for TVET trainers and technicians with real industry experience. Register your interest and our academic office will invite you for a demonstration lesson.</p>
					<ul class="xg-check-list">
						<li>Flexible morning, afternoon or evening teaching streams</li>
						<li>Clinical, ICT, hospitality, engineering and beauty workshops on site</li>
						<li>Competitive part-time and full-time rates, paid monthly</li>
					</ul>
					<div class="xg-badges">
						<span class="xg-badge"><i class="fa fa-check"></i> TVETA registered</span>
						<span class="xg-badge"><i class="fa fa-check"></i> KCSE &amp; diploma holders</span>
						<span class="xg-badge"><i class="fa fa-check"></i> Industry experience valued</span>
					</div>
				</div>
				<form class="xg-search-card" data-demo-form data-success="Thank you. Your trainer application has been received — the academic office will contact you within five working days.">
					<div class="xg-head" style="margin-bottom:18px">
						<h2 style="font-size:22px">Trainer interest form</h2>
					</div>
					<div class="xg-field">
						<label for="tr-name">Full name</label>
						<input class="xg-input" id="tr-name" type="text" placeholder="As it appears on your ID" required>
					</div>
					<div class="xg-form-row">
						<div class="xg-field">
							<label for="tr-email">E-mail</label>
							<input class="xg-input" id="tr-email" type="email" placeholder="you@example.com" required>
						</div>
						<div class="xg-field">
							<label for="tr-phone">Phone</label>
							<input class="xg-input" id="tr-phone" type="tel" placeholder="07xx xxx xxx" required>
						</div>
					</div>
					<div class="xg-field">
						<label for="tr-area">Area of expertise</label>
						<select class="xg-select" id="tr-area">
							<option>Health Sciences</option>
							<option>ICT &amp; Computing</option>
							<option>Business Studies</option>
							<option>Technical Studies</option>
							<option>Hospitality &amp; Tourism</option>
							<option>Beauty &amp; Personal Care</option>
						</select>
					</div>
					<label for="v-upload" class="xg-file-btn"><i class="fa fa-upload"></i> Upload CV</label>
					<input type="file" id="v-upload" class="xg-sr">
					<button class="xg-btn xg-btn--block" type="submit">Submit application <span class="xg-arrow">&rsaquo;</span></button>
					<div class="xg-alert" role="status"></div>
				</form>
			</div>
		</div>
	</section>
	<!-- trainer sign-up end -->

${gallery({
		title: 'Campus in pictures',
		text: 'Classrooms, computer suites, the training kitchen, workshops, the salon and the study areas students use between lessons — all at Chai Plaza on Kenyatta Street.',
		items: [
			{ image: 'img/courses/5.jpg', caption: 'Training kitchen' },
			{ image: 'img/courses/f-1.jpg', caption: 'Computer suite' },
			{ image: 'img/categories/4.jpg', caption: 'Classroom' },
			{ image: 'img/courses/3.jpg', caption: 'Library corner' },
			{ image: 'img/courses/f-2.jpg', caption: 'Study area' },
			{ image: 'img/categories/6.jpg', caption: 'ICT lab' },
			{ image: 'img/blog/3.jpg', caption: 'Group work' },
			{ image: 'img/courses/7.jpg', caption: 'Workshop' }
		]
	})}

${banner({
		title: 'Join Our Community Now!',
		text: 'Applications for the January 2027 intake are open across all eleven faculties. Secure your place with a 40% deposit and pay the balance in three flexible instalments.',
		cta: 'Register now',
		href: 'apply.html'
	})}`;

	return layout({
		title: 'Eastport International Training College | TVETA & KNEC Centre 401002 - Kericho',
		description: 'Eastport International Training College, Chai Plaza 2nd Floor, Kericho CBD. 253+ TVETA-approved, KNEC and CDACC certified programmes across 11 faculties with guaranteed three-month attachment.',
		active: 'home',
		body
	});
};
