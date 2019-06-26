import React from 'react';
import { Layout, Divider } from 'antd';

const { Sider } = Layout;

export const StoriesDrawer = props => {
  const storiesData = props.stories.map(item => (
    <StoryItem item={item} key={item.id} viewStory={props.viewStory} />
  ));

  return (
    <Sider
      width={240}
      reverseArrow={true}
      style={{ background: '#fff' }}
      collapsible={false}
      collapsedWidth={0}
      defaultCollapsed={false}
      theme={'dark'}
    >
      <h3>Stories</h3>
      { storiesData }
    </Sider>
  );
};

const StoryItem = props => (
  <div style={{paddingTop: '10px' }}>
    <span style={{padding: '0 5px'}}> {props.item.title} </span>
    
    <a onClick={() => props.viewStory(props.item.id)}>View</a>
    <Divider type="vertical" />
    <a onClick={() => null}>Expand</a>
  </div>
);