import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { FriendContainer } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
