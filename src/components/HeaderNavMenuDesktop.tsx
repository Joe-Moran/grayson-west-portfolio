import './HeaderNavMenu.scss';

const HeaderNavMenuDesktop = ({ children }) => {
  return (
    <div className='nav-container'>
      <nav>
        <ul className='nav-list'>{children}</ul>
      </nav>
    </div>
  );
};

export default HeaderNavMenuDesktop;
