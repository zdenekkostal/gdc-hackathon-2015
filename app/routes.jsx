import { Route, DefaultRoute } from 'react-router';

import Index from './pages/index';

export default (
    <Route path="/">
        <DefaultRoute name="index" handler={Index} />
    </Route>
);
