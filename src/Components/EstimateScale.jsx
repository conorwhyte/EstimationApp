import React from 'react';
import { Menu, Dropdown, Icon, Avatar } from 'antd';

export const EstimateScale = React.memo(props => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          WAG's
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          Story points
        </a>
      </Menu.Item>
    </Menu>
  );

  const username = props.user ? props.user.username : '';
  return (
    <span>
      <Avatar
        style={{
          backgroundColor: '#0067e6',
          verticalAlign: 'middle',
          marginRight: '10px',
        }}
        size={40}
      >
        {username}
      </Avatar>
      
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          Estimation scale &nbsp;<Icon type="down" />
        </a>
      </Dropdown>
    </span>
  );
}); 
