import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ status, avatarUrl, name }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: status ? 'green' : 'red' }}
      ></span>
      <img
        className={css.avatar}
        src={avatarUrl}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
