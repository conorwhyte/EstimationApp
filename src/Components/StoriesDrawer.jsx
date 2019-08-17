import React from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Collapse, Icon } from 'antd';
import { addStoryId } from '../Actions';

const { Panel } = Collapse;
const { Sider } = Layout;

export const StoriesDrawer = React.memo(props => {
  const dispatch = useDispatch();

  const addCurrentStory = story => {
    dispatch(addStoryId(story));
    
    props.listEstimates(story);
  };

  const storiesData = props.stories.map(item => (
    <Panel
      header={item.title}
      key={item.id}
      extra={genExtra(addCurrentStory, item.id)}
      disabled={item.estimates.items <= 0}
    >
      <ul>
        {item.estimates.items.map(item => (
          <p key={item.id}>
            {item.user.charAt(0).toUpperCase() + item.user.slice(1)}:{' '}
            {item.estimate}
          </p>
        ))}
        <b> Actual: {item.actualEstimate} </b>
      </ul>
    </Panel>
  ));

  const totalWAG = props.stories.reduce(( a, b ) => a + b.actualEstimate, 0);

  return (
    <Sider
      width={280}
      reverseArrow={true}
      style={{
        background: '#fff',
        top: '-25px',
        borderLeft: '1px solid #d9d9d9',
      }}
      collapsible={false}
      collapsedWidth={0}
      defaultCollapsed={false}
    >
      <div style={{ paddingLeft: '15px', paddingTop: '10px' }}>
        <h3> Stories </h3>
        <h4> Total: <b>{totalWAG.toFixed(2)}</b></h4>
      </div>
      
      <Collapse defaultActiveKey={['1']} bordered={false}>
        {storiesData}
      </Collapse>
    </Sider>
  );
});

const genExtra = (viewStory, id) => (
  <>
    <Icon
      type="eye"
      onClick={event => {
        viewStory(id);
        event.stopPropagation();
      }}
    />
    <span style={{ padding: '0 5px' }} />
    <Icon
      type="delete"
      onClick={event => {
        event.stopPropagation();
      }}
    />
  </>
);
