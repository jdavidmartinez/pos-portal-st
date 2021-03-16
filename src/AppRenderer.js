import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

const App = React.lazy(() => import(/* webpackChunkName: "App" */ './App'));

const Main = () => {
  return (
    <Suspense fallback={<div className="loading" />}>
      <App />
    </Suspense>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

reportWebVitals();
