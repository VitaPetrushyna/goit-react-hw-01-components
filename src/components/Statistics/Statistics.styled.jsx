import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  width: 300px;
  padding: 15px auto;
  margin: 10px auto 0 auto;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  overflow: hidden;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  color: #768696;
  font-weight: 900;
  font-size: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const InfoContainer = styled.li`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 33.3%;
  padding: 10px 5px;
  border: 1px solid #b6b7b9;
  background-color: #1869b9;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  color: #ffffff;
`;

export const Percentage = styled.span`
  color: #ffffff;
  font-size: 22px;
`;
