import './HeaderNavMenu.scss';

export default function HeaderNavMenuDesktop({ children }) {
  return (
    <div className='nav-container'>
      <nav>
        <ul className='nav-list'>{children}</ul>
      </nav>
    </div>
  );
}
