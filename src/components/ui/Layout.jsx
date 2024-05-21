import PropTypes from 'prop-types';

const Layout = ({ maxWidth, children }) => {
  return (
    <div
      className={`
     ${maxWidth} mx-auto
     bg-[#FFFCF7]
    `}
    >
      {children}
    </div>
  );
};

Layout.propTypes = {
  maxWidth: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
