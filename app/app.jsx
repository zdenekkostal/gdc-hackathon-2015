/* global DEBUG */

require('foundation/scss/normalize');
require('foundation/scss/foundation/components/_grid');
require('foundation/scss/foundation/components/_visibility');
require('foundation/scss/foundation/components/_forms');

require('./styles/avenir');
require('./styles/app');
require('./styles/triangles');

// Fixes Firefox unknow lastMatch in Intl polyfill
// https://github.com/andyearnshaw/Intl.js/pull/80
var re = /hi/g;
re.test("hi there!");

import { Intl } from 'intl';
import { render } from 'react';
import { run } from 'react-router';
import routes from './routes';

run(routes, function(Handler) {
    render(<Handler />, document.getElementById('app'));
});
