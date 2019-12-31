import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

export const EstimateScale = React.memo(() => {
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

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
        Estimation scale &nbsp;<Icon type="down" />
      </a>
    </Dropdown>
  );
});
