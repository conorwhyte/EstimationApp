import React from 'react';
import { Table, Divider } from 'antd';

const columns = [
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
        render: () => (
        <span>
            <a>View</a>
            <Divider type="vertical" />
            <a>Delete</a>
        </span>
        ),
    },
]; 

const populateData = (listOfEpics) => 
    listOfEpics.map(item => {
        return {
            key: item.id,
            name: item.title,
        }
    })

export const EpicTable = props => 
    <div className="Home-body-section" style={{marginTop: '20px'}}>
        <Table dataSource={populateData(props.listOfEpics)} columns={columns} />
    </div>;
