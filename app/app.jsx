/* global DEBUG */

require('foundation/scss/normalize');
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
