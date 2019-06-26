import React from 'react';
import { Row, Col, Input, Card } from 'antd';

const cardStyle = {
  width: 200,
  textAlign: 'center',
};

export const AddEstimation = props => {
  return (
    <div className="Estimation-body-cards">
      <h2>{ props.storyTitle }</h2>
      <br />
      <Row gutter={16}>
        <Col span={5}>
          <Card title="WAG" hoverable style={cardStyle}>
            <h2> 0.5 </h2>
          </Card>
        </Col>
        <Col span={5}>
          <Card title="WAG" hoverable style={cardStyle}>
            <h2> 0.25 </h2>
          </Card>
        </Col>
        <Col span={5}>
          <Card title="WAG" hoverable style={cardStyle}>
            <h2> 0.1 </h2>
          </Card>
        </Col>
        <Col span={5}>
          <Card title="WAG" hoverable style={cardStyle}>
            <Input />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
