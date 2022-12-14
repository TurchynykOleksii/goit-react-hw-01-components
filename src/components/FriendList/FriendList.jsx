import css from './FriendList.module.css';
import { FriendsListItem } from './FriendListItem';
import { PropTypes } from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friends-list']}>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <FriendsListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
