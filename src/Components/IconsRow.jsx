import React from 'react';
import { Icon } from 'antd';

export const IconsRow = React.memo(({viewStory, id}) => (
  <>
    <Icon
      type="eye"
      onClick={e => {
        viewStory(id);
        e.stopPropagation();
      }}
    />
    <span style={{ padding: '0 5px' }} />
    <Icon
      type="delete"
      onClick={e => {
        e.stopPropagation();
      }}
    />
  </>
));
