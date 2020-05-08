import React from 'react';
import Layout from './hoc/Layout';
import { Route, Switch } from 'react-router-dom';
import Popular from './containers/Popular/Popular';
import Top from './containers/Top/Top';

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/top" component={Top} />
          <Route exact path="/" component={Popular} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
