import React, { useState } from 'react';
import { Row, Col, InputNumber, Card, Button } from 'antd';

const cardStyle = {
  width: 200,
  textAlign: 'center',
};

export const AddEstimation = props => {
  const [estimate, setEstimate] = useState(0);

  return (
    <div className="Estimation-body-cards">
      <h2>{props.storyTitle}</h2>
      <br />
      <Row gutter={16}>
        <Col span={5}>
          <Card
            title="WAG"
            hoverable
            style={cardStyle}
            onClick={() => setEstimate(0.5)}
          >
            <h2> 0.5 </h2>
          </Card>
        </Col>
        <Col span={5}>
          <Card
            title="WAG"
            hoverable
            style={cardStyle}
            onClick={() => setEstimate(0.25)}
          >
            <h2> 0.25 </h2>
          </Card>
        </Col>
        <Col span={5}>
          <Card
            title="WAG"
            hoverable
            style={cardStyle}
            onClick={() => setEstimate(0.1)}
          >
            <h2> 0.1 </h2>
          </Card>
        </Col>
        <Col span={5}>
          <Card title="WAG" hoverable style={cardStyle}>
            <InputNumber onChange={number => setEstimate(number)} />
          </Card>
        </Col>
      </Row>
      <br />
      <Button
        onClick={() => props.sendEstimate(estimate)}
        style={{ margin: 0 }}
      >
        {' '}
        Set Estimation{' '}
      </Button>
    </div>
  );
};
