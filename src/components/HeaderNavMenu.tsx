import type { WebPage } from '../types/Page.mts';
import HeaderNavMenuNavLink from './HeaderNavMenuNavLink';
import HeaderNavMenuDesktop from './HeaderNavMenuDesktop';
import HeaderNavMenuMobile from './HeaderNavMenuMobile';
import './HeaderNavMenu.scss';

type DisciplineKey = 'ux' | 'visual' | 'photo' | 'sound';
type DisciplineSubpages = Record<DisciplineKey, WebPage[]>;

type HeaderNavMenuProps = {
  navItems: WebPage[];
  currentPath: string;

  // NOTE: kept for now so we don’t have to refactor the parent yet.
  // This component no longer uses JS to decide mobile vs desktop.
  isMobile: boolean;

  currentDiscipline?: DisciplineKey;
  disciplineSubpages: DisciplineSubpages;
};

export default function HeaderNavMenu(props: HeaderNavMenuProps) {
  const NavListItems = props.navItems.map(
    toListItemNavLink(props.currentPath, props.currentDiscipline)
  );

  return (
    <>
      {/* Mobile menu (CSS controls visibility) */}
      <div className="nav-mobile">
        <HeaderNavMenuMobile
          currentDiscipline={props.currentDiscipline}
          disciplineSubpages={props.disciplineSubpages}
          currentPath={props.currentPath}
        >
          {NavListItems}
        </HeaderNavMenuMobile>
      </div>

      {/* Desktop menu (CSS controls visibility) */}
      <div className="nav-desktop">
        <HeaderNavMenuDesktop
          currentDiscipline={props.currentDiscipline}
          disciplineSubpages={props.disciplineSubpages}
          currentPath={props.currentPath}
        >
          {NavListItems}
        </HeaderNavMenuDesktop>
      </div>
    </>
  );
}

const toListItemNavLink =
  (currentPath: string, currentDiscipline?: DisciplineKey) =>
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

    const hasDropdown = disciplineForPath !== undefined && disciplineForPath === currentDiscipline;
    const isDisciplineLink = disciplineForPath !== undefined;

    return (
      <li key={index}>
        <HeaderNavMenuNavLink
          path={item.path}
          title={item.title}
          isCurrent={isCurrent}
          hasDropdown={hasDropdown}
          isDisciplineLink={isDisciplineLink}
        />
      </li>
    );
  };
