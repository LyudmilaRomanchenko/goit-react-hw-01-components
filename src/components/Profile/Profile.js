import PropTypes from 'prop-types';
import s from './Profile.module.css';
console.log(s);

function Profile({ name, tag, location, avatar, followers, views, likes }) {
  // console.log(props);
  // const { name, tag, location, avatar, followers, views, likes } = props;
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
