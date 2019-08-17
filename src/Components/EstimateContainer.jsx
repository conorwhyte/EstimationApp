import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useReactRouter from 'use-react-router';
import { getAverageEstimate, getCurrentStoryId } from '../Store/Selectors/story.selector';
import { Layout } from 'antd';
import {
  AddStoryModal,
  AddEstimation,
  UserEstimates,
  CompleteStoryModal,
  StoryHeader,
} from '.';
import { createStoryForQuiz, clearCurrentStory, listEpicStories } from '../Actions';
import { parse } from 'query-string';

const getCurrentStory = (stories, storyId) =>
  stories.filter(item => item.id === storyId)[0];

export const EstimationContainer = props => {  
  const dispatch = useDispatch();
  const { location } = useReactRouter();
  const averageWAG = useSelector(getAverageEstimate);
  const storyId = useSelector(getCurrentStoryId);
  
  const [ stories, setStories ] = useState([]);
  const [ showCreateStoryModal, showCreateModal ] = useState(false);
  const [ showCompleteStoryModal, showCompleteModal ] = useState(false);
  const { id } = parse(location.search);
  const currentStory = getCurrentStory(stories, storyId);
  
  const createStory = async input => {
    await createStoryForQuiz(id, input);
  };

  const clearAndUpdateStory = async value => {
    const { version } = getCurrentStory(stories, storyId);

    dispatch(clearCurrentStory());
    showCompleteModal(false);

    await completeStory({ storyId, version }, value);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      const { data } = await listEpicStories(id);
      setStories(data.getEpic.stories.items);
    }  
  
    fetchMyAPI();
  }, []);

  return (
    <Layout.Content>
      <div className="Estimation-body">
        <StoryHeader
          showCreateModal={showCreateModal}
          showCompleteModal={showCompleteModal} />

        <AddStoryModal createStory={createStory}
          showCreateModal={showCreateModal}
          visible={showCreateStoryModal} />

        <CompleteStoryModal completeStory={clearAndUpdateStory}
          showCreateModal={showCompleteModal}
          visible={showCompleteStoryModal}
          storyWAG={averageWAG.toFixed(2)} />

        { !!storyId && 
          <AddEstimation
            storyTitle={currentStory.title || ''}
            username={props.username} />
        }

        <UserEstimates />
      </div>
      </Layout.Content>
  );
}
