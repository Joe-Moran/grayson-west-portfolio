import type { WebPage } from '../types/Page.mts';
import HeaderNavMenuNavLink from './HeaderNavMenuNavLink';
import HeaderNavMenuDesktop from './HeaderNavMenuDesktop';
import HeaderNavMenuMobile from './HeaderNavMenuMobile';
import './HeaderNavMenu.scss';

export default function HeaderNavMenu(props: HeaderNavMenuProps) {
  const NavListItems = props.navItems.map(toListItemNavLink(props.currentPath));
  return props.isMobile ? (
    <HeaderNavMenuMobile>{NavListItems}</HeaderNavMenuMobile>
  ) : (
    <HeaderNavMenuDesktop>{NavListItems}</HeaderNavMenuDesktop>
  );
}

const toListItemNavLink = (currentPath: string) => (item: WebPage, index: number) => {
  const isCurrent = item.path == currentPath;

  return (
    <li key={index}>
      <HeaderNavMenuNavLink path={`/${item.path}`} title={item.title} isCurrent={isCurrent} />
    </li>
  );
};

type HeaderNavMenuProps = {
  navItems: WebPage[];
  currentPath: string;
  isMobile: boolean;
};
