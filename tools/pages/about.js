'use strict';

const { layout, pageInfo, stats, banner, ctaBlock, gallery, SITE } = require('../layout');

module.exports = function about() {
	const why = [
		{ icon: 'fa-flask', title: 'Clinical & technical labs', text: 'Diagnostic centrifuges, sterile draw stations, network sandboxes and stainless-steel kitchens — not photographs of them.' },
		{ icon: 'fa-briefcase', title: 'Guaranteed attachment', text: 'Three-month industry attachment for every learner, with 98% placement across hospitals, hotels, garages and county offices.' },
		{ icon: 'fa-credit-card', title: 'Flexible fee plans', text: 'A 40% deposit followed by three instalments per term, with no learner locked out of laboratories or examinations.' },
		{ icon: 'fa-certificate', title: 'Recognised certification', text: 'We are a KNEC (518112), CDACC (0350007) and TVETA centre — your certificate is examinable and verifiable.' },
		{ icon: 'fa-graduation-cap', title: 'Small, mentored classes', text: 'Tutors know every learner by name. Extra remedial sessions run free of charge before national examinations.' },
		{ icon: 'fa-map-marker', title: 'Kericho CBD campus', text: 'Second floor of Chai Plaza on Kenyatta Street — walking distance from matatu stages, banks and county offices.' }
	];

	const whyCards = why.map((w) => `				<div class="xg-card">
					<span class="xg-card-ico"><i class="fa ${w.icon}"></i></span>
					<h5>${w.title}</h5>
					<p>${w.text}</p>
				</div>`).join('\n');

	const badges = [
		'TVETA Accredited',
		'KNEC Centre 518112',
		'CDACC Centre 0350007',
		'KASNEB Tuition Centre',
		'ABMA · ABE · ICM',
		'ICDL Accredited'
	].map((b) => `<span class="xg-badge"><i class="fa fa-check"></i>${b}</span>`).join('\n				');

	const labs = [
		{
			image: 'img/categories/1.jpg', tag: 'School of Health Sciences',
			title: 'Clinical Simulation &amp; Phlebotomy Labs',
			text: 'Equipped with diagnostic centrifuges, sterile draw stations and simulation mannequins for hands-on nursing and phlebotomy practice.',
			href: 'courses.html?faculty=health', link: 'View health courses'
		},
		{
			image: 'img/courses/3.jpg', tag: 'School of ICT &amp; Computing',
			title: 'Advanced ICT &amp; Software Development Labs',
			text: 'High-speed fibre connectivity, programming environments and cybersecurity testbeds for software engineering and networking students.',
			href: 'courses.html?faculty=ict', link: 'View ICT programmes'
		},
		{
			image: 'img/courses/6.jpg', tag: 'Hospitality &amp; Tourism',
			title: 'Commercial Kitchen &amp; Food Production Hub',
			text: 'Professional stainless-steel kitchens, pastry ovens and front-office simulation stations for hotel and catering professionals.',
			href: 'courses.html?faculty=hospitality', link: 'View hospitality courses'
		}
	].map((lab) => `				<article class="xg-course">
					<a class="xg-course-thumb" href="${lab.href}" style="background-image:url(${lab.image})" aria-label="${lab.title}"><span class="xg-tag-level">${lab.tag}</span></a>
					<div class="xg-course-body">
						<h3><a href="${lab.href}">${lab.title}</a></h3>
						<p>${lab.text}</p>
						<div class="xg-course-foot">
							<a class="xg-link-more" href="${lab.href}">${lab.link} <span class="xg-arrow">&rsaquo;</span></a>
						</div>
					</div>
				</article>`).join('\n');

	const body = `${pageInfo({
		image: 'img/page-bg/1.jpg',
		crumb: 'About us',
		title: 'Practical training, personal mentorship',
		lead: 'A TVETA-registered college in the heart of Kericho CBD, teaching the way employers actually work: small groups, real equipment and an attachment in every programme.',
		card: {
			title: 'Eastport at a glance',
			text: 'Registered as TVETA Centre 401002 and an examination centre for KNEC 518112 and CDACC 0350007.',
			items: [
				{ icon: 'fa-graduation-cap', html: '253 approved programmes across 11 faculties' },
				{ icon: 'fa-map-marker', html: 'Chai Plaza 2nd Floor, Kenyatta Street' },
				{ icon: 'fa-clock-o', html: 'Mon–Fri 8:00 AM – 5:00 PM · Sat 8:30 AM – 1:00 PM' },
				{ icon: 'fa-phone', html: `<a href="${SITE.tel}">${SITE.phone}</a>` }
			],
			cta: { href: 'contact.html', label: 'Visit the campus' }
		}
	})}

	<!-- about intro -->
	<section class="xg-sec">
		<div class="container">
			<div class="xg-about-grid">
				<div class="xg-collage">
					<img src="img/signup-bg.jpg" alt="Eastport student working in the campus computer suite">
					<img src="img/categories/2.jpg" alt="Students in an Eastport classroom">
					<div class="xg-round-badge"><strong>11</strong>faculties<br>under one roof</div>
				</div>
				<div>
					<span class="xg-eyebrow">Who we are</span>
					<h2>Kericho’s hands-on TVET college</h2>
					<p class="xg-lead">Eastport International Training College is a private TVET institution located on the second floor of Chai Plaza, Kenyatta Street, in the heart of Kericho CBD. We offer 253+ approved programmes across eleven faculties, examined by KNEC and assessed by CDACC, with international pathways through ABMA, ABE, ICM and ICDL.</p>
					<p>Our promise is simple: at least 70% of your time is spent practising — in clinical simulation, computer suites, commercial kitchens and engineering workshops — supported by tutors who have worked in the industries they teach.</p>
					<ul class="xg-check-list">
						<li>TVETA registered with KNEC and CDACC examination centres on campus</li>
						<li>Guaranteed three-month attachment with 98% placement</li>
						<li>Three-part termly fee instalments and bursary application support</li>
						<li>Morning, afternoon and evening streams for working students</li>
					</ul>
					<div class="xg-about-actions">
						<a href="courses.html" class="xg-btn">Explore programmes <span class="xg-arrow">&rsaquo;</span></a>
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
	<!-- about intro end -->

${stats()}

	<!-- why -->
	<section class="xg-sec xg-sec--mist">
		<div class="container">
			<div class="xg-head xg-head--center">
				<span class="xg-eyebrow">Why Eastport</span>
				<h2>Six reasons families choose us</h2>
				<p>Accreditation matters, but so does what happens in the laboratory on a Tuesday morning. Here is what you get in both.</p>
			</div>
			<div class="xg-grid xg-grid--3">
${whyCards}
			</div>
		</div>
	</section>
	<!-- why end -->

	<!-- training labs -->
	<section class="xg-sec">
		<div class="container">
			<div class="xg-head xg-head--center">
				<span class="xg-eyebrow">World-class training environment</span>
				<h2>Experience practical learning at Eastport</h2>
				<p>70% of curriculum time is dedicated to clinical simulation, practical computer labs and engineering workshops.</p>
			</div>
			<div class="xg-course-grid xg-course-grid--3">
${labs}
			</div>
		</div>
	</section>
	<!-- training labs end -->

${gallery({
		title: 'Inside the training rooms',
		text: 'Practical rooms instead of rows of desks: computer suites, a training kitchen, workshops, a salon and the study areas students use between lessons.',
		items: [
			{ image: 'img/courses/3.jpg', caption: 'Computer suite' },
			{ image: 'img/categories/4.jpg', caption: 'Classroom' },
			{ image: 'img/courses/5.jpg', caption: 'Training kitchen' },
			{ image: 'img/courses/f-1.jpg', caption: 'Study group' },
			{ image: 'img/categories/6.jpg', caption: 'ICT lab' },
			{ image: 'img/courses/7.jpg', caption: 'Workshop' }
		]
	})}

	<!-- voices -->
	<section class="xg-sec xg-sec--mist">
		<div class="container">
			<div class="xg-head xg-head--center">
				<span class="xg-eyebrow">Student &amp; alumni journeys</span>
				<h2>Real people. Real practical competencies.</h2>
				<p>Meet students and graduates from Kericho and across the South Rift who turned practical training into thriving careers and independent enterprises.</p>
			</div>
			<div class="xg-grid xg-grid--auto" id="testimonial-grid">
				<!-- testimonials are rendered by js/app.js -->
			</div>
		</div>
	</section>
	<!-- voices end -->

	<!-- mission -->
	<section class="xg-sec">
		<div class="container">
			<div class="xg-grid xg-grid--2">
				<div class="xg-panel">
					<span class="xg-eyebrow">Our vision</span>
					<h3>Skills that build the South Rift economy</h3>
					<p>To be the region’s most trusted centre of practical competence — where every graduate leaves with a certificate, a portfolio of real work and the confidence to employ themselves or others.</p>
				</div>
				<div class="xg-panel xg-panel--navy">
					<span class="xg-eyebrow">Our mission</span>
					<h3>Teach with patience. Assess with rigour.</h3>
					<p>To deliver TVETA-approved, industry-driven training in a safe and affordable environment, walking with each learner from admission through national examination to attachment and employment.</p>
				</div>
			</div>
		</div>
	</section>
	<!-- mission end -->

	<!-- accreditation -->
	<section class="xg-sec xg-sec--tight xg-sec--mist">
		<div class="container xg-text-center">
			<span class="xg-eyebrow">Accreditation &amp; examination centres</span>
			<h2>Certificates that are examinable and verifiable</h2>
			<div class="xg-badges xg-badges--center">
				${badges}
			</div>
			<p class="xg-note" style="margin-top:22px">Verification: ${SITE.examCentres}</p>
		</div>
	</section>
	<!-- accreditation end -->

	<!-- faculties -->
	<section class="xg-sec">
		<div class="container">
			<div class="xg-head xg-head--center">
				<span class="xg-eyebrow">Full catalogue</span>
				<h2>Our eleven faculties</h2>
				<p>Each faculty is led by a head of department with active industry links in Kericho County and beyond.</p>
			</div>
			<div class="xg-faculty-grid" id="faculty-grid-all">
				<!-- faculty cards are rendered by js/app.js -->
			</div>
		</div>
	</section>
	<!-- faculties end -->

	<!-- leadership -->
	<section class="xg-sec xg-sec--mist">
		<div class="container">
			<div class="xg-head xg-head--center">
				<span class="xg-eyebrow">Institutional leadership</span>
				<h2>Who you will meet at reception</h2>
				<p>Our director and principal maintain an open-door policy — parents and guardians can walk in and ask for either of them.</p>
			</div>
			<div class="xg-grid xg-grid--auto" id="team-grid">
				<!-- leadership cards are rendered by js/app.js -->
			</div>
		</div>
	</section>
	<!-- leadership end -->

${banner({ title: 'Ready to start in January 2027?', text: 'Applications are open across all eleven faculties. Bring your KCSE or KCPE results, your ID and a 40% deposit to Chai Plaza 2nd Floor — or start online in three minutes.', cta: 'Start your application' })}

${ctaBlock()}`;

	return layout({
		title: 'About Eastport International Training College | Kericho TVET Centre',
		description: 'Eastport International Training College is a TVETA-registered TVET institution at Chai Plaza 2nd Floor, Kericho CBD, with 253+ KNEC and CDACC approved programmes across 11 faculties.',
		active: 'about',
		body
	});
};
