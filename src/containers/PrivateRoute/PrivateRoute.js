import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { component: Container } = this.props;
    return <Route render={(props) => <Container {...props} />} />;
  }
}

export default PrivateRoute;
