import PropTypes from 'prop-types';
import {
  Card,
  ImageContainer,
  Image,
  TitleName,
  TitleInfo,
  InfoContainer,
  InfoList,
  Label,
  Quantiti,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={avatar} alt="User avatar" />
        <TitleName>{username}</TitleName>
        <TitleInfo>{tag}</TitleInfo>
        <TitleInfo>{location}</TitleInfo>
      </ImageContainer>

      <InfoContainer>
        <InfoList>
          <Label>Followers</Label>
          <Quantiti>{stats.followers}</Quantiti>
        </InfoList>
        <InfoList>
          <Label>Views</Label>
          <Quantiti>{stats.views}</Quantiti>
        </InfoList>
        <InfoList>
          <Label>Likes</Label>
          <Quantiti>{stats.likes}</Quantiti>
        </InfoList>
      </InfoContainer>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
