'use strict';

const { layout, stats, banner, ctaBlock, SITE } = require('../layout');

module.exports = function home() {
	const body = `	<!-- Hero section -->
	<section class="hero-section set-bg" style="background-image:url(img/bg.jpg)">
		<div class="container">
			<div class="hero-text text-white">
				<span class="hero-kicker">TVETA &amp; KNEC Accredited · Kericho CBD</span>
				<h2>Real practical skills.<br>A career you can count on.</h2>
				<p>Karibu Eastport International Training College at Chai Plaza 2nd Floor, Kericho CBD. Here learning is personal and hands-on — caring tutors, modern clinical and computer labs, and guaranteed three-month industry attachments.</p>
				<div class="hero-actions">
					<a href="apply.html" class="site-btn">Apply for January 2027</a>
					<a href="courses.html" class="site-btn ghost">Explore 253 Courses</a>
				</div>
				<p class="hero-note"><i class="fa fa-check-circle"></i>Flexible three-part fee instalments &nbsp;·&nbsp; <i class="fa fa-check-circle"></i>98% attachment placement &nbsp;·&nbsp; <i class="fa fa-check-circle"></i>${SITE.examCentres}</p>
			</div>
		</div>
	</section>
	<!-- Hero section end -->

${stats()}

	<!-- categories section -->
	<section class="categories-section spad">
		<div class="container">
			<div class="section-title">
				<span class="ep-uppercase">Eleven specialised faculties</span>
				<h2>Our Course Categories</h2>
				<p>From clinical simulation and software engineering to commercial kitchens and solar workshops — every Eastport programme is delivered with 70% practical, industry-standard training.</p>
			</div>
			<div class="row" id="faculty-grid">
				<!-- faculty cards are rendered by js/app.js -->
			</div>
			<div class="text-center" style="margin-top:40px">
				<a href="courses.html" class="site-btn ep-btn-outline">View all 253 programmes</a>
			</div>
		</div>
	</section>
	<!-- categories section end -->

	<!-- programme finder -->
	<section class="ep-finder">
		<div class="container">
			<div class="section-title text-white">
				<span class="ep-uppercase" style="color:#ffb3c1">Quick programme finder · January 2027 cohort</span>
				<h2>Find your ideal career qualification</h2>
				<p>Search by career specialisation, faculty, or minimum KCSE grade.</p>
			</div>
			<div class="row">
				<div class="col-lg-10 offset-lg-1">
					<form class="ep-finder-form" id="finder-form">
						<div class="row">
							<div class="col-lg-4 col-md-6">
								<label for="finder-q">Career keyword / specialisation</label>
								<input type="text" class="form-control" id="finder-q" name="q" placeholder="e.g. nursing, solar, accounting">
							</div>
							<div class="col-lg-4 col-md-6">
								<label for="finder-faculty">Faculty / school of study</label>
								<select class="form-control" id="finder-faculty" name="faculty">
									<option value="">All 11 faculties (full catalogue)</option>
									<option value="health">1. School of Health and Social Sciences</option>
									<option value="ict">2. School of Information Communication Technology</option>
									<option value="business">3. School of Business Studies</option>
									<option value="professional">4. School of Professional Studies (KASNEB / CHRP)</option>
									<option value="media">5. School of Journalism and Mass Media</option>
									<option value="languages">6. School of Languages</option>
									<option value="technical">7. School of Technical Studies</option>
									<option value="hospitality">8. School of Hospitality and Institutional Management</option>
									<option value="beauty">9. School of Beauty, Hairdressing and Personal Care</option>
									<option value="office">10. School of Office Administration</option>
									<option value="international">11. International Courses (ABMA / ABE / ICM / ICDL)</option>
								</select>
							</div>
							<div class="col-lg-4 col-md-12">
								<label for="finder-grade">Minimum KCSE grade</label>
								<select class="form-control" id="finder-grade" name="grade">
									<option value="">Any entry grade (including KCPE / open entry)</option>
									<option value="C+">C+ and above</option>
									<option value="C">C (plain)</option>
									<option value="C-">C- (minus)</option>
									<option value="D+">D+ (plus)</option>
									<option value="D">D (plain)</option>
									<option value="open">Open entry / artisan</option>
								</select>
							</div>
						</div>
						<div class="row align-items-center">
							<div class="col-lg-5">
								<button class="site-btn" type="submit">Search Matching Programmes</button>
							</div>
							<div class="col-lg-7">
								<p class="ep-finder-note">Intakes: January, May and September · <a href="contact.html">View termly fees</a></p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
	<!-- programme finder end -->

	<!-- about / practical learning -->
	<section class="spad">
		<div class="container">
			<div class="row ep-feature-row">
				<div class="col-lg-6">
					<div class="ep-feature-media">
						<img src="img/signup-bg.jpg" alt="Eastport student learning in the campus computer suite">
						<div class="ep-media-badge">
							<h4>70%</h4>
							<p>Practical curriculum time</p>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="section-title text-left">
						<span class="ep-uppercase">World-class training environment</span>
						<h2>Experience practical learning at Eastport</h2>
						<p class="ep-lead">70% of curriculum time is dedicated to clinical simulation, practical computer labs and engineering workshops. You will not just sit through slides — you will practise the exact tasks employers in Kericho and the South Rift pay for.</p>
					</div>
					<ul class="ep-feature-list">
						<li>Clinical simulation and phlebotomy labs with diagnostic centrifuges and draw stations</li>
						<li>High-speed fibre ICT suites, programming environments and cyber-security testbeds</li>
						<li>Commercial stainless-steel kitchens, pastry ovens and front-office simulation stations</li>
						<li>Guaranteed three-month industry attachment with 98% placement</li>
					</ul>
					<a href="about.html" class="site-btn">Inside the campus</a>
					<a href="courses.html" class="site-btn ep-btn-outline" style="margin-left:14px">Browse faculties</a>
				</div>
			</div>
		</div>
	</section>
	<!-- about end -->

	<!-- featured programmes -->
	<section class="course-section spad ep-section-mist">
		<div class="container">
			<div class="section-title mb-0">
				<span class="ep-uppercase">January 2027 intake</span>
				<h2>Featured programmes</h2>
				<p>Hand-picked qualifications with the strongest attachment partnerships and employer demand in Kericho County.</p>
			</div>
		</div>
		<div class="course-warp">
			<div class="row" id="featured-grid">
				<!-- programme cards are rendered by js/app.js -->
			</div>
			<div class="text-center" style="margin-top:30px">
				<a href="courses.html" class="site-btn">See all programmes</a>
			</div>
		</div>
	</section>
	<!-- featured programmes end -->

	<!-- signup section -->
	<section class="signup-section spad">
		<div class="signup-bg set-bg" style="background-image:url(img/signup-bg.jpg)"></div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-6">
					<div class="signup-warp">
						<div class="section-title text-white text-left">
							<span class="ep-uppercase" style="color:#ffb3c1">Careers at Eastport</span>
							<h2>Sign up to become a trainer</h2>
							<p>We are always looking for TVET trainers and technicians with real industry experience. Register your interest and our academic office will invite you for a demonstration lesson.</p>
						</div>
						<form class="signup-form" data-demo-form data-success="Thank you. Your trainer application has been received — the academic office will contact you within five working days.">
							<input type="text" placeholder="Your Name" required>
							<input type="email" placeholder="Your E-mail" required>
							<input type="text" placeholder="Your Phone" required>
							<label for="v-upload" class="file-up-btn">Upload CV</label>
							<input type="file" id="v-upload">
							<button class="site-btn" type="submit">Submit application</button>
							<div class="ep-alert" role="status"></div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- signup section end -->

	<!-- testimonials -->
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
	<!-- testimonials end -->

	<!-- leadership -->
	<section class="spad ep-section-mist">
		<div class="container">
			<div class="section-title">
				<span class="ep-uppercase">Institutional leadership</span>
				<h2>A personal welcome to Eastport College</h2>
				<p>Behind our accreditation and modern labs are leaders dedicated to mentorship, student dignity and lifelong career growth.</p>
			</div>
			<div class="row" id="team-grid">
				<!-- leadership cards are rendered by js/app.js -->
			</div>
		</div>
	</section>
	<!-- leadership end -->

	<!-- news -->
	<section class="spad">
		<div class="container">
			<div class="section-title">
				<span class="ep-uppercase">Admissions &amp; academic gazette</span>
				<h2>Campus news &amp; notices</h2>
				<p>Intake deadlines, KNEC exam timetables, county bursary notices and campus innovations — straight from the registrar.</p>
			</div>
			<div class="row" id="news-grid">
				<!-- news cards are rendered by js/app.js -->
			</div>
			<div class="text-center" style="margin-top:20px">
				<a href="blog.html" class="site-btn ep-btn-outline">Read all news</a>
			</div>
		</div>
	</section>
	<!-- news end -->

${banner({})}

${ctaBlock()}`;

	return layout({
		title: 'Eastport International Training College | TVETA & KNEC Centre 401002 - Kericho',
		description: 'Eastport International Training College, Chai Plaza 2nd Floor, Kericho CBD. 253+ TVETA-approved, KNEC and CDACC certified programmes across 11 faculties with guaranteed three-month attachment.',
		active: 'home',
		body
	});
};
