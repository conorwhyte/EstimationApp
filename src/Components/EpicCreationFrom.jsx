import React from 'react';
import { Input, Button, PageHeader } from 'antd';

const divder = <div style={{ margin: '15px 0' }} />;

export const EpicCreationForm = props => (
  <div className="Home-body-section" style={{ textAlign: 'center' }}>
    <PageHeader title="Create epic" subTitle="Create an epic to be estimated" />
    <Input onInput={props.onInputChange} placeholder="Epic name" />

    {divder}
    <Input.TextArea
      placeholder="Epic description"
      onInput={props.onDescriptionChange}
      autosize={{ minRows: 2, maxRows: 6 }}
    />

    {divder}
    <Button primary="true" type="primary" onClick={props.onCreate}>
      Create Epic
    </Button>
  </div>
);
