import React, { useEffect, useState } from 'react';
import { Table, Divider } from 'antd';
import useReactRouter from 'use-react-router';
import { useDispatch } from 'react-redux';
import { addEpicId } from '../Actions/epic.action';
import { listEpicsForUser } from '../Actions/api.service';

const generateColumns = (viewEpic, deleteEpic) => {
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: key => (
        <span>
          <a href onClick={() => viewEpic(key)}>View</a>
          <Divider type="vertical" />
          <a href onClick={() => deleteEpic(key)}>Delete</a>
        </span>
      ),
    },
  ];
};

const populateData = listOfEpics =>
  listOfEpics.map(item => {
    return {
      key: item.id,
      name: item.title,
      description: item.description,
    };
  });

const openSuccessNotification = epicName => {
  // notification['success']({
  //   message: 'Successfully deleted epic',
  //   description: `Sucessfully deleted epic ${epicName}`,
  // });
};

async function listEpics(callback) {
  const epics = await listEpicsForUser();
  callback(epics.data.listEpics.items);
}

export const EpicTable = () => {
  const dispatch = useDispatch();
  const { history } = useReactRouter();
  const [ epics, setEpics ] = useState([]);
  
  useEffect(() => {
    listEpics(setEpics);
  }, []);

  const viewEpic = ({ key }) => {
    dispatch(addEpicId(key));
    history.push(`/estimation?id=${key}`);
  };

  const deleteEpic = async ({ key, name }) => {
    // await deleteEpicForUser(key);
    openSuccessNotification(name);

    listEpics(setEpics);
  };

  return (
    <div className="Home-body-section">
      <Table
        dataSource={populateData(epics)}
        columns={generateColumns(viewEpic, deleteEpic)}
      />
    </div>
  );
};
