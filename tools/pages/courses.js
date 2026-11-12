'use strict';

const { layout, pageInfo, banner, ctaBlock, SITE } = require('../layout');

const FACULTIES = [
	['all', 'All faculties'],
	['health', 'Health Sciences'],
	['ict', 'ICT &amp; Computing'],
	['business', 'Business'],
	['professional', 'Professional (KASNEB/CHRP)'],
	['media', 'Journalism'],
	['languages', 'Languages'],
	['technical', 'Technical'],
	['hospitality', 'Hospitality'],
	['beauty', 'Beauty'],
	['office', 'Office Admin'],
	['international', 'International']
];

const LEVELS = [
	['all', 'All levels'],
	['diploma', 'Diploma'],
	['certificate', 'Certificate'],
	['artisan', 'Artisan'],
	['professional', 'Professional'],
	['international', 'International']
];

module.exports = function courses() {
	const facultyChips = FACULTIES.map(([value, label], i) =>
		`					<button type="button" class="xg-chip${i === 0 ? ' is-active' : ''}" data-faculty="${value}">${label}</button>`).join('\n');

	const levelChips = LEVELS.map(([value, label], i) =>
		`					<button type="button" class="xg-chip${i === 0 ? ' is-active' : ''}" data-level="${value}">${label}</button>`).join('\n');

	const body = `${pageInfo({
		image: 'img/page-bg/2.jpg',
		crumb: 'Courses',
		title: '253+ approved programmes',
		lead: 'Eleven faculties under one roof at Chai Plaza — clinical simulation and phlebotomy labs, software and networking suites, commercial kitchens, workshops and a student salon.',
		card: {
			title: 'Fees and intakes',
			text: 'Fees are published per term and payable in three instalments. January, May and September intakes.',
			items: [
				{ icon: 'fa-check-circle-o', html: 'KNEC, CDACC and KASNEB examined' },
				{ icon: 'fa-briefcase', html: 'Guaranteed three-month attachment' },
				{ icon: 'fa-graduation-cap', html: 'Diploma, certificate, artisan and professional levels' }
			],
			cta: { href: 'apply.html', label: 'Apply for January 2027' }
		}
	})}

	<!-- search band -->
	<section class="xg-search-band">
		<div class="container">
			<div class="xg-search-card">
				<div class="xg-head xg-head--center">
					<h2>Search your course</h2>
					<p>Type a career, a programme or a faculty — we will show you every qualification that matches.</p>
				</div>
				<form class="xg-inline-form" id="course-search-form">
					<input class="xg-input" type="text" name="q" placeholder="Course or career keyword">
					<select class="xg-select" name="faculty">
						<option value="">All faculties</option>
						<option value="health">Health Sciences</option>
						<option value="ict">ICT &amp; Computing</option>
						<option value="business">Business Studies</option>
						<option value="professional">Professional Studies</option>
						<option value="media">Journalism &amp; Media</option>
						<option value="languages">Languages</option>
						<option value="technical">Technical Studies</option>
						<option value="hospitality">Hospitality &amp; Tourism</option>
						<option value="beauty">Beauty &amp; Personal Care</option>
						<option value="office">Office Administration</option>
						<option value="international">International Courses</option>
					</select>
					<button class="xg-btn" type="submit"><i class="fa fa-search"></i> Search course</button>
				</form>
			</div>
		</div>
	</section>
	<!-- search band end -->

	<!-- programme grid -->
	<section class="xg-sec" id="programmes">
		<div class="container">
			<div class="xg-head xg-head--center">
				<span class="xg-eyebrow">January · May · September intakes</span>
				<h2>Browse by faculty</h2>
				<p>Filter by faculty or by qualification level — every card shows the duration, level and termly fee.</p>
			</div>

			<div class="xg-filter-bar">
				<div class="xg-chips">
${facultyChips}
				</div>
				<div class="xg-chips xg-chips--muted">
${levelChips}
				</div>
			</div>

			<p class="xg-results-note" id="results-note"></p>
			<div class="xg-course-grid" id="programme-grid">
				<!-- programme cards are rendered by js/app.js -->
			</div>
		</div>
	</section>
	<!-- programme grid end -->

	<!-- fees note -->
	<section class="xg-sec xg-sec--mist">
		<div class="container">
			<div class="xg-detail-grid xg-detail-grid--fees">
				<div>
					<span class="xg-eyebrow">Fees &amp; funding</span>
					<h2>Termly fees, paid in three parts</h2>
					<p class="xg-lead">All fees quoted are per term and include tuition, laboratory or workshop consumables and internal examinations. A 40% deposit secures your place, with the balance payable in two further instalments. National examination fees (KNEC, CDACC, KASNEB) are paid separately.</p>
					<ul class="xg-check-list">
						<li>Kericho County bursary application support at our welfare desk</li>
						<li>HELB TVET loan and scholarship guidance for eligible students</li>
						<li>Pay by M-PESA paybill, bank transfer or at the finance office</li>
					</ul>
					<div class="xg-mt-24">
						<a href="apply.html" class="xg-btn">Apply for January 2027 <span class="xg-arrow">&rsaquo;</span></a>
					</div>
				</div>
				<aside class="xg-aside-card">
					<h4>Not sure which programme fits?</h4>
					<p>Send us your KCSE grade and your career interest. Sharon from admissions will reply with three suitable options and their fee structure.</p>
					<div class="xg-fee-line"><span>Application fee</span><strong>Free</strong></div>
					<div class="xg-fee-line"><span>Deposit on acceptance</span><strong>40%</strong></div>
					<div class="xg-fee-line"><span>Balance</span><strong>2 instalments</strong></div>
					<a href="contact.html" class="xg-btn xg-btn--block">Ask admissions</a>
					<a href="${SITE.whatsapp}" class="xg-btn xg-btn--outline xg-btn--block xg-mt-12" target="_blank" rel="noopener"><i class="fa fa-whatsapp"></i> WhatsApp ${SITE.phone}</a>
				</aside>
			</div>
		</div>
	</section>
	<!-- fees note end -->

${banner({ title: 'Found your programme?', text: 'Apply online in three minutes and upload your KCSE result slip. Our admissions team will confirm your place and termly fee plan within one working day.', cta: 'Apply for January 2027' })}

${ctaBlock()}`;

	return layout({
		title: 'Courses & Programmes | Eastport International Training College',
		description: 'Browse 253+ TVETA-approved diploma, certificate, artisan, professional and international programmes across eleven faculties at Eastport International Training College, Kericho.',
		active: 'courses',
		body
	});
};
