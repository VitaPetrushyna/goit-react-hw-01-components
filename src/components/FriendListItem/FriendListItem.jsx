import PropTypes from 'prop-types';
const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  <li class="item">
    <span class="status"></span>
    <img class="avatar" src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </li>;
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string.isRequired,
    // id: PropTypes.number.isRequired,
  }),
};
export default FriendListItem;
