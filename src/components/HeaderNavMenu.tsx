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
  (currentPath: string, currentDiscipline?: DisciplineKey, disciplineSubpages?: DisciplineSubpages) =>
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

    // ✅ If this is the active discipline link, render the pill wrapper AND the dropdown together.
    if (hasDropdown && disciplineSubpages) {
      return (
        <li key={index} className="nav-item nav-item--active-discipline">
          <span className="nav-item-inner">
            <HeaderNavMenuNavLink
              path={item.path}
              title={item.title}
              isCurrent={isCurrent}
              isDisciplineLink={true}
              hasDropdown={true}
            />

            <HeaderDisciplineMenu
              pages={disciplineSubpages[disciplineForPath]}
              elementId={`discipline-${disciplineForPath}-menu`}
              currentPath={currentPath}
            />
          </span>
        </li>
      );
    }

    // Normal links (including non-active discipline links) just render as-is.
    return (
      <li key={index} className="nav-item">
        <HeaderNavMenuNavLink
          path={item.path}
          title={item.title}
          isCurrent={isCurrent}
          isDisciplineLink={isDisciplineLink}
          hasDropdown={false}
        />
      </li>
    );
  };
