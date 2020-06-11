import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyHome from '../../Views/Home/Home';
import MyNotFound from '../../Views/404/404';
import MyPolicy from '../../Views/Policy/Policy';
import MyHowItWorks from '../../Views/HowItWorks/HowItWorks';

export default (): React.ReactElement => (
  <Switch>
    <Route path="/" exact component={MyHome} />
    <Route path="/home/" component={MyHome} />
    <Route path="/policy" component={MyPolicy} />
    <Route path="/how" component={MyHowItWorks} />
    <Route path="/404" component={MyNotFound} />
    <Route component={MyNotFound} />
  </Switch>
);
