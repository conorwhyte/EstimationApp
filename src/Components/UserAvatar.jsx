import React from 'react';
import { Avatar, Badge } from 'antd';

export const UserAvatar = props => (
  <div style={{ paddingLeft: '15px', display: 'inline' }}>
    <Badge
      count={props.estimate}
      style={{ backgroundColor: 'green', fontSize: '14px', minWidth: '40px' }}
    >
      <Avatar
        style={{
          backgroundColor: props.user === 'Average' ? '#272C4C' : '#6ab5f2',
          verticalAlign: 'middle',
        }}
        size={55}
      >
        {props.user}
      </Avatar>
    </Badge>
  </div>
);
