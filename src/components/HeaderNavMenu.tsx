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
    <HeaderNavMenuMobile
      currentDiscipline={props.currentDiscipline}
      disciplineSubpages={props.disciplineSubpages}
    >
      {NavListItems}
    </HeaderNavMenuMobile>
  ) : (
    <HeaderNavMenuDesktop
      currentDiscipline={props.currentDiscipline}
      disciplineSubpages={props.disciplineSubpages}
    >
      {NavListItems}
    </HeaderNavMenuDesktop>
  );
}

const toListItemNavLink =
  (
    currentPath: string,
    currentDiscipline?: DisciplineKey,
    disciplineSubpages?: DisciplineSubpages
  ) =>
  (item: WebPage, index: number) => {
    const isCurrent = currentPath.startsWith(item.path);

    const disciplineForPath: DisciplineKey | undefined =
      item.path === '/ux'
        ? 'ux'
        : item.path === '/visual'
        ? 'visual'
        : item.path === '/photo'
        ? 'photo'
        : item.path === '/sound'
        ? 'sound'
        : undefined;

    const hasDropdown =
      disciplineForPath !== undefined && disciplineForPath === currentDiscipline;

    return (
      <li key={index} className="nav-item">
        <HeaderNavMenuNavLink
          path={item.path}
          title={item.title}
          isCurrent={isCurrent}
          hasDropdown={hasDropdown}
        />

        {hasDropdown && disciplineSubpages && disciplineForPath && (
          <HeaderDisciplineMenu
            pages={disciplineSubpages[disciplineForPath]}
            elementId={`discipline-${disciplineForPath}`}
            currentPath={currentPath}
          />
        )}
      </li>
    );
  };
