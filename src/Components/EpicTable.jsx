import React from 'react';
import { Table, Divider } from 'antd';

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
          <a onClick={() => viewEpic(key)}>View</a>
          <Divider type="vertical" />
          <a onClick={() => deleteEpic(key)}>Delete</a>
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

export const EpicTable = props => (
  <div className="Home-body-section" style={{ marginTop: '20px' }}>
    <Table
      dataSource={populateData(props.listOfEpics)}
      columns={generateColumns(props.viewEpic, props.deleteEpic)}
    />
  </div>
);
