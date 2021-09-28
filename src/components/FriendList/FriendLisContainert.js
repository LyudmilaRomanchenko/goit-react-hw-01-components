import FriendList from './FriendList';
import s from './FriendList.module.css';

import friends from './friends.json';

function FriendListContainer() {
  return (
    <section section className={s.friends}>
      <div className={s.container}>
        <FriendList friends={friends} />
      </div>
    </section>
  );
}

// FriendList.prototype = {
//   friends: PropTypes.shape({
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     id: PropTypes.number.isRequired,
//   }),
// };

export default FriendListContainer;
