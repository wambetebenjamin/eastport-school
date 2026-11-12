'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Evaluate the browser content store (js/data.js) so pages can be pre-rendered.
const file = path.join(__dirname, '..', 'js', 'data.js');
const source = fs.readFileSync(file, 'utf8');
const sandbox = { window: {}, document: {} };
vm.createContext(sandbox);
vm.runInContext(source + '\n;this.__EP = EP;', sandbox);

module.exports = sandbox.__EP;
