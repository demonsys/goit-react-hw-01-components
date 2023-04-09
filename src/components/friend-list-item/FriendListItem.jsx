import PropTypes from 'prop-types';

const FriendListItem = ({ status, avatarUrl, name }) => {
  return (
    <li className="item">
      <span className="status">{status ? 'online' : 'offline'}</span>
      <img className="avatar" src={avatarUrl} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
