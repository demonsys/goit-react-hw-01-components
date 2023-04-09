import PropTypes from 'prop-types';

const PageTitle = ({ children }) => {
  return (
    <h1 className="page-title" style={{ textAlign: 'center' }}>
      {children}
    </h1>
  );
};
PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
export default PageTitle;
