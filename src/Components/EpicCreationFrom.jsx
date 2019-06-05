import React from 'react';
import { Input, Button, PageHeader } from 'antd';

export const EpicCreationForm = props => {
  return (
    <div className="Home-body-section">
      <PageHeader
        title="Account Settings"
        subTitle="Manage your account settings and set email preferences"
      />
      <Input onInput={props.onInputChange} placeholder="Epic name" />

      <br />
      <Button primary="true" onClick={props.onCreate}>
        Create Epic
      </Button>
    </div>
  );
};
