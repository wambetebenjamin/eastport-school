'use strict';

const { layout, pageInfo, SITE } = require('../layout');

module.exports = function notfound() {
	const body = `${pageInfo({
		image: 'img/page-bg/5.jpg',
		crumb: 'Page not found',
		title: 'This page has moved',
		lead: 'The link may be old, or a programme could have been renamed. The catalogue and the admissions desk are both one click away.',
		card: {
			title: 'Find it again',
			items: [
				{ icon: 'fa-th-list', html: '<a href="courses.html">Browse all 253 programmes</a>' },
				{ icon: 'fa-home', html: '<a href="index.html">Return to the homepage</a>' },
				{ icon: 'fa-phone', html: `<a href="${SITE.tel}">Call ${SITE.phone}</a>` }
			],
			cta: { href: 'contact.html', label: 'Contact admissions' }
		}
	})}

	<section class="spad text-center">
		<div class="container">
			<div class="section-title" style="margin-bottom:40px">
				<span class="ep-uppercase">Still stuck?</span>
				<h2>We will find it with you</h2>
				<p>Call admissions on ${SITE.phone} or walk into Chai Plaza 2nd Floor — we can look up the programme or the notice you were after.</p>
			</div>
			<a href="courses.html" class="site-btn">Browse the catalogue <span class="ep-btn-arrow">&rsaquo;</span></a>
		</div>
	</section>`;

	return layout({
		title: 'Page not found | Eastport International Training College',
		description: 'The page you were looking for could not be found. Browse the Eastport International Training College programme catalogue or contact admissions.',
		active: '',
		body
	});
};
