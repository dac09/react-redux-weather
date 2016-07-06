import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from './layouts/CoreLayout/CoreLayout'
import HomePage from './containers/HomePage/'

export default (
    <Route path="/" component={CoreLayout}>
      <IndexRoute component={HomePage}/>
      <Route path="home"
            component={HomePage}/>
    </Route>
  );
