import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatList,
  InfoContainer,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title = '', stats }) => {
  function randomColor() {
    return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})
    `;
  }
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(state => (
          <InfoContainer
            style={{ backgroundColor: randomColor() }}
            key={state.id}
          >
            <Label>{state.label}</Label>
            <Percentage>{state.percentage}%</Percentage>
          </InfoContainer>
        ))}
      </StatList>
    </StatisticsContainer>
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

export default Statistics;
