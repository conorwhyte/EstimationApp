import React, { useState, useEffect } from 'react';
import { Modal, InputNumber } from 'antd';

export const CompleteStoryModal = React.memo(props => {
  const [storyWAG, setStoryWAG] = useState(props.storyWAG);

  useEffect(() => {
    setStoryWAG(props.storyWAG);
  }, [props.storyWAG]);

  return (
    <Modal
      visible={props.visible}
      title="Complete and submit story"
      onOk={() => props.completeStory(storyWAG)}
      onCancel={() => props.showCreateModal(false)}
    >
      <div>
        <p> Complete story </p>
        <InputNumber value={storyWAG} 
          onChange={event => setStoryWAG(event.target.value)} />
      </div>
    </Modal>
  );
});
