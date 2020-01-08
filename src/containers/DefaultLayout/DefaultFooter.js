import React, { Component, Fragment } from 'react';

class DefaultFooter extends Component {
  render() {
    return (
      <Fragment>
        <span>
          <a href='https://coreui.io'>CoreUI</a> &copy; 2018 creativeLabs
        </span>
        <span className='ml-auto'>
          Powered by <a href='https://coreui.io/react'>CoreUI for React</a>
        </span>
      </Fragment>
    );
  }
}

export default DefaultFooter;
