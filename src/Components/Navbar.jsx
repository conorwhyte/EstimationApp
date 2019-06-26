import React from 'react';
import { PageHeader, Divider } from 'antd';

export const Navbar = props => {
  const componentProps = {
    onBack: props.title ? () => { props.history.push('/'); } : undefined
  };

  return (
  <>
    <PageHeader title={props.title || 'Estimation tool'} {...componentProps} />
    <Divider />
  </>
  );
};
