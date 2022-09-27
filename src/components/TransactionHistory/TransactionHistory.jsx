import PropTypes from 'prop-types';
import {
  TransactionTable,
  HeaderTable,
  TableLine,
  TableData,
  HeaderLine,
} from './TransactionHistory.styled';

const TransactionHistiry = ({ items }) => {
  return (
    <TransactionTable>
      <HeaderTable>
        <tr>
          <HeaderLine>Type</HeaderLine>
          <HeaderLine>Amount</HeaderLine>
          <HeaderLine>Currency</HeaderLine>
        </tr>
      </HeaderTable>

      <tbody>
        {items.map(item => (
          <TableData key={item.id}>
            <TableLine>{item.type}</TableLine>
            <TableLine>{item.amount}</TableLine>
            <TableLine>{item.currency}</TableLine>
          </TableData>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistiry.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistiry;
