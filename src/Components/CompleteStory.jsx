import React, { useState, useEffect } from 'react';
import { Modal, InputNumber } from 'antd';

export const CompleteStoryModal = React.memo(props => {
  const [storyWAG, setStoryWAG] = useState(props.storyWAG);

  useEffect(() => {
    setStoryWAG(props.storyWAG);
  });

  const changeWAG = event => {
    setStoryWAG(event.target.value);
  };

  const completeStory = () => {
    props.completeStory(storyWAG);
  };

  const setModalVisibilty = () => {
    props.showCreateModal(false);
  };

  return (
    <Modal
      visible={props.visible}
      title="Complete and submit story"
      onOk={completeStory}
      onCancel={setModalVisibilty}
    >
      <div>
        <p> Complete story </p>
        <InputNumber value={storyWAG} onChange={changeWAG} />
      </div>
    </Modal>
  );
});
