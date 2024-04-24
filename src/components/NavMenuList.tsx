import type { WebPage } from '../types/Page.mts';
import './NavMenuList.scss';

export default function NavMenuList({ pages, elementId, currentPath }: NavMenuListProps) {
  return (
    <nav className='nav-menu-list' id={elementId}>
      <ul>
        <NavMenuListItems pages={pages} currentPath={currentPath} />
      </ul>
    </nav>
  );
}

function NavMenuListItems({ pages, currentPath }: Omit<NavMenuListProps, 'elementId'>) {
  return pages.map((page, index) => (
    <li key={index}>
      <a href={page.path} aria-current={page.path === currentPath ? 'page' : null}>
        {page.title}
      </a>
    </li>
  ));
}

interface NavMenuListProps {
  pages: WebPage[];
  elementId: string;
  currentPath: string;
}
