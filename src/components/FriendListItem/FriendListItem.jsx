import PropTypes from 'prop-types';
export const FriendListItem = ({ friend }) => {
  <li class="item">
    <span class="status"></span>
    <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <p class="name">{friend.name}</p>
  </li>;
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
