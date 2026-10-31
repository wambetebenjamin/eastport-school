'use strict';

const { layout, pageInfo, ctaBlock, SITE } = require('../layout');
const EP = require('../content');

module.exports = function apply() {
	const options = EP.programmes.map((p) => `\t\t\t\t\t\t\t\t\t<option value="${p.title}">${p.title} (${p.level})</option>`).join('\n');

	const body = `${pageInfo({ image: 'img/page-bg/2.jpg', crumb: 'Apply online', title: 'January 2027 application' })}

	<!-- Page -->
	<section class="spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-4">
					<div class="ep-apply-aside">
						<span class="ep-uppercase" style="color:#ffb3c1">Three simple steps</span>
						<h3>Join the January 2027 cohort</h3>
						<p>Apply online, then visit Chai Plaza 2nd Floor with your documents to confirm your place. Applications are reviewed within one working day.</p>
						<ol>
							<li>Complete this form and choose your programme.</li>
							<li>Our admissions team calls you to confirm your entry grade and fee plan.</li>
							<li>Pay a 40% deposit and collect your admission letter and reporting date.</li>
						</ol>
						<div class="ep-sep" style="background:rgba(255,255,255,.16);margin:34px 0"></div>
						<p style="margin-bottom:8px"><strong style="color:#fff">Bring with you:</strong></p>
						<ul class="ep-check-list" style="margin-bottom:0">
							<li style="color:rgba(255,255,255,.78)">KCSE / KCPE result slip (original and copy)</li>
							<li style="color:rgba(255,255,255,.78)">National ID or birth certificate</li>
							<li style="color:rgba(255,255,255,.78)">Two passport photographs</li>
						</ul>
						<div class="ep-sep" style="background:rgba(255,255,255,.16);margin:34px 0"></div>
						<p style="margin-bottom:0"><strong style="color:#fff">Questions?</strong><br>Call ${SITE.phone} or WhatsApp the admissions desk. Office hours: ${SITE.hours}.</p>
					</div>
				</div>
				<div class="col-lg-8">
					<form class="ep-apply-form" data-demo-form data-success="Application received. Our admissions office will call you within one working day to confirm your programme, entry grade and fee plan.">
						<div class="section-title text-left" style="margin-bottom:36px;padding:0">
							<span class="ep-uppercase">Application form</span>
							<h2 style="font-size:30px">Tell us about you</h2>
						</div>
						<div class="row">
							<div class="col-md-6">
								<div class="ep-field">
									<label for="apply-name">Full name</label>
									<input class="form-control" id="apply-name" type="text" placeholder="As it appears on your ID" required>
								</div>
							</div>
							<div class="col-md-6">
								<div class="ep-field">
									<label for="apply-email">E-mail address</label>
									<input class="form-control" id="apply-email" type="email" placeholder="you@example.com" required>
								</div>
							</div>
							<div class="col-md-6">
								<div class="ep-field">
									<label for="apply-phone">Phone number</label>
									<input class="form-control" id="apply-phone" type="text" placeholder="07xx xxx xxx" required>
								</div>
							</div>
							<div class="col-md-6">
								<div class="ep-field">
									<label for="apply-id">National ID / birth cert. no.</label>
									<input class="form-control" id="apply-id" type="text" placeholder="e.g. 34567890" required>
								</div>
							</div>
							<div class="col-md-6">
								<div class="ep-field">
									<label for="apply-grade">KCSE / KCPE mean grade</label>
									<select class="form-control" id="apply-grade" required>
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
							</div>
							<div class="col-md-6">
								<div class="ep-field">
									<label for="apply-intake">Preferred intake</label>
									<select class="form-control" id="apply-intake" required>
										<option>January 2027</option>
										<option>May 2027</option>
										<option>September 2027</option>
									</select>
								</div>
							</div>
							<div class="col-md-12">
								<div class="ep-field">
									<label for="apply-programme">Programme of interest</label>
									<select class="form-control" id="apply-programme" required>
										<option value="">Select a programme</option>
${options}
									</select>
								</div>
							</div>
							<div class="col-md-6">
								<div class="ep-field">
									<label for="apply-mode">Preferred study mode</label>
									<select class="form-control" id="apply-mode" required>
										<option>Morning stream</option>
										<option>Afternoon stream</option>
										<option>Evening stream</option>
										<option>Saturday practicals</option>
									</select>
								</div>
							</div>
							<div class="col-md-6">
								<div class="ep-field">
									<label for="apply-sponsor">Fee sponsor</label>
									<select class="form-control" id="apply-sponsor">
										<option>Self / family</option>
										<option>County bursary</option>
										<option>HELB loan</option>
										<option>Employer sponsorship</option>
									</select>
								</div>
							</div>
							<div class="col-md-12">
								<div class="ep-field">
									<label for="apply-message">Anything else we should know?</label>
									<textarea class="form-control" id="apply-message" rows="4" placeholder="Career goal, preferred attachment sector, or support needs"></textarea>
								</div>
							</div>
						</div>
						<label class="ep-checkbox" style="margin-bottom:24px">
							<input type="checkbox" required>
							<span class="box"></span>
							I confirm the information above is accurate and consent to Eastport contacting me about my application.
						</label>
						<div class="ep-alert" role="status"></div>
						<button class="site-btn" type="submit" style="width:100%;padding:18px 10px">Submit application</button>
						<p class="ep-form-note">This preview form does not transmit data. In production it posts to the college admissions desk and sends a copy to ${SITE.email}.</p>
					</form>
				</div>
			</div>
		</div>
	</section>
	<!-- Page end -->

	<!-- fees at a glance -->
	<section class="ep-section-mist spad">
		<div class="container">
			<div class="section-title">
				<span class="ep-uppercase">Fee guidance</span>
				<h2>What a term costs</h2>
				<p>Indicative termly fees by programme level. Exact figures are confirmed in your admission letter.</p>
			</div>
			<div class="table-responsive">
				<table class="ep-table" style="background:#fff">
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
		</div>
	</section>

${ctaBlock()}`;

	return layout({
		title: 'Apply Online | Eastport International Training College',
		description: 'Apply online for the January 2027 intake at Eastport International Training College, Kericho. Choose from 253+ KNEC and CDACC approved programmes across eleven faculties.',
		active: 'courses',
		body
	});
};
