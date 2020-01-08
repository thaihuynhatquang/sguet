import React, { Component, Fragment } from 'react';
import { AppSidebarFooter, AppSidebarForm, AppSidebarHeader, AppSidebarNav } from '@coreui/react';
import navigator from 'navigator';

class DefaultSidebar extends Component {
  render() {
    return (
      <Fragment>
        <AppSidebarHeader />
        <AppSidebarForm />
        <AppSidebarNav navConfig={navigator.menu} />
        <AppSidebarFooter />
      </Fragment>
    );
  }
}

export default DefaultSidebar;
