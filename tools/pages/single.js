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

	<!-- single course section -->
	<section class="single-course spad pb-0">
		<div class="container">
			<div class="course-meta-area">
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<div class="course-note" id="programme-note">School of Hospitality and Institutional Management</div>
						<h3 id="programme-title">Diploma in Food &amp; Beverage Service and Sales</h3>
						<div class="course-metas">
							<div class="course-meta">
								<div class="course-author">
									<div class="ca-pic set-bg" id="programme-trainer-pic"></div>
									<h6>Trainer</h6>
									<p><span id="programme-trainer">Faith Cherotich</span>, <span id="programme-trainer-role">Head Pastry Chef</span></p>
								</div>
							</div>
							<div class="course-meta">
								<div class="cm-info">
									<h6>Faculty</h6>
									<p id="programme-faculty">Hospitality &amp; Tourism</p>
								</div>
							</div>
							<div class="course-meta">
								<div class="cm-info">
									<h6>Level</h6>
									<p id="programme-level">Diploma</p>
								</div>
							</div>
							<div class="course-meta">
								<div class="cm-info">
									<h6>Enrolment</h6>
									<p id="programme-students">148 enrolled</p>
								</div>
							</div>
						</div>
						<a href="#fees" class="site-btn price-btn" id="programme-fee-btn">Fees: <span id="programme-fee">KSh 24,500 per term</span></a>
						<a href="apply.html" class="site-btn buy-btn" id="programme-apply">Apply for this programme</a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-10 offset-lg-1">
					<img src="img/courses/2.jpg" alt="Programme preview" class="course-preview" id="programme-image">
				</div>
			</div>
			<div class="row">
				<div class="col-lg-10 offset-lg-1 course-list">
					<div class="cl-item">
						<h4>Programme overview</h4>
						<p id="programme-summary">Master commercial kitchen production, front office service and beverage sales inside our working restaurant and pastry hub.</p>
						<p style="margin-top:20px" id="programme-overview-2">This programme combines classroom theory with supervised practical sessions, so you graduate with a portfolio of real work. Assessment follows the national competency framework, with both internal practical evaluations and the final examining body assessment.</p>
					</div>
					<div class="cl-item">
						<h4>Units of study</h4>
						<div class="table-responsive">
							<table class="ep-table">
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
					<div class="cl-item">
						<h4>Career pathways</h4>
						<p style="margin-bottom:24px" id="programme-career-text">Graduates progress into employment, self-employment or further study. Eastport alumni from this faculty are working across Kericho County and the wider South Rift.</p>
						<ul class="ep-check-list" id="programme-careers"></ul>
					</div>
					<div class="cl-item" id="fees">
						<h4>Entry requirements &amp; fees</h4>
						<ul class="ep-detail-facts">
							<li>Minimum entry grade <span id="programme-grade">KCSE C- (minus)</span></li>
							<li>Duration <span id="programme-duration">2 years (3 terms per year)</span></li>
							<li>Termly fee <span id="programme-fee-2">KSh 24,500 per term</span></li>
							<li>Examining / awarding body <span id="programme-body">KNEC</span></li>
							<li>Programme code <span id="programme-code">KNEC 518112 / HOS/D/014</span></li>
							<li>Intakes <span>January · May · September</span></li>
							<li>Study modes <span>Morning · Afternoon · Evening</span></li>
						</ul>
						<h4 style="margin-top:50px;margin-bottom:20px">Fee structure (per term)</h4>
						<div class="table-responsive">
							<table class="ep-table">
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
					<div class="cl-item">
						<h4>Frequently asked questions</h4>
						<div class="ep-accordion-item is-open">
							<button type="button">Do I need to have studied this subject before?</button>
							<div class="ep-accordion-body">
								<p>No. Every programme starts from the fundamentals, and remedial classes are available free of charge for learners who need extra support in mathematics, English or science subjects.</p>
							</div>
						</div>
						<div class="ep-accordion-item">
							<button type="button">Can I pay fees in instalments?</button>
							<div class="ep-accordion-body">
								<p>Yes. A 40% deposit secures your place and the balance can be paid in two further instalments within the term. Speak to the finance office on 0757 478 077 to agree a plan before registration.</p>
							</div>
						</div>
						<div class="ep-accordion-item">
							<button type="button">Is attachment guaranteed?</button>
							<div class="ep-accordion-body">
								<p>Yes. Our industry liaison office places learners for the mandatory three-month attachment, with 98% placement across hospitals, hotels, garages, county offices and private firms.</p>
							</div>
						</div>
						<div class="ep-accordion-item">
							<button type="button">Do you offer evening classes for working students?</button>
							<div class="ep-accordion-body">
								<p>Most faculties run an evening stream between 5:30 PM and 8:30 PM, plus Saturday morning practicals for technical and hospitality programmes.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- single course section end -->

	<!-- related courses -->
	<section class="realated-courses spad">
		<div class="course-warp">
			<h2 class="rc-title">Related programmes</h2>
			<div class="row" id="related-grid">
				<!-- related programme cards are rendered by js/app.js -->
			</div>
		</div>
	</section>
	<!-- related courses end -->

${ctaBlock()}`;

	return layout({
		title: 'Programme detail | Eastport International Training College',
		description: 'Programme details, units of study, entry requirements, termly fees and career pathways at Eastport International Training College, Kericho.',
		active: 'courses',
		body
	});
};
