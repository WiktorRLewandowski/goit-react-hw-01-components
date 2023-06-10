import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from "components/Profile";
import user from './datasets/user.json'
import './index.css';
import { Statistics } from 'components/Statistics';
import data from './datasets/data.json';

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
            )})}
    </Statistics>
  </React.StrictMode>
);
