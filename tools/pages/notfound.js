'use strict';

const { layout, pageInfo } = require('../layout');

module.exports = function notfound() {
	const body = `${pageInfo({ image: 'img/page-bg/5.jpg', crumb: 'Page not found', title: 'This page has moved' })}

	<section class="spad text-center">
		<div class="container">
			<div class="section-title" style="margin-bottom:40px">
				<span class="ep-uppercase">Error 404</span>
				<h2>We could not find that page</h2>
				<p>The link may be old, or the programme could have been renamed. Try the programme catalogue, or call admissions on 0757 478 077 and we will point you to the right place.</p>
			</div>
			<a href="index.html" class="site-btn">Back to homepage</a>
			<a href="courses.html" class="site-btn ep-btn-outline" style="margin-left:12px">Browse programmes</a>
		</div>
	</section>`;

	return layout({
		title: 'Page not found | Eastport International Training College',
		description: 'The page you were looking for could not be found. Browse the Eastport International Training College programme catalogue or contact admissions.',
		active: '',
		body
	});
};
