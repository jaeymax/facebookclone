import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';

import Post from './Post';

function Feed() {
  return <div className='feed' >
      <StoryReel />
      <MessageSender />
      <Post message={'Wow this works'} timestamp={"this is a timestamp"} username={'jaymax'} />
      <Post message={'and this is some boring fucking random message'} timestamp={'The time is current time'} username={'and the time says i don\'t know'} />
      <Post/>
  </div>;
}

export default Feed;
