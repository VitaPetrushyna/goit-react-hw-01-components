import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  padding: 15px auto;
  margin: 15px auto 0 auto;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  overflow: hidden;
  background-color: #ffffff;
`;

export const ImageContainer = styled.div`
  list-style: none;
`;

export const Image = styled.img`
  background-color: #e1c6c6;
  margin-left: 33%;
  margin-bottom: 25px;
  margin-top: 25px;
  border-radius: 50%;
  width: 100px;
`;

export const TitleName = styled.p`
  text-align: center;
  font-weight: 700;
  margin-top: 0;
`;

export const TitleInfo = styled.p`
  text-align: center;
  font-weight: 400;
  margin: 10px 0 0 0;
`;

export const InfoContainer = styled.ul`
  display: flex;
  justify-content: space-between;

  padding: 0;
  margin-top: 25px;
  margin-bottom: 0;

  list-style: none;
`;

export const InfoList = styled.li`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 33.3%;
  padding: 15px;
  border: 1px solid #b6b7b9;
  background-color: #f3f6f9;
`;

export const Label = styled.span`
  flex-basis: 100%;
  text-align: center;
  color: #768696;
  margin-bottom: 8px;
`;

export const Quantiti = styled.span`
  flex-basis: 100%;
  text-align: center;
  color: #768696;
  margin-bottom: auto;
  font-weight: 900;
  font-size: 14px;
  color: #1f3349;
`;
