/* global DEBUG */

require('foundation/scss/normalize');
require('foundation/scss/foundation/components/_grid');
require('foundation/scss/foundation/components/_visibility');

require('./styles/avenir');
require('./styles/app');
require('./styles/triangles');

import { render } from 'react';
import { run } from 'react-router';
import routes from './routes';

run(routes, function(Handler) {
    render(<Handler />, document.getElementById('app'));
});

if (DEBUG) {
    console.log('dev');
} else {
    console.log('production');
}
