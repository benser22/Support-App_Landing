const Layout = ({ maxWidth, children }) => {
  return (
    <div
      className={`
     px-2 ${maxWidth} mx-auto
     bg-[#FFFCF7]
    `}
    >
      {children}
    </div>
  );
};
export default Layout;
