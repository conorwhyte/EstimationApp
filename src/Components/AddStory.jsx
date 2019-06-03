import React, { useState } from 'react'
import { Modal, Input } from 'antd'

// interface AddStoryProps {
//     visible?: boolean;
//     loading?: boolean;
//     createStory: (storyTitle: string) => void;
// }

export const AddStoryModal = (props) => {
  const [ storyTitle, setStoryTitle ] = useState('');

  const changeTitle = (event) => {
    setStoryTitle(event.target.value);
  };

  const createStory = () => {
    props.createStory(storyTitle);
  };

  const setModalVisibilty = () => {
    props.showCreateModal(false);
  };

  return (
    <Modal
        visible={props.visible}
        title="Add Story"
        onOk={createStory}
        onCancel={setModalVisibilty}
    >
        <div className='Estimation-input'>
          <p> Add a story for the epic. </p>
          <Input size="large" placeholder="Epic title" onChange={changeTitle}/>
          <Input placeholder="Description" />
        </div>
    </Modal>
  )
}
