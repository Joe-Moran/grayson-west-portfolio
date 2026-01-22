import type { WebPage } from '../types/Page.mts';
import HeaderNavMenuNavLink from './HeaderNavMenuNavLink';
import HeaderNavMenuDesktop from './HeaderNavMenuDesktop';
import HeaderNavMenuMobile from './HeaderNavMenuMobile';
import HeaderDisciplineMenu from './HeaderDisciplineMenu';
import './HeaderNavMenu.scss';

type DisciplineKey = 'ux' | 'visual' | 'photo' | 'sound';
type DisciplineSubpages = Record<DisciplineKey, WebPage[]>;

type HeaderNavMenuProps = {
  navItems: WebPage[];
  currentPath: string;
  isMobile?: boolean; // legacy — ignored
  currentDiscipline?: DisciplineKey;
  disciplineSubpages: DisciplineSubpages;
};

export default function HeaderNavMenu(props: HeaderNavMenuProps) {
  const NavListItems = props.navItems.map(
    toListItemNavLink(props.currentPath, props.currentDiscipline, props.disciplineSubpages)
  );

  return (
    <>
      <HeaderNavMenuDesktop currentPath={props.currentPath}>
        {NavListItems}
      </HeaderNavMenuDesktop>

      <HeaderNavMenuMobile
        navItems={props.navItems}
        currentPath={props.currentPath}
        disciplineSubpages={props.disciplineSubpages}
        currentDiscipline={props.currentDiscipline}
      />
    </>
  );
}

const toListItemNavLink =
  (
    currentPath: string,
    currentDiscipline: DisciplineKey | undefined,
    disciplineSubpages: DisciplineSubpages
  ) =>
  (item: WebPage, index: number) => {
    const isCurrent = currentPath.startsWith(item.path);

    const disciplineForPath =
      item.path === '/ux'
        ? 'ux'
        : item.path === '/visual'
        ? 'visual'
        : item.path === '/photo'
        ? 'photo'
        : item.path === '/sound'
        ? 'sound'
        : undefined;

    const isDisciplineLink = disciplineForPath !== undefined;
    const isActiveDiscipline =
      disciplineForPath !== undefined && disciplineForPath === currentDiscipline;

    return (
      <li key={index} className={isActiveDiscipline ? 'nav-item--active-discipline' : ''}>
        <span className="nav-item-inner">
          <HeaderNavMenuNavLink
            path={item.path}
            title={item.title}
            isCurrent={isCurrent}
            hasDropdown={isActiveDiscipline}
            isDisciplineLink={isDisciplineLink}
          />

          {/* ✅ Attach dropdown to the ACTIVE discipline link */}
          {isActiveDiscipline && (
            <span className="nav-discipline-anchor">
              <HeaderDisciplineMenu
                pages={disciplineSubpages[currentDiscipline]}
                elementId={`discipline-${currentDiscipline}-menu`}
                currentPath={currentPath}
              />
            </span>
          )}
        </span>
      </li>
    );
  };
