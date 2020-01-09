import React, { Component } from 'react';
import { Row, Col, Icon, Input, Tooltip } from 'antd';
import sygnet from 'assets/img/brand/sygnet.png';

const { Search } = Input;

class Home extends Component {
  render() {
    return (
      <Row className='container-fluid vertical-center'>
        <Row type="flex" justify="center">
          <Col md={{ span: 20, offset: 1 }} lg={{ span: 20, offset: 2 }}>
            <Row>
              <Col lg={5} md={4} xs={0} style={{ margin: 'auto' }}>
                <img src={sygnet} alt="SGUET" style={{ width: "100%" }} />
              </Col>
              <Col lg={19} md={20} xs={24} style={{ margin: 'auto' }}>
                <div className='text-center sg-header'>
                  <Row>
                    <h1>Support Group UET</h1>
                  </Row>
                  <Row>
                    <h2>CLB HỖ TRỢ SINH VIÊN TRƯỜNG ĐH CÔNG NGHỆ</h2>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className='mt-2'>
              <Search
                prefix={
                  <Tooltip placement="bottom" title="Sử dụng tiếng Việt có dấu để tìm kiếm chính xác hơn">
                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
                placeholder="Nhập câu hỏi, từ khoá, tên người, tên đơn vị..."
                enterButton
                size="large"
                onSearch={value => console.log(value)}
              />
            </Row>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default Home;
