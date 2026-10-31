#!/usr/bin/env node
/* Static site builder for the Eastport College redesign.
   Usage: node tools/build.js
   Outputs the HTML pages in the repository root (served statically by Vercel). */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const pages = {
	'index.html': require('./pages/home'),
	'about.html': require('./pages/about'),
	'courses.html': require('./pages/courses'),
	'single-course.html': require('./pages/single'),
	'blog.html': require('./pages/news'),
	'contact.html': require('./pages/contact'),
	'apply.html': require('./pages/apply'),
	'login.html': require('./pages/login'),
	'dashboard.html': require('./pages/dashboard'),
	'404.html': require('./pages/notfound')
};

Object.keys(pages).forEach((file) => {
	const html = pages[file]();
	fs.writeFileSync(path.join(ROOT, file), html, 'utf8');
	console.log('built ' + file);
});

console.log('Done. ' + Object.keys(pages).length + ' pages written.');
