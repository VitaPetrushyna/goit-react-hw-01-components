import PropTypes from 'prop-types';

export const Statistics = ({ title = ' ', stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(state => (
          <li class="item" key={state.id}>
            <span class="label">{state.label}</span>
            <span class="percentage">{state.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
