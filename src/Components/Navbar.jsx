import React from 'react';
import { PageHeader, Divider } from 'antd';

export const Navbar = React.memo(props => {
  const componentProps = {
    onBack: props.title
      ? () => {
          props.history.push('/');
        }
      : undefined,
  };

  return (
    <>
      <PageHeader
        title={props.title || 'Estimation tool'}
        {...componentProps}
      />
      <Divider />
    </>
  );
});
