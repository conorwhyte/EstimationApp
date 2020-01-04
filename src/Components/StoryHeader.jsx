import React from 'react';
import { Button } from 'antd';

export const StoryHeader = React.memo(({
  showCreateModal,
  showCompleteModal,
}) => 
  <div className="Estimation-body-header">
    <h3> Pick a story to be estimated or create one </h3>

    <Button onClick={() => showCreateModal(true)}>
      {' '}
      Create New Story
    </Button>

    <Button type="primary" onClick={() => showCompleteModal(true)}>
      Complete Story
    </Button>

    <Button type="danger"> Delete Story</Button>
  </div>
);
