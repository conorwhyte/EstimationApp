import React from 'react';
import { Avatar, Badge } from 'antd';

export const UserAvatar = props =>
  <Badge count={props.estimate} style={{ backgroundColor: 'green', fontSize: '14px', minWidth: '40px' }}>
    <Avatar
      style={{ backgroundColor: '#6ab5f2', verticalAlign: 'middle' }}
      size={55}
    >{props.user}</Avatar>
  </Badge>;
