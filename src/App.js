import React from 'react';
import Layout from './hoc/Layout';
import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
