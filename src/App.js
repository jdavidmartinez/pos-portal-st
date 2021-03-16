import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './helpers/Firebase';
import { NotificationContainer } from './components/common/react-notifications';
import { getDirection } from './helpers/Utils';

const ViewHome = React.lazy(() =>
  import(/* webpackChunkName: "views" */ './views/home')
);

class App extends React.Component {
  constructor(props) {
    super(props);
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }

  render() {
    return (
      <div className="h-100">
        <>
          <NotificationContainer />
          <Suspense fallback={<div className="loading" />}>
            <Router>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => <ViewHome {...props} />}
                />
                {/*
                  <Redirect exact from="/" to={adminRoot} />
                  */}
                <Redirect to="/error" />
              </Switch>
            </Router>
          </Suspense>
        </>
      </div>
    );
  }
}

export default App;
