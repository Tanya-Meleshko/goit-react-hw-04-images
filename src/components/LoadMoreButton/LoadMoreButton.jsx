import s from './LoadMoreButton.module.css';
import PropTypes from 'prop-types';

const LoadMoreButton = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={s.loadMore} type="button">
      LOAD MORE
    </button>
  );
};

LoadMoreButton.propTypes = {
  loadMore: PropTypes.func,
};

export default LoadMoreButton;
