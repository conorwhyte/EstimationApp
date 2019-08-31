import React, { useEffect, useState } from 'react';
import { PageHeader, Divider } from 'antd';
import { parse } from 'query-string';
import useReactRouter from 'use-react-router';
import { getEpicForId } from '../Actions';

export const Navbar = React.memo(props => {
  const { location, history } = useReactRouter();
  const { id } = parse(location.search);
  const [ title, setTitle ] = useState('');
  
  useEffect(() => {
    async function getEpic() {
      const result = await getEpicForId(id);
      
      setTitle(result.data.getEpic.title);
    }

    if (location.pathname === '/estimation') { getEpic(); }
  }, []);
  
  const componentProps = {
    onBack: props.title
      ? () => {
          history.push('/');
        }
      : undefined,
  };

  return (
    <>
      <PageHeader
        title={title || 'Estimation tool'}
        {...componentProps}
      />
      <Divider />
    </>
  );
});
