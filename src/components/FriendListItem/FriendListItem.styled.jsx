import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  width: 270px;
  padding: 15px;
  margin: 10px auto 0 auto;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  overflow: hidden;
  background-color: #f3f6f9;
`;

export const FriendImage = styled.img`
  background-color: #e1c6c6;
  border-radius: 5px;
  margin-right: 15px;
  margin-left: 15px;
`;

export const FriendName = styled.p`
  text-align: center;
  font-weight: 700;
`;
