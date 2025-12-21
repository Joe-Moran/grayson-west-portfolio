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
  isMobile: boolean;
  currentDiscipline?: DisciplineKey;
  disciplineSubpages: DisciplineSubpages;
};

export default function HeaderNavMenu(props: HeaderNavMenuProps) {
  const NavListItems = props.navItems.map(
    toListItemNavLink(props.currentPath, props.currentDiscipline, props.disciplineSubpages)
  );

  return props.isMobile ? (
    <HeaderNavMenuMobile>{NavListItems}</HeaderNavMenuMobile>
  ) : (
    <HeaderNavMenuDesktop>{NavListItems}</HeaderNavMenuDesktop>
  );
}

const toListItemNavLink =
  (currentPath: string, currentDiscipline: DisciplineKey | undefined, disciplineSubpages: DisciplineSubpages) =>
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
    const hasDropdown = isDisciplineLink && disciplineForPath === currentDiscipline;

    return (
      <li key={index} className={hasDropdown ? 'nav-item--active-discipline' : ''}>
        <span className={hasDropdown ? 'nav-item-inner' : undefined}>
          <HeaderNavMenuNavLink
            path={item.path}
            title={item.title}
            isCurrent={isCurrent}
            hasDropdown={hasDropdown}
            isDisciplineLink={isDisciplineLink}
          />

          {/* Render the dropdown MENU only for the active discipline */}
          {hasDropdown && (
            <span className="nav-discipline-anchor">
              <HeaderDisciplineMenu
                pages={disciplineSubpages[disciplineForPath]}
                elementId={`discipline-${disciplineForPath}-menu`}
                currentPath={currentPath}
              />
            </span>
          )}
        </span>
      </li>
    );
  };
