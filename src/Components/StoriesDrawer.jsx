import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Collapse } from 'antd';
import { 
  addStoryId, 
  bulkAddEstimatesToStories, 
  listStoriesEstimate,
  listEpicStories,
} from '../Actions';
import { parse } from 'query-string';
import { IconsRow } from './IconsRow';
import useReactRouter from 'use-react-router';

const { Panel } = Collapse;
const { Sider } = Layout;

export const StoriesDrawer = React.memo(() => {
  const dispatch = useDispatch();
  const { location } = useReactRouter();
  const [ stories, setStories ] = useState([]);
  const totalWAG = stories.reduce(( a, b ) => a + b.actualEstimate, 0);

  useEffect(() => {
    async function listEpics() {
      const { id } = parse(location.search);
      const storiesData = await listEpicStories(id);
      
      setStories(storiesData.data.getEpic.stories.items);
    }

    listEpics();
  }, []);

  const addCurrentStory = story => {
    dispatch(addStoryId(story));
    
    listEstimates(story);
  };

  const listEstimates = async storyId => {
    const estimates = await listStoriesEstimate(storyId);
    const { items } = estimates.data.getStory.estimates;

    dispatch(bulkAddEstimatesToStories(items));
  };

  return ( 
    <Sider
      width={280}
      reverseArrow={true}
      style={{
        background: '#fff',
        top: '-25px',
        borderLeft: '1px solid #d9d9d9'
      }}
      collapsible={false}
      collapsedWidth={0}
      defaultCollapsed={false}
    >
      <div style={{ paddingLeft: '15px', paddingTop: '10px'}}>
        <h3> Stories </h3>
        <h4> Total: <b>{totalWAG.toFixed(2)}</b></h4>
      </div>
      
      <Collapse defaultActiveKey={['1']} bordered={false}>
        {stories && stories.map(item => (
          <Panel
            header={item.title}
            key={item.id}
            extra={<IconsRow id={item.id} viewStory={addCurrentStory} />}
            disabled={item.estimates.items <= 0}
          >
            <ul>
              {item.estimates.items.map(item => (
                <p key={item.id}>
                  {item.user.charAt(0).toUpperCase() + item.user.slice(1)}:{' '}
                  {item.estimate}
                </p>
              ))}
              <b> Actual: {item.actualEstimate} </b>
            </ul>
          </Panel>
        ))}
      </Collapse>
    </Sider>
  );
});
