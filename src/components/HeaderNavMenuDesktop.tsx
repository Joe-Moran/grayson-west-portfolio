import type { WebPage } from '../types/Page.mts';
import HeaderDisciplineMenu from './HeaderDisciplineMenu';
import './HeaderNavMenu.scss';

type DisciplineKey = 'ux' | 'visual' | 'photo' | 'sound';
type DisciplineSubpages = Record<DisciplineKey, WebPage[]>;

export default function HeaderNavMenuDesktop({
  children,
  currentDiscipline,
  disciplineSubpages,
  currentPath,
}: {
  children: React.ReactNode;
  currentDiscipline?: DisciplineKey;
  disciplineSubpages: DisciplineSubpages;
  currentPath: string;
}) {
  return (
    <div className="nav-container">
      <nav aria-label="Main site navigation">
        <ul className="nav-list">
          {children}

          {/* Only show discipline dropdown when you're inside a discipline */}
          {currentDiscipline && (
            <li className="nav-discipline-slot">
              <span className="nav-discipline-anchor">
                <HeaderDisciplineMenu
                  pages={disciplineSubpages[currentDiscipline]}
                  elementId={`discipline-${currentDiscipline}-menu`}
                  currentPath={currentPath}
                />
              </span>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
