// import friends from 'путь/к/friends.json';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status"></span>
          <img className="avatar" src={friend.avatar} alt="" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
export default FriendList;
