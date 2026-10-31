'use strict';

const { layout, pageInfo, banner, ctaBlock } = require('../layout');
const EP = require('../content');

function post(item) {
	return `				<!-- blog post -->
					<div class="blog-post">
						<img src="${item.image}" alt="${item.title}">
						<h3>${item.title}</h3>
						<div class="blog-metas">
							<div class="blog-meta author">
								<div class="post-author set-bg" style="background-image:url(${item.authorPic})"></div>
								<a href="blog.html">${item.author}</a>
							</div>
							<div class="blog-meta">
								<a href="blog.html">${item.category}</a>
							</div>
							<div class="blog-meta">
								<a href="blog.html">${item.date}</a>
							</div>
							<div class="blog-meta">
								<a href="blog.html">Read 3 min</a>
							</div>
						</div>
						<p>${item.excerpt} Students can follow the full notice board in the student portal, where official circulars, examination timetables and fee statements are published.</p>
						<a href="contact.html" class="site-btn readmore">Ask the office</a>
					</div>`;
}

module.exports = function news() {
	const list = EP.news.map(post).join('\n');

	const body = `${pageInfo({ image: 'img/page-bg/3.jpg', crumb: 'News', title: 'Admissions & academic gazette' })}

	<!-- search section -->
	<section class="search-section ss-other-page">
		<div class="container">
			<div class="search-warp">
				<div class="section-title text-white">
					<h2><span>Search the notice board</span></h2>
				</div>
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<form class="course-search-form" data-demo-form data-success="Search is a demo in this preview — browse the notices below or ask the registrar directly.">
							<input type="text" placeholder="Notice, intake or examination">
							<input type="text" class="last-m" placeholder="Category">
							<button class="site-btn btn-dark" type="submit">Search Notices</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- search section end -->

	<!-- Page -->
	<section class="blog-page spad pb-0">
		<div class="container">
			<div class="row">
				<div class="col-lg-9">
${list}
					<div class="site-pagination">
						<span class="active">01.</span>
						<a href="blog.html">02.</a>
						<a href="blog.html">03</a>
					</div>
				</div>
				<div class="col-lg-3 col-md-5 col-sm-9 sidebar">
					<div class="sb-widget-item">
						<form class="search-widget" data-demo-form data-success="Search is a demo in this preview.">
							<input type="text" placeholder="Search notices">
							<button type="submit"><i class="fa fa-search"></i></button>
						</form>
					</div>
					<div class="sb-widget-item">
						<h4 class="sb-w-title">Categories</h4>
						<ul>
							<li><a href="blog.html">Admissions</a></li>
							<li><a href="blog.html">Examinations</a></li>
							<li><a href="blog.html">Student Finance</a></li>
							<li><a href="blog.html">Attachment</a></li>
							<li><a href="blog.html">Campus</a></li>
						</ul>
					</div>
					<div class="sb-widget-item">
						<h4 class="sb-w-title">Archives</h4>
						<ul>
							<li><a href="blog.html">October 2026</a></li>
							<li><a href="blog.html">September 2026</a></li>
							<li><a href="blog.html">August 2026</a></li>
							<li><a href="blog.html">July 2026</a></li>
						</ul>
					</div>
					<div class="sb-widget-item">
						<h4 class="sb-w-title">Quick links</h4>
						<ul>
							<li><a href="apply.html">Apply online</a></li>
							<li><a href="login.html">Student portal</a></li>
							<li><a href="courses.html">Programme catalogue</a></li>
							<li><a href="contact.html">Admissions desk</a></li>
						</ul>
					</div>
					<div class="ep-help-card">
						<h4>Need a printed copy?</h4>
						<p>Official circulars are pinned on the notice board outside Room 2A. You can also request a PDF from the registrar.</p>
						<a href="contact.html" class="site-btn">Contact registrar</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Page end -->

${banner({ title: 'Never miss an intake deadline', text: 'Subscribe to the Eastport admissions and academic gazette for intake dates, KNEC examination timetables, bursary notices and campus innovations.', cta: 'Subscribe to the gazette', href: 'contact.html' })}

${ctaBlock()}`;

	return layout({
		title: 'News & Notices | Eastport International Training College',
		description: 'Admissions deadlines, KNEC and CDACC examination notices, bursary announcements and campus news from Eastport International Training College, Kericho.',
		active: 'news',
		body
	});
};
