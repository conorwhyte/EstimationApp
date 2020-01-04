import React, { useState } from 'react';
import { Modal, Input } from 'antd';

export const AddStoryModal = React.memo(({
  createStory, 
  showCreateModal,
  visible,
}) => {
  const [storyTitle, setStoryTitle] = useState('');

  return (
    <Modal
      visible={visible}
      title="Add Story"
      onOk={() => createStory(storyTitle)}
      onCancel={() => showCreateModal(false)}
    >
      <div className="Estimation-input">
        <p> Add a story for the epic. </p>
        <Input size="large" 
          placeholder="Epic title" 
          onChange={e => setStoryTitle(e.target.value)} />
        <Input placeholder="Description" />
      </div>
    </Modal>
  );
});
