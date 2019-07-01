import React from 'react';
import { Layout, Divider, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

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
    >
      <h3>Stories</h3>
      {storiesData}
    </Sider>
  );
  // return (
  //   <Sider collapsible collapsed={false} style={{marginTop: '-25px'}}>
  //     <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
  //       <Menu.Item key="1">
  //         <span>Option 1</span>
  //       </Menu.Item>
  //       <Menu.Item key="2">
  //         <span>Option 2</span>
  //       </Menu.Item>
  //       <SubMenu
  //         key="sub2"
  //         title={
  //           <span>
  //             <span>Team</span>
  //           </span>
  //         }
  //       >
  //         <Menu.Item key="6">Team 1</Menu.Item>
  //         <Menu.Item key="8">Team 2</Menu.Item>
  //       </SubMenu>
  //       <Menu.Item key="9">
  //         <span>File</span>
  //       </Menu.Item>
  //     </Menu>
  //   </Sider>
  // );
};

const StoryItem = props => (
  <div style={{ paddingTop: '10px' }}>
    <span style={{ padding: '0 5px' }}> {props.item.title} </span>

    <a onClick={() => props.viewStory(props.item.id)}>View</a>
    <Divider type="vertical" />
    <a onClick={() => null}>Expand</a>
  </div>
);
