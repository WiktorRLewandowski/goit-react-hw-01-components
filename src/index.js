import React from 'react';
import ReactDOM from 'react-dom/client';
// import { PropTypes } from "prop-types";

import './index.css';

import { Profile } from './components/Profile';
import { Statistics } from './components/Statistics';
import { FriendList } from './components/FriendList';
import { FriendListItem } from './components/FriendListItem';

import user from './datasets/user.json';
import data from './datasets/data.json';
import friends from './datasets/friends.json';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile  
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics>
    {data.map(data => {
                return ( 
                  <li class="item" key={data.id}>
                    <span class="label">{data.label}</span>
                    <span class="percentage">{data.percentage}</span>
                  </li>
                )
              }
    )}
    </Statistics>
    <FriendList>
    {friends.map(({avatar, name, id, isOnline}) => {
      return (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      )
      })}
    </FriendList>
  </React.StrictMode>
);
