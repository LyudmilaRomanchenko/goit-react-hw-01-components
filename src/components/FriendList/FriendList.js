import PropTypes from 'prop-types';
import s from './FriendList.module.css';
// console.log(s.status);

function FriendList({ friends }) {
  return (
    <section className={s.friends}>
      <div className={s.container}>
        <ul className={s.friendList}>
          {/* const status = friend.isOnline; */}
          {friends.map(friend => (
            <li className={s.item} key={friend.id}>
              <span className={friend.isOnline ? s.online : s.offline}></span>
              <img className="avatar" src={friend.avatar} alt="" width="48" />
              <p className="name">{friend.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

FriendList.prototype = {
  friends: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
};

export default FriendList;
