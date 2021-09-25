import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <section className={s.transactionHistory}>
      <div className={s.container}>
        <table className={s.transactionHistory}>
          <thead className={s.thead}>
            <tr className={s.tr}>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

TransactionHistory.prototype = {
  items: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
  }),
};

export default TransactionHistory;
