import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Row, Col, Button, Icon } from 'antd';

class Dashboard extends Component {
  render() {
    return (
      <Card>
        <CardHeader>Dashboard</CardHeader>
        <CardBody>
          <Row>
            <Col className='line-buttons'>
              <Button icon='loading'>Hello</Button>
              <Button type='primary'>Hello</Button>
              <Button type='primary-outline'>Hello</Button>
              <Button type='success'>Hello</Button>
              <Button type='success-outline'>Hello</Button>
              <Button type='info'>Hello</Button>
              <Button type='warning'>Hello</Button>
              <Button type='danger'>
                <Icon type='fire' /> Hello
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default Dashboard;
