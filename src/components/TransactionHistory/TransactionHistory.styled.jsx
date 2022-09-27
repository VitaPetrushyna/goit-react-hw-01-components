import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 300px;
  border: 1px solid grey;
  text-align: center;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  border-collapse: collapse;
`;

export const HeaderTable = styled.thead`
  border: 1px solid white;
  text-align: center;
  width: 300px;
  height: 40px;
  background-color: #36afd4;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: white;
`;

export const HeaderLine = styled.th`
  border: 1px solid white;
`;

export const TableLine = styled.td`
  border: 1px solid lightgray;
  text-align: center;
`;

export const TableData = styled.tr`
  text-align: center;
  height: 40px;
  :nth-child(odd) {
    background: white;
  }
  :nth-child(even) {
    background: #afbbbe;
  }
`;
