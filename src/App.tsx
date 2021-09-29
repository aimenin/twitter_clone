import React from 'react';

import { SignIn } from './Pages/SignIn';
import { Home } from './Pages/Home';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
