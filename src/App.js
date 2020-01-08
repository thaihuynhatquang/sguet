import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom';
import { browserHistory } from 'utils/history';
import PrivateRoute from 'containers/PrivateRoute';
import DefaultLayout from 'containers/DefaultLayout';

// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import 'scss/style.scss';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <PrivateRoute path='/' name='Home' component={DefaultLayout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
