import PropTypes from 'prop-types';
import { FriendCard, FriendImage, FriendName } from './FriendListItem.styled';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendCard>
      <span class="status">{isOnline}</span>
      <FriendImage src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
export default FriendListItem;
