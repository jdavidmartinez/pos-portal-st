import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          <Suspense fallback={<div className="loading" />}>
            <Router>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => <ViewHome {...props} />}
                />
              </Switch>
            </Router>
          </Suspense>
        </>
      </div>
    );
  }
}

export default App;
