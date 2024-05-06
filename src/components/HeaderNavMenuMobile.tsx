import { useState } from 'react';
import './HeaderNavMenuMobile.scss';

export default function HeaderNavMenuMobile({ children }) {
  let [isOpen, setVisibility] = useState(false);

  return (
    <div className='nav-container'>
      <button className='nav-drawer-button' onClick={() => setVisibility(!isOpen)}>
        <img src='/hamburger.svg' alt='Open navigation drawer' />
      </button>
      {isOpen && (
        <nav className='nav-drawer' aria-label='Main site navigation'>
          <ul>{children}</ul>
        </nav>
      )}
    </div>
  );
}
