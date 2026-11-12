'use strict';

const { layout, pageInfo, ctaBlock, SITE } = require('../layout');

module.exports = function single() {
	const body = `${pageInfo({
		image: 'img/page-bg/4.jpg',
		crumb: 'Programme detail',
		title: 'Programme information',
		lead: 'Entry requirements, fees, units and attachment placements for this qualification — plus the admissions contact who can confirm your KCSE grade.',
		card: {
			title: 'Before you apply',
			items: [
				{ icon: 'fa-check-circle-o', html: 'KCSE mean grade as published on the programme' },
				{ icon: 'fa-money', html: 'Fees per term, payable in three instalments' },
				{ icon: 'fa-briefcase', html: 'Three-month industry attachment included' }
			],
			cta: { href: 'contact.html', label: 'Ask admissions' }
		}
	})}

	<!-- programme detail -->
	<section class="xg-sec">
		<div class="container">
			<div class="xg-detail-grid">
				<div>
					<article class="xg-detail-head">
						<span class="xg-eyebrow" id="programme-note">School of Hospitality and Institutional Management</span>
						<h1 id="programme-title">Diploma in Food &amp; Beverage Service and Sales</h1>
						<div class="xg-detail-meta">
							<div class="xg-detail-author">
								<span class="xg-person-pic" id="programme-trainer-pic"></span>
								<span>
									<span class="xg-detail-label">Trainer</span>
									<strong><span id="programme-trainer">Faith Cherotich</span> · <span id="programme-trainer-role">Head Pastry Chef</span></strong>
								</span>
							</div>
							<div class="xg-detail-stat"><span class="xg-detail-label">Faculty</span><strong id="programme-faculty">Hospitality &amp; Tourism</strong></div>
							<div class="xg-detail-stat"><span class="xg-detail-label">Level</span><strong id="programme-level">Diploma</strong></div>
							<div class="xg-detail-stat"><span class="xg-detail-label">Enrolment</span><strong id="programme-students">148 enrolled</strong></div>
						</div>
						<div class="xg-detail-actions">
							<a href="#fees" class="xg-btn xg-btn--dark" id="programme-fee-btn">Fees: <span id="programme-fee">KSh 24,500 per term</span></a>
							<a href="apply.html" class="xg-btn" id="programme-apply">Apply for this programme <span class="xg-arrow">&rsaquo;</span></a>
						</div>
					</article>

					<img src="img/courses/2.jpg" alt="Programme preview" class="xg-detail-image" id="programme-image">

					<div class="xg-cl-item">
						<h4>Programme overview</h4>
						<p id="programme-summary">Master commercial kitchen production, front office service and beverage sales inside our working restaurant and pastry hub.</p>
						<p id="programme-overview-2" style="margin-top:18px">This programme combines classroom theory with supervised practical sessions, so you graduate with a portfolio of real work. Assessment follows the national competency framework, with both internal practical evaluations and the final examining body assessment.</p>
					</div>

					<div class="xg-cl-item">
						<h4>Units of study</h4>
						<div class="xg-table-wrap">
							<table class="xg-table">
								<thead>
									<tr>
										<th>Unit</th>
										<th>Examining body</th>
										<th>Level</th>
									</tr>
								</thead>
								<tbody id="programme-units"></tbody>
							</table>
						</div>
					</div>

					<div class="xg-cl-item">
						<h4>Career pathways</h4>
						<p style="margin-bottom:20px" id="programme-career-text">Graduates progress into employment, self-employment or further study. Eastport alumni from this faculty are working across Kericho County and the wider South Rift.</p>
						<ul class="xg-check-list" id="programme-careers"></ul>
					</div>

					<div class="xg-cl-item" id="fees">
						<h4>Entry requirements &amp; fees</h4>
						<ul class="xg-detail-facts">
							<li>Minimum entry grade <span id="programme-grade">KCSE C- (minus)</span></li>
							<li>Duration <span id="programme-duration">2 years (3 terms per year)</span></li>
							<li>Termly fee <span id="programme-fee-2">KSh 24,500 per term</span></li>
							<li>Examining / awarding body <span id="programme-body">KNEC</span></li>
							<li>Programme code <span id="programme-code">KNEC 518112 / HOS/D/014</span></li>
							<li>Intakes <span>January · May · September</span></li>
							<li>Study modes <span>Morning · Afternoon · Evening</span></li>
						</ul>

						<h4 style="margin-top:36px;margin-bottom:16px">Fee structure (per term)</h4>
						<div class="xg-table-wrap">
							<table class="xg-table">
								<thead>
									<tr><th>Item</th><th>Amount</th><th>Notes</th></tr>
								</thead>
								<tbody>
									<tr><td><strong>Tuition &amp; practicals</strong></td><td>Included in termly fee</td><td>Laboratory and workshop consumables covered</td></tr>
									<tr><td><strong>Deposit to secure a place</strong></td><td>40% of termly fee</td><td>Balance in two instalments</td></tr>
									<tr><td><strong>Examination fee</strong></td><td>Paid separately</td><td>KNEC / CDACC / awarding body rates apply</td></tr>
									<tr><td><strong>Attachment</strong></td><td>No extra charge</td><td>Placement and supervision included</td></tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="xg-cl-item">
						<h4>Frequently asked questions</h4>
						<div class="xg-acc-item is-open">
							<button type="button">Do I need to have studied this subject before?</button>
							<div class="xg-acc-body">
								<p>No. Every programme starts from the fundamentals, and remedial classes are available free of charge for learners who need extra support in mathematics, English or science subjects.</p>
							</div>
						</div>
						<div class="xg-acc-item">
							<button type="button">Can I pay fees in instalments?</button>
							<div class="xg-acc-body">
								<p>Yes. A 40% deposit secures your place and the balance can be paid in two further instalments within the term. Speak to the finance office on ${SITE.phone} to agree a plan before registration.</p>
							</div>
						</div>
						<div class="xg-acc-item">
							<button type="button">Is attachment guaranteed?</button>
							<div class="xg-acc-body">
								<p>Yes. Our industry liaison office places learners for the mandatory three-month attachment, with 98% placement across hospitals, hotels, garages, county offices and private firms.</p>
							</div>
						</div>
						<div class="xg-acc-item">
							<button type="button">Do you offer evening classes for working students?</button>
							<div class="xg-acc-body">
								<p>Most faculties run an evening stream between 5:30 PM and 8:30 PM, plus Saturday morning practicals for technical and hospitality programmes.</p>
							</div>
						</div>
					</div>
				</div>

				<aside class="xg-aside">
					<div class="xg-aside-card">
						<h4>Fees at a glance</h4>
						<div class="xg-fee-line"><span>Termly fee</span><strong id="programme-fee-3">KSh 24,500</strong></div>
						<div class="xg-fee-line"><span>Deposit</span><strong>40%</strong></div>
						<div class="xg-fee-line"><span>Balance</span><strong>2 instalments</strong></div>
						<div class="xg-fee-line"><span>Attachment</span><strong>Included</strong></div>
						<a href="apply.html" class="xg-btn xg-btn--block">Apply for January 2027 <span class="xg-arrow">&rsaquo;</span></a>
						<a href="${SITE.whatsapp}" class="xg-btn xg-btn--outline xg-btn--block xg-mt-12" target="_blank" rel="noopener"><i class="fa fa-whatsapp"></i> Ask on WhatsApp</a>
					</div>

					<div class="xg-aside-card">
						<h4>Talk to admissions</h4>
						<p>Sharon can confirm your entry grade and fee plan on the phone in a few minutes.</p>
						<ul class="xg-banner-list">
							<li><i class="fa fa-phone"></i><span><a href="${SITE.tel}">${SITE.phone}</a></span></li>
							<li><i class="fa fa-envelope-o"></i><span><a href="mailto:${SITE.email}">${SITE.email}</a></span></li>
							<li><i class="fa fa-map-marker"></i><span>${SITE.campus}</span></li>
						</ul>
					</div>

					<div class="xg-aside-card xg-aside-card--navy">
						<h4>Student portal</h4>
						<p>Already enrolled? Check your units, results and fee statement in the portal.</p>
						<a href="login.html" class="xg-btn xg-btn--ghost xg-btn--block">Sign in</a>
					</div>
				</aside>
			</div>
		</div>
	</section>
	<!-- programme detail end -->

	<!-- related programmes -->
	<section class="xg-sec xg-sec--mist">
		<div class="container">
			<div class="xg-head">
				<span class="xg-eyebrow">Keep looking</span>
				<h2>Related programmes</h2>
			</div>
			<div class="xg-course-grid" id="related-grid">
				<!-- related programme cards are rendered by js/app.js -->
			</div>
		</div>
	</section>
	<!-- related programmes end -->

${ctaBlock()}`;

	return layout({
		title: 'Programme detail | Eastport International Training College',
		description: 'Programme details, units of study, entry requirements, termly fees and career pathways at Eastport International Training College, Kericho.',
		active: 'courses',
		body
	});
};
