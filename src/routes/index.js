import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import StudentList from '../pages/StudentList';
import PlanList from '../pages/PlanList';
import RegistrationList from '../pages/RegistrationList';
import HelpOrderList from '../pages/HelpOrderList';
import RegisterStudent from '../pages/RegisterStudent';
import RegisterPlan from '../pages/RegisterPlan';
import NewRegistration from '../pages/NewRegistration';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students/new" component={RegisterStudent} isPrivate />
      <Route path="/students/:id" component={RegisterStudent} isPrivate />
      <Route path="/students" component={StudentList} isPrivate />

      <Route path="/plans/new" component={RegisterPlan} isPrivate />
      <Route path="/plans/:id" component={RegisterPlan} isPrivate />
      <Route path="/plans" component={PlanList} isPrivate />

      <Route path="/registrations/new" component={NewRegistration} isPrivate />
      <Route path="/registrations/:id" component={NewRegistration} isPrivate />
      <Route path="/registrations" component={RegistrationList} isPrivate />

      <Route path="/help_orders" component={HelpOrderList} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
