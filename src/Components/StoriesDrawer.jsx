import React from 'react';
import { Layout, Divider, Collapse, Icon } from 'antd';

const { Panel } = Collapse;
const { Sider } = Layout;

export const StoriesDrawer = React.memo(function MyComponent(props) {
  const storiesData = props.stories.map(item => (
    <Panel header={item.title} key={item.id} extra={genExtra(props.viewStory, item.id)} disabled={item.estimates.items <= 0}>
       <ul>
        { item.estimates.items.map(item => (
            <p key={item.id}>{item.user.charAt(0).toUpperCase() + item.user.slice(1)}: {item.estimate}</p>
        ))}
         <b> Actual: {item.actualEstimate} </b>
      </ul>
    </Panel>
  ));
  
  return (
    <Sider
      width={280}
      reverseArrow={true}
      style={{ background: '#fff', top: '-25px', borderLeft: '1px solid #d9d9d9' }}
      collapsible={false}
      collapsedWidth={0}
      defaultCollapsed={false}
    >
      <h3 style={{paddingLeft: '15px', paddingTop: '10px'}}> Stories </h3>
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
    <span style={{padding: '0 5px'}} />
    <Icon
      type="delete"
      onClick={event => {
        event.stopPropagation();
      }}
    />
  </>
);