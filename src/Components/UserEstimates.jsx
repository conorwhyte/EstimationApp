import React from 'react';
import { useSelector } from 'react-redux';
import { getEstimatesForStories, getAverageEstimate } from '../Store/Selectors/story.selector';
import { UserAvatar } from './UserAvatar';

export const UserEstimates = () => {
  const estimateForStories = useSelector(getEstimatesForStories);
  const averageWAG = useSelector(getAverageEstimate);
  const users = estimateForStories.map(item => (
    <UserAvatar key={item.id} user={item.user} estimate={item.estimate} />
  ));

  if (averageWAG > 0) {
    users.push(
      <UserAvatar
        key="Average"
        user="Average"
        estimate={averageWAG.toFixed(2)}
      />
    );
  }

  return (
    <div style={{ padding: '20px 0' }}> 
      {users} 
    </div>
  );
}
