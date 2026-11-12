'use strict';

const { layout, pageInfo, banner, ctaBlock, gallery, SITE } = require('../layout');

module.exports = function contact() {
	const body = `${pageInfo({
		image: 'img/page-bg/5.jpg',
		crumb: 'Contact',
		title: 'Talk to real people',
		lead: 'Sharon and the admissions team answer the phone, WhatsApp and the front desk themselves. Walk in any weekday — no appointment needed.',
		card: {
			title: 'Reach us today',
			text: 'Chai Plaza 2nd Floor, Kenyatta Street, Kericho CBD.',
			items: [
				{ icon: 'fa-phone', html: `<a href="${SITE.tel}">${SITE.phone}</a>` },
				{ icon: 'fa-whatsapp', html: `<a href="${SITE.whatsapp}" target="_blank" rel="noopener">WhatsApp admissions</a>` },
				{ icon: 'fa-envelope-o', html: `<a href="mailto:${SITE.email}">${SITE.email}</a>` },
				{ icon: 'fa-clock-o', html: SITE.hours }
			],
			cta: { href: 'apply.html', label: 'Apply online instead' }
		}
	})}

	<!-- search band -->
	<section class="xg-search-band">
		<div class="container">
			<div class="xg-search-card">
				<div class="xg-head xg-head--center">
					<h2>Find a course first?</h2>
					<p>Search the catalogue, then call admissions about entry grades and fees.</p>
				</div>
				<form class="xg-inline-form" action="courses.html">
					<input class="xg-input" type="text" name="q" placeholder="Course or career keyword">
					<select class="xg-select" name="faculty">
						<option value="">All faculties</option>
						<option value="health">Health Sciences</option>
						<option value="ict">ICT &amp; Computing</option>
						<option value="business">Business Studies</option>
						<option value="technical">Technical Studies</option>
						<option value="hospitality">Hospitality &amp; Tourism</option>
						<option value="international">International Courses</option>
					</select>
					<button class="xg-btn" type="submit"><i class="fa fa-search"></i> Search course</button>
				</form>
			</div>
		</div>
	</section>
	<!-- search band end -->

	<!-- contact -->
	<section class="xg-sec">
		<div class="container">
			<div class="xg-contact-grid">
				<div class="xg-contact-form">
					<div class="xg-head">
						<span class="xg-eyebrow">Get in touch</span>
						<h2>Send the admissions desk a message</h2>
						<p>Admissions, fees, bursary applications or attachment letters — send us a message and Sharon will respond within one working day.</p>
					</div>
					<form data-demo-form data-success="Thank you. Your message has reached the admissions desk — expect a reply on the phone or e-mail you provided within one working day.">
						<div class="xg-form-row">
							<div class="xg-field">
								<label for="c-name">Your name</label>
								<input class="xg-input" id="c-name" type="text" placeholder="e.g. Brian Kiprotich" required>
							</div>
							<div class="xg-field">
								<label for="c-email">E-mail</label>
								<input class="xg-input" id="c-email" type="email" placeholder="you@example.com" required>
							</div>
						</div>
						<div class="xg-form-row">
							<div class="xg-field">
								<label for="c-phone">Phone</label>
								<input class="xg-input" id="c-phone" type="tel" placeholder="07xx xxx xxx" required>
							</div>
							<div class="xg-field">
								<label for="c-subject">Subject</label>
								<select class="xg-select" id="c-subject">
									<option>Admissions &amp; entry grades</option>
									<option>Fees &amp; payment plans</option>
									<option>Bursary and HELB guidance</option>
									<option>Attachment letters</option>
									<option>Portal or ICT support</option>
									<option>Something else</option>
								</select>
							</div>
						</div>
						<div class="xg-field">
							<label for="c-message">Message</label>
							<textarea class="xg-textarea" id="c-message" placeholder="Tell us your KCSE grade and the career you are aiming for..." required></textarea>
						</div>
						<label class="xg-check">
							<input type="checkbox" required>
							<span>I understand my details are used only to answer this enquiry.</span>
						</label>
						<button class="xg-btn" type="submit">Send message <span class="xg-arrow">&rsaquo;</span></button>
						<div class="xg-alert" role="status"></div>
					</form>
				</div>

				<aside class="xg-contact-list">
					<div class="xg-contact-card">
						<span class="xg-eyebrow">Admissions hotline</span>
						<a class="xg-contact-phone" href="${SITE.tel}">${SITE.phone}</a>
						<ul>
							<li><i class="fa fa-whatsapp"></i><span><a href="${SITE.whatsapp}" target="_blank" rel="noopener">WhatsApp admissions</a></span></li>
							<li><i class="fa fa-envelope-o"></i><span><a href="mailto:${SITE.email}">${SITE.email}</a></span></li>
							<li><i class="fa fa-map-marker"></i><span>${SITE.campus}</span></li>
							<li><i class="fa fa-clock-o"></i><span>${SITE.hours}</span></li>
						</ul>
						<div class="xg-contact-social">
							<a href="https://facebook.com/EastportCollegeKericho" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
							<a href="https://twitter.com/EastportCollege" target="_blank" rel="noopener" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
							<a href="https://instagram.com/eastportcollege" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
							<a href="https://linkedin.com/company/eastport-college" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa fa-linkedin"></i></a>
							<a href="https://youtube.com/@EastportCollege" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa fa-youtube-play"></i></a>
							<a href="https://tiktok.com/@eastportcollege" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa fa-music"></i></a>
						</div>
					</div>

					<div class="xg-map-card" id="map-canvas">
						<span class="xg-eyebrow">Find the campus</span>
						<h4>Chai Plaza, 2nd Floor</h4>
						<p>Kenyatta Street, Kericho CBD — opposite the county offices, above the ground-floor shops.</p>
						<ul class="xg-detail-facts">
							<li>Landmark <span>Kericho CBD, Kenyatta Street</span></li>
							<li>Nearest stage <span>Kericho main matatu stage</span></li>
							<li>Accessibility <span>Lift and stair access</span></li>
						</ul>
						<a class="xg-btn xg-btn--block" href="https://www.google.com/maps/search/?api=1&amp;query=Chai+Plaza+Kericho" target="_blank" rel="noopener">Get directions <span class="xg-arrow">&rsaquo;</span></a>
					</div>
				</aside>
			</div>
		</div>
	</section>
	<!-- contact end -->

${gallery({
		title: 'Come and see the campus',
		text: 'Chai Plaza 2nd Floor on Kenyatta Street — two minutes from the matatu stage. Walk in any weekday between 8:00 AM and 5:00 PM and the admissions desk will show you the labs, the restaurant and the computer suites.',
		items: [
			{ image: 'img/courses/5.jpg', caption: 'Training kitchen' },
			{ image: 'img/courses/3.jpg', caption: 'Computer suite' },
			{ image: 'img/courses/6.jpg', caption: 'Workshop' },
			{ image: 'img/categories/6.jpg', caption: 'ICT lab' }
		]
	})}

${banner({ title: 'Rather speak on WhatsApp?', text: 'Send “Hello Eastport Admissions” to 0757 478 077 and a real person from our admissions desk will reply during working hours — no bots, no queues.', cta: 'Chat with admissions', href: SITE.whatsapp })}

${ctaBlock()}`;

	return layout({
		title: 'Contact & Admissions | Eastport International Training College, Kericho',
		description: 'Contact Eastport International Training College: Chai Plaza 2nd Floor, Kenyatta Street, Kericho CBD. Call 0757 478 077, WhatsApp admissions or send a message.',
		active: 'contact',
		body
	});
};
