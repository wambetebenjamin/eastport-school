/* Build-time asset version.
   Stylesheets and scripts keep stable filenames (so the site stays plain
   static HTML), therefore every reference to them is tagged with ?v=<hash>.
   The hash is derived from the bytes of every file in css/ and js/, so any
   change to a stylesheet or script produces a new URL and can never be served
   from a stale browser cache. */
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');

function walk(dir) {
	const out = [];
	fs.readdirSync(dir, { withFileTypes: true })
		.sort((a, b) => (a.name < b.name ? -1 : 1))
		.forEach((entry) => {
			const full = path.join(dir, entry.name);
			if (entry.isDirectory()) out.push(...walk(full));
			else out.push(full);
		});
	return out;
}

const hash = crypto.createHash('sha1');
['css', 'js'].forEach((dir) => {
	const abs = path.join(ROOT, dir);
	if (!fs.existsSync(abs)) return;
	walk(abs).forEach((file) => {
		hash.update(path.relative(ROOT, file).replace(/\\/g, '/'));
		hash.update(fs.readFileSync(file));
	});
});

module.exports = hash.digest('hex').slice(0, 10);
