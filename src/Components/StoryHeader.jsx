import React from 'react';
import { Layout, Divider } from 'antd';

const { Sider } = Layout;

export const StoriesDrawer = props => {
  return (
    <Sider
      width={200}
      reverseArrow={true}
      theme={'light'}
      style={{ background: '#fff' }}
      collapsible={true}
      collapsedWidth={20}
    >
      <h3>Stories</h3>
      { storiesData }
    </Sider>
  );
};