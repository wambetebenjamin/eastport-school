'use strict';

const { layout, stats, banner, gallery, SITE } = require('../layout');

/* Home page follows the template's own section order one-for-one:
   hero (+ inline sign-up bar) · faculties · search band · featured
   programmes · trainer sign-up split · join banner · footer. */

module.exports = function home() {
	const body = `\t<!-- Hero section -->
\t<section class="hero-section set-bg" style="background-image:url(img/bg.jpg)">
\t\t<div class="container">
\t\t\t<div class="hero-text text-white">
\t\t\t\t<span class="hero-kicker">TVETA &amp; KNEC Accredited · Kericho CBD</span>
\t\t\t\t<h2>Real practical skills. A career you can count on.</h2>
\t\t\t\t<p>Karibu Eastport International Training College at Chai Plaza 2nd Floor, Kericho CBD. Here learning is personal and hands-on — caring tutors, modern clinical and computer labs, and guaranteed three-month industry attachments.</p>
\t\t\t</div>
\t\t\t<div class="row">
\t\t\t\t<div class="col-lg-10 offset-lg-1">
\t\t\t\t\t<form class="intro-newslatter" data-demo-form data-success="Asante! Your prospectus request has been received — admissions will call you before the next intake deadline.">
\t\t\t\t\t\t<input type="text" name="name" placeholder="Your name" required>
\t\t\t\t\t\t<input type="email" name="email" class="last-s" placeholder="Your e-mail" required>
\t\t\t\t\t\t<button class="site-btn" type="submit">Apply now</button>
\t\t\t\t\t\t<div class="ep-alert" role="status"></div>
\t\t\t\t\t</form>
\t\t\t\t\t<p class="hero-centres">${SITE.examCentres} &nbsp;·&nbsp; January · May · September intakes</p>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</section>
\t<!-- Hero section end -->

${stats()}

\t<!-- categories section -->
\t<section class="categories-section spad">
\t\t<div class="container">
\t\t\t<div class="section-title">
\t\t\t\t<h2>Our Course Categories</h2>
\t\t\t\t<p>Eleven specialised faculties under one roof at Chai Plaza — from clinical simulation and software engineering to commercial kitchens and solar workshops.</p>
\t\t\t</div>
\t\t\t<div class="row" id="faculty-grid">
\t\t\t\t<!-- faculty cards are rendered by js/app.js -->
\t\t\t</div>
\t\t\t<div class="text-center" style="margin-top:40px">
\t\t\t\t<a href="courses.html" class="site-btn ep-btn-outline">View all 253 programmes</a>
\t\t\t</div>
\t\t</div>
\t</section>
\t<!-- categories section end -->

\t<!-- search section -->
\t<section class="search-section">
\t\t<div class="container">
\t\t\t<div class="search-warp">
\t\t\t\t<div class="section-title text-white">
\t\t\t\t\t<h2><span>Search your course</span></h2>
\t\t\t\t</div>
\t\t\t\t<div class="row">
\t\t\t\t\t<div class="col-lg-10 offset-lg-1">
\t\t\t\t\t\t<form class="course-search-form" id="home-search-form" action="courses.html">
\t\t\t\t\t\t\t<input type="text" name="q" placeholder="Course or career keyword">
\t\t\t\t\t\t\t<select name="faculty" class="ep-search-select">
\t\t\t\t\t\t\t\t<option value="">All faculties</option>
\t\t\t\t\t\t\t\t<option value="health">Health Sciences</option>
\t\t\t\t\t\t\t\t<option value="ict">ICT &amp; Computing</option>
\t\t\t\t\t\t\t\t<option value="business">Business Studies</option>
\t\t\t\t\t\t\t\t<option value="professional">Professional Studies</option>
\t\t\t\t\t\t\t\t<option value="media">Journalism &amp; Media</option>
\t\t\t\t\t\t\t\t<option value="languages">Languages</option>
\t\t\t\t\t\t\t\t<option value="technical">Technical Studies</option>
\t\t\t\t\t\t\t\t<option value="hospitality">Hospitality &amp; Tourism</option>
\t\t\t\t\t\t\t\t<option value="beauty">Beauty &amp; Personal Care</option>
\t\t\t\t\t\t\t\t<option value="office">Office Administration</option>
\t\t\t\t\t\t\t\t<option value="international">International Courses</option>
\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t<button class="site-btn btn-dark" type="submit">Search Course</button>
\t\t\t\t\t\t</form>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</section>
\t<!-- search section end -->

\t<!-- course section -->
\t<section class="course-section spad">
\t\t<div class="container">
\t\t\t<div class="section-title mb-0">
\t\t\t\t<h2>Featured Courses</h2>
\t\t\t\t<p>Hand-picked qualifications with the strongest attachment partnerships and employer demand in Kericho County. Fees are per term, payable in three instalments.</p>
\t\t\t</div>
\t\t</div>
\t\t<div class="course-warp">
\t\t\t<div class="text-center">
\t\t\t\t<ul class="course-filter">
\t\t\t\t\t<li class="control mixitup-control-active" data-level="all">All</li>
\t\t\t\t\t<li class="control" data-level="diploma">Diploma</li>
\t\t\t\t\t<li class="control" data-level="certificate">Certificate</li>
\t\t\t\t\t<li class="control" data-level="artisan">Artisan</li>
\t\t\t\t\t<li class="control" data-level="professional">Professional</li>
\t\t\t\t</ul>
\t\t\t</div>
\t\t\t<div class="row course-items-area" id="featured-grid">
\t\t\t\t<!-- programme cards are rendered by js/app.js -->
\t\t\t</div>
\t\t\t<div class="text-center" style="margin-top:30px">
\t\t\t\t<a href="courses.html" class="site-btn">See all programmes</a>
\t\t\t</div>
\t\t</div>
\t</section>
\t<!-- course section end -->

\t<!-- signup section -->
\t<section class="signup-section spad">
\t\t<div class="signup-bg set-bg" style="background-image:url(img/signup-bg.jpg)"></div>
\t\t<div class="container-fluid">
\t\t\t<div class="row">
\t\t\t\t<div class="col-lg-6">
\t\t\t\t\t<div class="signup-warp">
\t\t\t\t\t\t<div class="section-title text-white text-left">
\t\t\t\t\t\t\t<h2>Sign up to become a trainer</h2>
\t\t\t\t\t\t\t<p>We are always looking for TVET trainers and technicians with real industry experience. Register your interest and our academic office will invite you for a demonstration lesson.</p>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<form class="signup-form" data-demo-form data-success="Thank you. Your trainer application has been received — the academic office will contact you within five working days.">
\t\t\t\t\t\t\t<input type="text" placeholder="Your Name" required>
\t\t\t\t\t\t\t<input type="email" placeholder="Your E-mail" required>
\t\t\t\t\t\t\t<input type="text" placeholder="Your Phone" required>
\t\t\t\t\t\t\t<label for="v-upload" class="file-up-btn">Upload CV</label>
\t\t\t\t\t\t\t<input type="file" id="v-upload">
\t\t\t\t\t\t\t<button class="site-btn" type="submit">Submit application</button>
\t\t\t\t\t\t\t<div class="ep-alert" role="status"></div>
\t\t\t\t\t\t</form>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</section>
\t<!-- signup section end -->

${gallery({
		title: 'Inside Eastport at Chai Plaza',
		text: 'Eight floors of practice space on Kenyatta Street — clinical simulation, the cyber range, a working restaurant and pastry hub, solar and welding workshops, the salon and the media studio.',
		items: [
			{ image: 'img/courses/1.jpg', caption: 'Clinical simulation lab' },
			{ image: 'img/courses/3.jpg', caption: 'ICT cyber range' },
			{ image: 'img/courses/2.jpg', caption: 'Restaurant & pastry hub' },
			{ image: 'img/courses/4.jpg', caption: 'Solar and electrical workshop' },
			{ image: 'img/categories/3.jpg', caption: 'Business enterprise room' },
			{ image: 'img/page-bg/1.jpg', caption: 'Library and study hub' },
			{ image: 'img/courses/5.jpg', caption: 'Beauty therapy salon' },
			{ image: 'img/categories/5.jpg', caption: 'Media and journalism studio' }
		]
	})}

${banner({
		title: 'Join Our Community Now!',
		text: 'Applications for the January 2027 intake are open across all eleven faculties. Secure your place with a 40% deposit and pay the balance in three flexible instalments.',
		cta: 'Register Now',
		href: 'apply.html'
	})}`;

	return layout({
		title: 'Eastport International Training College | TVETA & KNEC Centre 401002 - Kericho',
		description: 'Eastport International Training College, Chai Plaza 2nd Floor, Kericho CBD. 253+ TVETA-approved, KNEC and CDACC certified programmes across 11 faculties with guaranteed three-month attachment.',
		active: 'home',
		body
	});
};
