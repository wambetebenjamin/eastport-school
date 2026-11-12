'use strict';

const { layout, pageInfo, banner, ctaBlock, SITE } = require('../layout');
const EP = require('../content');

function post(item) {
	return `					<!-- blog post -->
					<article class="xg-post">
						<a class="xg-post-thumb" href="blog.html" style="background-image:url(${item.image})" aria-label="${item.title}"></a>
						<div class="xg-post-body">
							<div class="xg-post-meta">
								<span class="xg-post-cat">${item.category}</span>
								<span><i class="fa fa-calendar-o"></i>${item.date}</span>
								<span><i class="fa fa-clock-o"></i>3 min read</span>
							</div>
							<h3><a href="blog.html">${item.title}</a></h3>
							<p>${item.excerpt} Students can follow the full notice board in the student portal, where official circulars, examination timetables and fee statements are published.</p>
							<div class="xg-post-foot">
								<div class="xg-post-author">
									<span class="xg-person-pic" style="background-image:url(${item.authorPic})"></span>
									<span class="xg-post-author-name"><strong>${item.author}</strong><span>Eastport communications</span></span>
								</div>
								<a href="contact.html" class="xg-link-more">Ask the office <span class="xg-arrow">&rsaquo;</span></a>
							</div>
						</div>
					</article>`;
}

module.exports = function news() {
	const list = EP.news.map(post).join('\n');

	const body = `${pageInfo({
		image: 'img/page-bg/3.jpg',
		crumb: 'News',
		title: 'Admissions &amp; academic gazette',
		lead: 'Intake dates, examination notices, attachment placements and bursary deadlines — published here first, then on the notice boards at Chai Plaza.',
		card: {
			title: 'Stay informed',
			text: 'Notices are also pushed to the student portal the same day.',
			items: [
				{ icon: 'fa-calendar-check-o', html: 'January, May and September intakes' },
				{ icon: 'fa-bullhorn', html: 'Examination and registration deadlines' },
				{ icon: 'fa-money', html: 'Kericho County bursary guidance' }
			],
			cta: { href: 'login.html', label: 'Sign in to the portal' }
		}
	})}

	<!-- notice search -->
	<section class="xg-search-band">
		<div class="container">
			<div class="xg-search-card">
				<div class="xg-head xg-head--center">
					<h2>Search the notice board</h2>
					<p>Look up an intake date, an examination notice or a bursary deadline.</p>
				</div>
				<form class="xg-inline-form" data-demo-form data-success="Search is a demo in this preview — browse the notices below or ask the registrar directly.">
					<input class="xg-input" type="text" placeholder="Notice, intake or examination">
					<select class="xg-select">
						<option>All categories</option>
						<option>Admissions</option>
						<option>Examinations</option>
						<option>Student Finance</option>
						<option>Attachment</option>
						<option>Campus</option>
					</select>
					<button class="xg-btn" type="submit"><i class="fa fa-search"></i> Search notices</button>
					<div class="xg-alert" role="status"></div>
				</form>
			</div>
		</div>
	</section>
	<!-- notice search end -->

	<!-- blog list -->
	<section class="xg-sec">
		<div class="container">
			<div class="xg-blog-layout">
				<div>
${list}
					<nav class="xg-pagination" aria-label="Notice pages">
						<span class="is-active">01</span>
						<a href="blog.html">02</a>
						<a href="blog.html">03</a>
						<a href="blog.html" aria-label="Next page"><i class="fa fa-angle-right"></i></a>
					</nav>
				</div>

				<aside class="xg-sidebar">
					<div class="xg-widget">
						<form class="xg-widget-search" data-demo-form data-success="Search is a demo in this preview.">
							<input type="text" placeholder="Search notices" aria-label="Search notices">
							<button type="submit" aria-label="Search"><i class="fa fa-search"></i></button>
						</form>
					</div>
					<div class="xg-widget">
						<h4>Categories</h4>
						<ul>
							<li><a href="blog.html">Admissions <span>04</span></a></li>
							<li><a href="blog.html">Examinations <span>03</span></a></li>
							<li><a href="blog.html">Student Finance <span>02</span></a></li>
							<li><a href="blog.html">Attachment <span>02</span></a></li>
							<li><a href="blog.html">Campus <span>01</span></a></li>
						</ul>
					</div>
					<div class="xg-widget">
						<h4>Archives</h4>
						<ul>
							<li><a href="blog.html">October 2026</a></li>
							<li><a href="blog.html">September 2026</a></li>
							<li><a href="blog.html">August 2026</a></li>
							<li><a href="blog.html">July 2026</a></li>
						</ul>
					</div>
					<div class="xg-widget xg-widget--cta">
						<h4>Need a printed copy?</h4>
						<p>Official circulars are pinned on the notice board outside Room 2A. You can also request a PDF from the registrar.</p>
						<a href="contact.html" class="xg-btn xg-btn--block">Contact registrar</a>
					</div>
					<div class="xg-widget">
						<h4>Portal</h4>
						<ul>
							<li><a href="login.html">Student login</a></li>
							<li><a href="apply.html">Apply online</a></li>
							<li><a href="courses.html">Programme catalogue</a></li>
						</ul>
					</div>
				</aside>
			</div>
		</div>
	</section>
	<!-- blog list end -->

${banner({ title: 'Never miss an intake deadline', text: 'Subscribe to the Eastport admissions and academic gazette for intake dates, KNEC examination timetables, bursary notices and campus innovations.', cta: 'Subscribe to the gazette', href: 'contact.html' })}

${ctaBlock()}`;

	return layout({
		title: 'News & Notices | Eastport International Training College',
		description: 'Admissions deadlines, KNEC and CDACC examination notices, bursary announcements and campus news from Eastport International Training College, Kericho.',
		active: 'news',
		body
	});
};
