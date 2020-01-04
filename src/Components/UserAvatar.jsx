import React from 'react';
import { Avatar, Badge } from 'antd';

export const UserAvatar = ({estimate, user}) => (
  <div style={{ paddingLeft: '15px', display: 'inline' }}>
    <Badge
      count={estimate}
      style={{ backgroundColor: 'green', fontSize: '14px', minWidth: '40px' }}
    >
      <Avatar
        style={{
          backgroundColor: user === 'Average' ? '#272C4C' : '#6ab5f2',
          verticalAlign: 'middle',
        }}
        size={55}
      >
        {user}
      </Avatar>
    </Badge>
  </div>
);
