import PropTypes from 'prop-types';
import {
  FriendCard,
  FriendImage,
  FriendName,
  FriendSelected,
} from './FriendListItem.styled';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendCard>
      <FriendSelected selected={isOnline}>{isOnline}</FriendSelected>
      <FriendImage src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
export default FriendListItem;
