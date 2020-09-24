import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Dog from './components/dog';
import Form from './components/form';
import Welcome from './components/welcome';
function App() {
  return (
    <div>
       <Router>
            <Switch>
              <Route exact path="/" component={Home} />
			  <Route exact path="/dog" component={Dog} />
			  <Route exact path="/form" component={Form} />
			  <Route exact path="/welcome" component={Welcome} />
			 </Switch>
		</Router>
    </div>
  );
}
export default App;
