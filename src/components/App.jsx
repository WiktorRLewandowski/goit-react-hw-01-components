import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { FriendListItem } from './FriendListItem';
import { TransactionHistory } from './TransactionHistory';

import user from '../datasets/user.json';
import data from '../datasets/data.json';
import friends from '../datasets/friends.json';
import transactions from '../datasets/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
    <Profile  
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics>
    {
      data.map(({id, label, percentage}) => {
        return ( 
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        )
      })
    }
    </Statistics>
    <FriendList>
    {
      friends.map(({avatar, name, id, isOnline}) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        )
      })
    }
    </FriendList>
    <TransactionHistory
      items={transactions}
    />
  </div>
  );
};
