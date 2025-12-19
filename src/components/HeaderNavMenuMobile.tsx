import type { WebPage } from '../types/Page.mts';
import { useState } from 'react';
import HeaderDisciplineMenu from './HeaderDisciplineMenu';
import './HeaderNavMenuMobile.scss';

type DisciplineKey = 'ux' | 'visual' | 'photo' | 'sound';
type DisciplineSubpages = Record<DisciplineKey, WebPage[]>;

export default function HeaderNavMenuMobile({
  children,
  currentDiscipline,
  disciplineSubpages,
}: {
  children: React.ReactNode;
  currentDiscipline?: DisciplineKey;
  disciplineSubpages: DisciplineSubpages;
}) {
  const [isOpen, setVisibility] = useState(false);

  return (
    <div className='nav-container'>
      <button className='nav-drawer-button' onClick={() => setVisibility(!isOpen)}>
        <img src='/hamburger.svg' alt='Open navigation drawer' />
      </button>

      {isOpen && (
        <nav className='nav-drawer' aria-label='Main site navigation'>
          <ul>
            {children}

            {/* Dropdown only appears when you're inside a discipline */}
            {currentDiscipline && (
              <li className='nav-discipline-menu'>
                <HeaderDisciplineMenu pages={disciplineSubpages[currentDiscipline]} />
              </li>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
}
