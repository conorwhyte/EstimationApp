import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Row, Col, InputNumber, Card, Button } from 'antd';
import { getCurrentStoryId } from '../Store/Selectors/story.selector';
import { addEstimateForStory } from '../Actions';

const cardStyle = (showBorder) => { 
  return {
    width: 200,
    textAlign: 'center',
    border: showBorder ? '2px solid #3FA9FF' : undefined,
  };
};

const estimateCard = (value, setEstimate, currentEstimate) => (
  <Col span={5} key={value}>
    <Card
      title="WAG"
      hoverable
      style={cardStyle(currentEstimate === value)}
      onClick={() => setEstimate(value)}
    >
      <h2> {value} </h2>
    </Card>
  </Col>
);

export const AddEstimation = React.memo(props => {
  const [estimate, setEstimate] = useState(0);
  const estimates = [ 0.5, 0.25, 0.1 ];
  const storyId = useSelector(getCurrentStoryId);  

  const addEstimate = () => {
    addEstimateForStory(storyId, estimate, props.username);
  };
  
  return (
    <div className="Estimation-body-cards">
      <h2>{props.storyTitle}</h2>
      <br />
      <Row gutter={16}>
        
        {estimates.map(item => (
          estimateCard(item, setEstimate, estimate)
        ))}
        
        <Col span={5}>
          <Card title="WAG" hoverable style={cardStyle(false)}>
            <InputNumber onChange={number => setEstimate(number)} />
          </Card>
        </Col>
      </Row>
      <br />
      
      <Button
        onClick={addEstimate}
        style={{ margin: 0 }}
      >
        {' '}
        Set Estimation{' '}
      </Button>
    </div>
  );
});
