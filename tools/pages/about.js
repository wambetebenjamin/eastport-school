'use strict';

const { layout, pageInfo, stats, banner, ctaBlock, SITE } = require('../layout');

module.exports = function about() {
	const why = [
		{ icon: 'fa-flask', title: 'Clinical & technical labs', text: 'Diagnostic centrifuges, sterile draw stations, network sandboxes and stainless-steel kitchens — not photographs of them.' },
		{ icon: 'fa-briefcase', title: 'Guaranteed attachment', text: 'Three-month industry attachment for every learner, with 98% placement across hospitals, hotels, garages and county offices.' },
		{ icon: 'fa-credit-card', title: 'Flexible fee plans', text: 'A 40% deposit followed by three instalments per term, with no learner locked out of laboratories or examinations.' },
		{ icon: 'fa-certificate', title: 'Recognised certification', text: 'We are a KNEC (518112), CDACC (0350007) and TVETA centre — your certificate is examinable and verifiable.' },
		{ icon: 'fa-graduation-cap', title: 'Small, mentored classes', text: 'Tutors know every learner by name. Extra remedial sessions run free of charge before national examinations.' },
		{ icon: 'fa-map-marker', title: 'Kericho CBD campus', text: 'Second floor of Chai Plaza on Kenyatta Street — walking distance from matatu stages, banks and county offices.' }
	];

	const whyCards = why.map((w) => `				<div class="col-lg-4 col-md-6">
					<div class="ep-why-card">
						<i class="fa ${w.icon}"></i>
						<h5>${w.title}</h5>
						<p>${w.text}</p>
					</div>
				</div>`).join('\n');

	const badges = [
		'TVETA Accredited',
		'KNEC Centre 518112',
		'CDACC Centre 0350007',
		'KASNEB Tuition Centre',
		'ABMA · ABE · ICM',
		'ICDL Accredited'
	].map((b) => `<span class="ep-badge">${b}</span>`).join('\n\t\t\t\t');

	const body = `${pageInfo({ image: 'img/page-bg/1.jpg', crumb: 'About us', title: 'Practical training, personal mentorship' })}

	<!-- intro -->
	<section class="spad">
		<div class="container">
			<div class="row ep-feature-row">
				<div class="col-lg-6">
					<div class="ep-feature-media">
						<img src="img/signup-bg.jpg" alt="Eastport student working in the campus computer suite">
						<div class="ep-media-badge">
							<h4>11</h4>
							<p>Faculties under one roof</p>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="section-title text-left">
						<span class="ep-uppercase">Who we are</span>
						<h2>Kericho’s hands-on TVET college</h2>
						<p class="ep-lead">Eastport International Training College is a private TVET institution located on the second floor of Chai Plaza, Kenyatta Street, in the heart of Kericho CBD. We offer 253+ approved programmes across eleven faculties, examined by KNEC and assessed by CDACC, with international pathways through ABMA, ABE, ICM and ICDL.</p>
						<p class="ep-lead">Our promise is simple: at least 70% of your time is spent practising — in clinical simulation, computer suites, commercial kitchens and engineering workshops — supported by tutors who have worked in the industries they teach.</p>
					</div>
					<ul class="ep-feature-list">
						<li>TVETA registered with KNEC and CDACC examination centres on campus</li>
						<li>Guaranteed three-month attachment with 98% placement</li>
						<li>Three-part termly fee instalments and bursary application support</li>
						<li>Morning, afternoon and evening streams for working students</li>
					</ul>
					<a href="courses.html" class="site-btn">Explore programmes</a>
					<a href="apply.html" class="site-btn ep-btn-outline" style="margin-left:14px">Apply now</a>
				</div>
			</div>
		</div>
	</section>
	<!-- intro end -->

${stats()}

	<!-- why -->
	<section class="ep-why spad">
		<div class="container">
			<div class="section-title">
				<span class="ep-uppercase">Why Eastport</span>
				<h2>Six reasons families choose us</h2>
				<p>Accreditation matters, but so does what happens in the laboratory on a Tuesday morning. Here is what you get in both.</p>
			</div>
			<div class="row">
${whyCards}
			</div>
		</div>
	</section>
	<!-- why end -->

	<!-- training labs -->
	<section class="spad ep-section-mist">
		<div class="container">
			<div class="section-title">
				<span class="ep-uppercase">World-class training environment</span>
				<h2>Experience practical learning at Eastport</h2>
				<p>70% of curriculum time is dedicated to clinical simulation, practical computer labs and engineering workshops.</p>
			</div>
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="ep-lab-card">
						<div class="ep-lab-thumb set-bg" style="background-image:url(img/categories/1.jpg)">
							<span>School of Health Sciences</span>
						</div>
						<div class="ep-lab-body">
							<h5>Clinical Simulation &amp; Phlebotomy Labs</h5>
							<p>Equipped with diagnostic centrifuges, sterile draw stations and simulation mannequins for hands-on nursing and phlebotomy practice.</p>
							<a href="courses.html?faculty=health">View Health Courses</a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="ep-lab-card">
						<div class="ep-lab-thumb set-bg" style="background-image:url(img/courses/3.jpg)">
							<span>School of ICT &amp; Computing</span>
						</div>
						<div class="ep-lab-body">
							<h5>Advanced ICT &amp; Software Development Labs</h5>
							<p>High-speed fibre connectivity, programming environments and cybersecurity testbeds for software engineering and networking students.</p>
							<a href="courses.html?faculty=ict">View ICT Programmes</a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="ep-lab-card">
						<div class="ep-lab-thumb set-bg" style="background-image:url(img/courses/6.jpg)">
							<span>Hospitality &amp; Tourism</span>
						</div>
						<div class="ep-lab-body">
							<h5>Commercial Kitchen &amp; Food Production Hub</h5>
							<p>Professional stainless-steel kitchens, pastry ovens and front-office simulation stations for hotel and catering professionals.</p>
							<a href="courses.html?faculty=hospitality">View Hospitality Courses</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- training labs end -->

	<!-- student & alumni voices -->
	<section class="spad">
		<div class="container">
			<div class="section-title">
				<span class="ep-uppercase">Student &amp; alumni journeys</span>
				<h2>Real people. Real practical competencies.</h2>
				<p>Meet students and graduates from Kericho and across the South Rift who turned practical training into thriving careers and independent enterprises.</p>
			</div>
			<div class="row" id="testimonial-grid">
				<!-- testimonials are rendered by js/app.js -->
			</div>
		</div>
	</section>
	<!-- testimonial end -->

	<!-- mission -->
	<section class="spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="ep-panel">
						<span class="ep-uppercase">Our vision</span>
						<h3>Skills that build the South Rift economy</h3>
						<p>To be the region’s most trusted centre of practical competence — where every graduate leaves with a certificate, a portfolio of real work and the confidence to employ themselves or others.</p>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="ep-panel ep-panel-dark">
						<span class="ep-uppercase" style="color:#f2cb86">Our mission</span>
						<h3>Teach with patience. Assess with rigour.</h3>
						<p>To deliver TVETA-approved, industry-driven training in a safe and affordable environment, walking with each learner from admission through national examination to attachment and employment.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- mission end -->

	<!-- accreditation -->
	<section class="ep-section-mist" style="padding:60px 0">
		<div class="container text-center">
			<span class="ep-uppercase">Accreditation &amp; examination centres</span>
			<h2 style="font-size:30px;margin-bottom:26px">Certificates that are examinable and verifiable</h2>
			<div class="ep-badge-strip">
				${badges}
			</div>
			<p style="margin-top:26px;margin-bottom:0">Verification: ${SITE.examCentres}</p>
		</div>
	</section>
	<!-- accreditation end -->

	<!-- faculties -->
	<section class="categories-section spad">
		<div class="container">
			<div class="section-title">
				<span class="ep-uppercase">Full catalogue</span>
				<h2>Our eleven faculties</h2>
				<p>Each faculty is led by a head of department with active industry links in Kericho County and beyond.</p>
			</div>
			<div class="row" id="faculty-grid-all">
				<!-- faculty cards are rendered by js/app.js -->
			</div>
		</div>
	</section>
	<!-- faculties end -->

	<!-- leadership -->
	<section class="spad ep-section-mist">
		<div class="container">
			<div class="section-title">
				<span class="ep-uppercase">Institutional leadership</span>
				<h2>Who you will meet at reception</h2>
				<p>Our director and principal maintain an open-door policy — parents and guardians can walk in and ask for either of them.</p>
			</div>
			<div class="row" id="team-grid">
				<!-- leadership cards are rendered by js/app.js -->
			</div>
		</div>
	</section>
	<!-- leadership end -->

${banner({ title: 'Ready to start in January 2027?', text: 'Applications are open across all eleven faculties. Bring your KCSE or KCPE results, your ID and a 40% deposit to Chai Plaza 2nd Floor — or start online in three minutes.', cta: 'Start Your Application' })}

${ctaBlock()}`;

	return layout({
		title: 'About Eastport International Training College | Kericho TVET Centre',
		description: 'Eastport International Training College is a TVETA-registered TVET institution at Chai Plaza 2nd Floor, Kericho CBD, with 253+ KNEC and CDACC approved programmes across 11 faculties.',
		active: 'about',
		body
	});
};
