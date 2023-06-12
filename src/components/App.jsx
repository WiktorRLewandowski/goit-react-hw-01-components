import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { FriendListItem } from './FriendListItem';
import { TransactionHistory } from './TransactionHistory';

import user from '../datasets/user';
import data from '../datasets/data';
import friends from '../datasets/friends';
import transactions from '../datasets/transactions'

import css from '../css/Statistics.module.css'
import { getRandomColor } from 'utils/getColor';

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
      className={css.body}
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
          <li style={{backgroundColor: getRandomColor()}} className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{`${percentage}%`}</span>
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
