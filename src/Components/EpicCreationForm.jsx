import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, PageHeader } from 'antd';
import { createEpic } from '../Actions/epic.action';

const divder = <div style={{ margin: '15px 0' }} />;

export const EpicCreationForm = () => {
  const dipatch = useDispatch();
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  
  return (
    <div className="Home-body-section" style={{ textAlign: 'center' }}>
      <PageHeader title="Create epic" subTitle="Create an epic to be estimated" />
      <Input onInput={(e) => setName(e.target.value)} placeholder="Epic name" />

      {divder}
      <Input.TextArea
        placeholder="Epic description"
        onInput={(e) => setDescription(e.target.value)}
        autosize={{ minRows: 2, maxRows: 6 }}
      />

      {divder}
      <Button primary="true" type="primary" onClick={() => dipatch(createEpic(name, description))}>
        Create Epic
      </Button>
    </div>
  );
};
