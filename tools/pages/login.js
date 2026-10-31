'use strict';

const { head } = require('../layout');

module.exports = function login() {
	return `${head({
		title: 'Student Portal Login | Eastport International Training College',
		description: 'Sign in to the Eastport International Training College student portal to view results, fee statements, timetables and attachment letters.',
		bodyClass: 'login-body',
		extraStyles: ['css/login.css']
	})}

	<div class="lg-page">
		<div class="lg-bg" style="background-image:url(img/bg.jpg)"></div>

		<div class="lg-shell">

			<!-- Photo / brand panel -->
			<aside class="lg-visual" style="background-image:url(img/page-bg/1.jpg)">
				<div class="lg-visual-top">
					<a href="index.html" class="lg-brand" aria-label="Eastport International Training College home">
						<img src="img/logo-white.svg" alt="Eastport International Training College">
					</a>
					<a href="index.html" class="lg-back"><i class="fa fa-angle-left"></i>Back to website</a>
				</div>

				<div class="lg-visual-body">
					<span class="lg-eyebrow">Student &amp; staff portal</span>
					<h1>Your campus,<br><span>in your pocket.</span></h1>
					<p>One secure sign-in for results, fee statements, class timetables, examination slips and attachment letters — built for the January 2027 cohort.</p>
					<ul class="lg-points">
						<li><i class="fa fa-check-circle"></i>Check continuous assessment and termly results</li>
						<li><i class="fa fa-check-circle"></i>Print your KNEC / CDACC examination slip</li>
						<li><i class="fa fa-check-circle"></i>Track your fee balance and download statements</li>
						<li><i class="fa fa-check-circle"></i>Receive attachment and bursary notices first</li>
					</ul>
				</div>

				<div class="lg-visual-foot">
					<div class="lg-social">
						<a href="https://facebook.com/EastportCollegeKericho" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
						<a href="https://twitter.com/EastportCollege" target="_blank" rel="noopener" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
						<a href="https://instagram.com/eastportcollege" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
						<a href="https://linkedin.com/company/eastport-college" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa fa-linkedin"></i></a>
						<a href="https://youtube.com/@EastportCollege" target="_blank" rel="noopener" aria-label="YouTube"><i class="fa fa-youtube-play"></i></a>
					</div>
					<span class="lg-legal">Chai Plaza 2nd Floor · Kericho CBD</span>
				</div>
			</aside>

			<!-- Form panel -->
			<main class="lg-form-panel">
				<div class="lg-form-inner">
					<div class="lg-form-head">
						<div class="lg-mark"><i class="fa fa-graduation-cap"></i></div>
						<h2>Welcome back</h2>
						<p>Sign in with your admission number to continue to your portal.</p>
					</div>

					<div class="lg-tabs" role="tablist">
						<button type="button" class="active" data-role="student" role="tab" aria-selected="true"><i class="fa fa-graduation-cap"></i>Student</button>
						<button type="button" data-role="staff" role="tab" aria-selected="false"><i class="fa fa-briefcase"></i>Staff</button>
						<button type="button" data-role="guardian" role="tab" aria-selected="false"><i class="fa fa-users"></i>Guardian</button>
					</div>

					<div class="ep-alert" id="login-alert" role="alert" aria-live="polite"></div>

					<form id="login-form" novalidate>
						<div class="lg-field">
							<label for="identifier" id="identifier-label">Admission Number / Student E-mail</label>
							<div class="lg-input-wrap">
								<input class="lg-input" type="text" id="identifier" name="identifier" placeholder="e.g. EITC/2026/0148" autocomplete="username" spellcheck="false" required>
								<i class="fa fa-user-o lg-icon"></i>
							</div>
							<div class="lg-error ep-field-error"></div>
						</div>

						<div class="lg-field">
							<label for="password">Password</label>
							<div class="lg-input-wrap">
								<input class="lg-input" type="password" id="password" name="password" placeholder="Enter your portal password" autocomplete="current-password" required>
								<button type="button" class="lg-input-action" data-toggle-password="password" aria-label="Show password"><i class="fa fa-eye"></i></button>
							</div>
							<div class="lg-error ep-field-error"></div>
						</div>

						<div class="lg-row">
							<label class="ep-checkbox" for="remember">
								<input type="checkbox" id="remember">
								<span class="box"></span>
								Keep me signed in
							</label>
							<a href="#" class="lg-link" id="forgot-password">Forgot password?</a>
						</div>

						<button type="submit" class="lg-submit" id="login-submit">SIGN IN</button>
					</form>

					<div class="lg-alt"><span>or</span></div>

					<a class="lg-alt-btn" href="apply.html"><i class="fa fa-user-plus"></i> Apply as a new student</a>
					<a class="lg-alt-btn" href="contact.html"><i class="fa fa-life-ring"></i> Get help from the ICT desk</a>

					<div class="lg-demo">
						<strong>Preview credentials</strong>
						Admission <code>EITC/2026/0148</code> · Password <code>eastport2026</code><br>
						<button type="button" class="fill-demo" data-fill-demo>Fill demo credentials</button> — or use any admission number with a 6+ character password.
					</div>

					<p class="lg-note">
						Your password is personal — the ICT desk will never ask for it by phone or WhatsApp.<br>
						<a href="contact.html">Contact ICT</a> · <a href="tel:0757478077">0757 478 077</a>
					</p>
				</div>
			</main>
		</div>
	</div>

	<script src="js/data.js"></script>
	<script src="js/app.js"></script>
</body>
</html>`;
};
