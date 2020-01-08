import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppHeader, AppBreadcrumb, AppSidebar, AppFooter } from '@coreui/react';
import { Container } from 'reactstrap';
import navigator from 'navigator';
import DefaultHeader from './DefaultHeader';
import DefaultSidebar from './DefaultSidebar';
import DefaultFooter from './DefaultFooter';
import DefaultLoading from './DefaultLoading';

class DefaultLayout extends React.Component {
  render() {
    return (
      <div className='app'>
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className='app-body'>
          <AppSidebar fixed display='lg'>
            <DefaultSidebar />
          </AppSidebar>
          <main className='main'>
            <div className='header-divider' />
            <AppBreadcrumb appRoutes={navigator.routes} />
            <Container fluid>
              <Suspense fallback={<DefaultLoading />}>
                <Switch>
                  {navigator.routes
                    .filter((item) => item.render)
                    .map((route) => {
                      const Component = route.render;
                      return (
                        <Route
                          key={route.path}
                          {...route}
                          render={() => (
                            <div className='animated fadeIn'>
                              <Component />
                            </div>
                          )}
                        />
                      );
                    })}
                  <Redirect from='/' to='/dashboard' />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
