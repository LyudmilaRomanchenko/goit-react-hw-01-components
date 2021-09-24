// import friends from 'путь/к/friends.json';

import s from './FriendList.module.css';
console.log(s.status);

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {/* const status = friend.isOnline; */}
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className={friend.isOnline ? s.online : s.offline}></span>
          <img className="avatar" src={friend.avatar} alt="" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
export default FriendList;
