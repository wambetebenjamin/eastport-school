'use strict';

const { layout, pageInfo, banner, ctaBlock, gallery, SITE } = require('../layout');

module.exports = function contact() {
	const body = `${pageInfo({ image: 'img/page-bg/5.jpg', crumb: 'Contact', title: 'Talk to real people' })}

	<!-- search section -->
	<section class="search-section ss-other-page">
		<div class="container">
			<div class="search-warp">
				<div class="section-title text-white">
					<h2><span>Find a course first?</span></h2>
				</div>
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<form class="course-search-form" action="courses.html">
							<input type="text" name="q" placeholder="Course or career keyword">
							<select name="faculty" class="ep-search-select">
								<option value="">All faculties</option>
								<option value="health">Health Sciences</option>
								<option value="ict">ICT &amp; Computing</option>
								<option value="business">Business Studies</option>
								<option value="technical">Technical Studies</option>
								<option value="hospitality">Hospitality &amp; Tourism</option>
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

	<!-- Page -->
	<section class="contact-page spad pb-0">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<div class="contact-form-warp">
						<div class="section-title text-white text-left">
							<h2>Get in touch</h2>
							<p>Admissions, fees, bursary applications or attachment letters — send us a message and Sharon from the admissions desk will respond within one working day.</p>
						</div>
						<form class="contact-form" data-demo-form data-success="Thank you. Your message has reached the admissions desk — expect a reply on the phone or e-mail you provided within one working day.">
							<input type="text" placeholder="Your Name" required>
							<input type="email" placeholder="Your E-mail" required>
							<input type="text" placeholder="Subject" required>
							<textarea placeholder="Message" required></textarea>
							<button class="site-btn" type="submit">Send Message</button>
							<div class="ep-alert" role="status"></div>
						</form>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="contact-info-area">
						<div class="section-title text-left p-0">
							<h2>Contact info</h2>
							<p>Walk in, call or WhatsApp — our offices are on the second floor of Chai Plaza, a two-minute walk from the Kericho matatu stage.</p>
						</div>
						<div class="phone-number">
							<span>Admissions hotline</span>
							<h2>${SITE.phone}</h2>
						</div>
						<ul class="contact-list">
							<li>${SITE.campus}</li>
							<li>${SITE.hours}</li>
							<li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
						</ul>
						<div class="social-links">
							<a href="https://facebook.com/EastportCollegeKericho" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
							<a href="https://twitter.com/EastportCollege" target="_blank" rel="noopener" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
							<a href="https://instagram.com/eastportcollege" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
							<a href="https://linkedin.com/company/eastport-college" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa fa-linkedin"></i></a>
							<a href="https://youtube.com/@EastportCollege" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa fa-youtube-play"></i></a>
							<a href="https://tiktok.com/@eastportcollege" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa fa-music"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="ep-map" id="map-canvas">
				<div class="ep-map-card">
					<span class="ep-uppercase">Find the campus</span>
					<h4>Chai Plaza, 2nd Floor</h4>
					<p>Kenyatta Street, Kericho CBD<br>Opposite the county offices, above the ground-floor shops.</p>
					<ul class="ep-detail-facts" style="margin-top:20px">
						<li>Landmark <span>Kericho CBD, Kenyatta Street</span></li>
						<li>Nearest stage <span>Kericho main matatu stage</span></li>
						<li>Accessibility <span>Lift and stair access</span></li>
					</ul>
					<a class="site-btn" style="margin-top:24px;min-width:auto;padding:14px 26px" href="https://www.google.com/maps/search/?api=1&amp;query=Chai+Plaza+Kericho" target="_blank" rel="noopener">Get directions</a>
				</div>
			</div>
		</div>
	</section>
	<!-- Page end -->

${gallery({
		title: 'Come and see the campus',
		text: 'Chai Plaza 2nd Floor on Kenyatta Street — two minutes from the matatu stage. Walk in any weekday between 8:00 AM and 5:00 PM and the admissions desk will show you the labs, the restaurant and the computer suites.',
		items: [
			{ image: 'img/courses/5.jpg' },
			{ image: 'img/courses/3.jpg' },
			{ image: 'img/courses/6.jpg' },
			{ image: 'img/categories/6.jpg' }
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
