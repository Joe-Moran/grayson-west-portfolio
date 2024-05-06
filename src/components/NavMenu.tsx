import NavMenuList from './NavMenuList';
import type { WebPage } from '../types/Page.mjs';
import { useRef, useState } from 'react';
import './NavMenu.scss';
import Arrow from '../assets/arrow.svg';

export default function NavMenu({
  pages,
  elementId,
  currentPath,
}: {
  pages: WebPage[];
  elementId: string;
  currentPath: string;
}) {
  const self = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const keyUpListener = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setIsActive(false);
    }
  };

  const blurListener = (event: React.FocusEvent<HTMLButtonElement>) => {
    const isSelfOrChildInFocus = self.current?.contains(event.relatedTarget as Node);
    if (!isSelfOrChildInFocus) {
      setIsActive(false);
    }
  };

  return (
    <div className='nav-menu' ref={self} onKeyUp={(event) => keyUpListener(event)}>
      <button
        onClick={() => setIsActive(!isActive)}
        aria-expanded={isActive}
        aria-controls={elementId}
        aria-label='Select subpage'
        onBlur={(event) => blurListener(event)}
      >
        <img src={Arrow.src} alt='' />
      </button>
      {isActive && <NavMenuList pages={pages} elementId={elementId} currentPath={currentPath} />}
    </div>
  );
}
