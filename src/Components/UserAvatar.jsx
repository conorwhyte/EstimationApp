

import React from 'react'
import { Avatar } from 'antd'

export const UserAvatar = props => {
    
  const abbreviateName = () => {
    console.log(props.name);
  };

  return (
    <div className='Estimation-avatar'>
        <Avatar style={{ backgroundColor: '#6ab5f2', verticalAlign: 'middle' }} size="large">
            {'CW'}
        </Avatar>

        <h2> 0.25 </h2>
    </div>
  );
}
