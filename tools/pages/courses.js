'use strict';

const { layout, pageInfo, banner, ctaBlock } = require('../layout');

module.exports = function courses() {
	const facultyChips = [
		'<button type="button" class="ep-chip active" data-faculty="all">All faculties</button>',
		'<button type="button" class="ep-chip" data-faculty="health">Health Sciences</button>',
		'<button type="button" class="ep-chip" data-faculty="ict">ICT &amp; Computing</button>',
		'<button type="button" class="ep-chip" data-faculty="business">Business</button>',
		'<button type="button" class="ep-chip" data-faculty="professional">Professional (KASNEB/CHRP)</button>',
		'<button type="button" class="ep-chip" data-faculty="media">Journalism</button>',
		'<button type="button" class="ep-chip" data-faculty="languages">Languages</button>',
		'<button type="button" class="ep-chip" data-faculty="technical">Technical</button>',
		'<button type="button" class="ep-chip" data-faculty="hospitality">Hospitality</button>',
		'<button type="button" class="ep-chip" data-faculty="beauty">Beauty</button>',
		'<button type="button" class="ep-chip" data-faculty="office">Office Admin</button>',
		'<button type="button" class="ep-chip" data-faculty="international">International</button>'
	].join('\n\t\t\t\t');

	const levelChips = [
		['all', 'All levels'],
		['diploma', 'Diploma'],
		['certificate', 'Certificate'],
		['artisan', 'Artisan'],
		['professional', 'Professional'],
		['international', 'International']
	].map(([val, label], i) => `<button type="button" class="ep-chip${i === 0 ? ' active' : ''}" data-level="${val}">${label}</button>`).join('\n\t\t\t\t');

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

	<!-- search section -->
	<section class="search-section ss-other-page">
		<div class="container">
			<div class="search-warp">
				<div class="section-title text-white">
					<h2><span>Search your course</span></h2>
				</div>
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<form class="course-search-form" id="course-search-form">
							<input type="text" name="q" placeholder="Course or career keyword">
							<select name="faculty" class="ep-search-select">
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
							<button class="site-btn btn-dark" type="submit">Search Course</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- search section end -->

	<!-- course section -->
	<section class="course-section" id="programmes">
		<div class="ep-filter-wrap">
			<div class="container">
				<div class="section-title" style="margin-bottom:0">
					<span class="ep-uppercase">January · May · September intakes</span>
					<h2>Browse by faculty</h2>
				</div>
				<div class="ep-chip-row">
					${facultyChips}
				</div>
				<div class="ep-chip-row">
					${levelChips}
				</div>
			</div>
		</div>
		<div class="course-warp" style="padding-bottom:80px">
			<p class="ep-results-note" id="results-note"></p>
			<div class="row" id="programme-grid">
				<!-- programme cards are rendered by js/app.js -->
			</div>
		</div>
	</section>
	<!-- course section end -->

	<!-- fees note -->
	<section class="ep-section-mist spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<div class="section-title text-left" style="margin-bottom:24px">
						<span class="ep-uppercase">Fees &amp; funding</span>
						<h2 style="font-size:32px">Termly fees, paid in three parts</h2>
						<p class="ep-lead">All fees quoted are per term and include tuition, laboratory or workshop consumables and internal examinations. A 40% deposit secures your place, with the balance payable in two further instalments. National examination fees (KNEC, CDACC, KASNEB) are paid separately.</p>
					</div>
					<ul class="ep-check-list">
						<li>Kericho County bursary application support at our welfare desk</li>
						<li>HELB TVET loan and scholarship guidance for eligible students</li>
						<li>Pay by M-PESA paybill, bank transfer or at the finance office</li>
					</ul>
				</div>
				<div class="col-lg-4">
					<div class="ep-help-card">
						<h4>Not sure which programme fits?</h4>
						<p>Send us your KCSE grade and your career interest. Sharon from admissions will reply with three suitable options and their fee structure.</p>
						<a href="contact.html" class="site-btn">Ask admissions</a>
					</div>
				</div>
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
