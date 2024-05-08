const Layout = ({ maxWidth, children }) => {
  return (
    <div
      className={`
     px-2 ${maxWidth} mx-auto
    `}
    >
      {children}
    </div>
  );
};
export default Layout;
