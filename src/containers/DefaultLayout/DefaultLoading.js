import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Row, Col, Spin } from 'antd';

class Loading extends Component {
  render() {
    return (
      <Card>
        <CardHeader>Loading</CardHeader>
        <CardBody>
          <Row>
            <Col className='text-center my-5 py-5'>
              <Spin />
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default Loading;
