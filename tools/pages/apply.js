'use strict';

const { layout, pageInfo, ctaBlock, SITE } = require('../layout');
const EP = require('../content');

module.exports = function apply() {
	const options = EP.programmes.map((p) => `\t\t\t\t\t\t\t\t\t\t<option value="${p.title}">${p.title} (${p.level})</option>`).join('\n');

	const body = `${pageInfo({
		image: 'img/page-bg/2.jpg',
		crumb: 'Apply online',
		title: 'January 2027 application',
		lead: 'Five minutes now, a place confirmed by the admissions office within two working days. Secure your slot with a 40% deposit and pay the balance in three instalments.',
		card: {
			title: 'What you will need',
			items: [
				{ icon: 'fa-id-card-o', html: 'KCSE result slip or certificate' },
				{ icon: 'fa-id-badge', html: 'National ID or birth certificate' },
				{ icon: 'fa-file-text-o', html: 'Two passport photographs' },
				{ icon: 'fa-money', html: '40% deposit on acceptance' }
			],
			cta: { href: 'courses.html', label: 'Browse programmes first' }
		}
	})}

	<!-- application -->
	<section class="xg-sec">
		<div class="container">
			<div class="xg-apply-grid">
				<aside class="xg-apply-aside">
					<div class="xg-apply-photo" style="background-image:url(img/courses/2.jpg)"></div>
					<div class="xg-apply-aside-body">
						<span class="xg-eyebrow">Three simple steps</span>
						<h3>Join the January 2027 cohort</h3>
						<p>Apply online, then visit Chai Plaza 2nd Floor with your documents to confirm your place. Applications are reviewed within one working day.</p>
						<ol class="xg-steps">
							<li>Complete this form and choose your programme.</li>
							<li>Our admissions team calls you to confirm your entry grade and fee plan.</li>
							<li>Pay a 40% deposit and collect your admission letter and reporting date.</li>
						</ol>
						<h4>Bring with you</h4>
						<ul class="xg-check-list">
							<li>KCSE / KCPE result slip (original and copy)</li>
							<li>National ID or birth certificate</li>
							<li>Two passport photographs</li>
						</ul>
						<div class="xg-apply-contact">
							<strong>Questions?</strong>
							<a href="${SITE.tel}">${SITE.phone}</a>
							<span>${SITE.hours}</span>
						</div>
					</div>
				</aside>

				<form class="xg-apply-form" data-demo-form data-success="Application received. Our admissions office will call you within one working day to confirm your programme, entry grade and fee plan.">
					<div class="xg-head">
						<span class="xg-eyebrow">Application form</span>
						<h2>Tell us about you</h2>
						<p>All fields marked with an asterisk are required. Your details are only used to process this application.</p>
					</div>

					<div class="xg-form-row">
						<div class="xg-field">
							<label for="apply-name">Full name *</label>
							<input class="xg-input" id="apply-name" type="text" placeholder="As it appears on your ID" required>
						</div>
						<div class="xg-field">
							<label for="apply-email">E-mail address *</label>
							<input class="xg-input" id="apply-email" type="email" placeholder="you@example.com" required>
						</div>
					</div>

					<div class="xg-form-row">
						<div class="xg-field">
							<label for="apply-phone">Phone number *</label>
							<input class="xg-input" id="apply-phone" type="tel" placeholder="07xx xxx xxx" required>
						</div>
						<div class="xg-field">
							<label for="apply-id">National ID / birth cert. no. *</label>
							<input class="xg-input" id="apply-id" type="text" placeholder="e.g. 34567890" required>
						</div>
					</div>

					<div class="xg-form-row">
						<div class="xg-field">
							<label for="apply-grade">KCSE / KCPE mean grade *</label>
							<select class="xg-select" id="apply-grade" required>
								<option value="">Select your grade</option>
								<option>C+ and above</option>
								<option>C (plain)</option>
								<option>C- (minus)</option>
								<option>D+ (plus)</option>
								<option>D (plain)</option>
								<option>D- (minus)</option>
								<option>KCPE / open entry</option>
							</select>
						</div>
						<div class="xg-field">
							<label for="apply-intake">Preferred intake *</label>
							<select class="xg-select" id="apply-intake" required>
								<option>January 2027</option>
								<option>May 2027</option>
								<option>September 2027</option>
							</select>
						</div>
					</div>

					<div class="xg-field">
						<label for="apply-programme">Programme of interest *</label>
						<select class="xg-select" id="apply-programme" required>
							<option value="">Select a programme</option>
${options}
						</select>
					</div>

					<div class="xg-form-row">
						<div class="xg-field">
							<label for="apply-mode">Preferred study mode *</label>
							<select class="xg-select" id="apply-mode" required>
								<option>Morning stream</option>
								<option>Afternoon stream</option>
								<option>Evening stream</option>
								<option>Saturday practicals</option>
							</select>
						</div>
						<div class="xg-field">
							<label for="apply-sponsor">Fee sponsor</label>
							<select class="xg-select" id="apply-sponsor">
								<option>Self / family</option>
								<option>County bursary</option>
								<option>HELB loan</option>
								<option>Employer sponsorship</option>
							</select>
						</div>
					</div>

					<div class="xg-field">
						<label for="apply-message">Anything else we should know?</label>
						<textarea class="xg-textarea" id="apply-message" rows="4" placeholder="Career goal, preferred attachment sector, or support needs"></textarea>
					</div>

					<label class="xg-check">
						<input type="checkbox" required>
						<span>I confirm the information above is accurate and consent to Eastport contacting me about my application.</span>
					</label>

					<div class="xg-alert" role="status"></div>
					<button class="xg-btn xg-btn--block xg-btn--lg" type="submit">Submit application <span class="xg-arrow">&rsaquo;</span></button>
					<p class="xg-form-note">This preview form does not transmit data. In production it posts to the college admissions desk and sends a copy to ${SITE.email}.</p>
				</form>
			</div>
		</div>
	</section>
	<!-- application end -->

	<!-- fees at a glance -->
	<section class="xg-sec xg-sec--mist">
		<div class="container">
			<div class="xg-head xg-head--center">
				<span class="xg-eyebrow">Fee guidance</span>
				<h2>What a term costs</h2>
				<p>Indicative termly fees by programme level. Exact figures are confirmed in your admission letter.</p>
			</div>
			<div class="xg-table-wrap">
				<table class="xg-table">
					<thead>
						<tr><th>Level</th><th>Typical termly fee</th><th>Duration</th><th>Examining body</th></tr>
					</thead>
					<tbody>
						<tr><td><strong>Diploma</strong></td><td>KSh 22,000 – 28,500</td><td>2 years (3 terms per year)</td><td>KNEC / CDACC</td></tr>
						<tr><td><strong>Certificate</strong></td><td>KSh 16,000 – 19,500</td><td>9 – 12 months</td><td>KNEC / CDACC</td></tr>
						<tr><td><strong>Artisan</strong></td><td>KSh 14,500 – 15,500</td><td>6 – 12 months</td><td>CDACC</td></tr>
						<tr><td><strong>Professional (KASNEB / CHRP)</strong></td><td>KSh 21,000 – 26,000 per level</td><td>12 – 24 months</td><td>KASNEB / HRMPEB</td></tr>
						<tr><td><strong>International</strong></td><td>KSh 12,000 – 32,000 per module</td><td>3 – 12 months</td><td>ABMA / ABE / ICM / ICDL</td></tr>
					</tbody>
				</table>
			</div>
			<div class="xg-text-center xg-mt-32">
				<a href="courses.html" class="xg-btn xg-btn--outline">Browse all 253 programmes <span class="xg-arrow">&rsaquo;</span></a>
			</div>
		</div>
	</section>
	<!-- fees end -->

${ctaBlock()}`;

	return layout({
		title: 'Apply Online | Eastport International Training College',
		description: 'Apply online for the January 2027 intake at Eastport International Training College, Kericho. Choose from 253+ KNEC and CDACC approved programmes across eleven faculties.',
		active: 'courses',
		body
	});
};
