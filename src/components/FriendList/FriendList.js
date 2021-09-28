import PropTypes from 'prop-types';
import s from './FriendList.module.css';
// console.log(s.status);

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      <h1>ggggggggg</h1>
      {/* const status = friend.isOnline; */}
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={s.item} key={id}>
          <span className={isOnline ? s.online : s.offline}></span>
          <img className={s.avatar} src={avatar} alt="" width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.prototype = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default FriendList;

// return (
//   <section className={s.friends}>
//     <div className={s.container}>
//       <ul className={s.friendList}>
//         {/* const status = friend.isOnline; */}
//         {friends.map(({ id, isOnline, avatar, name }) => (
//           <li className={s.item} key={id}>
//             <span className={isOnline ? s.online : s.offline}></span>
//             <img className={s.avatar} src={avatar} alt="" width="48" />
//             <p className={s.name}>{name}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </section>
// );
