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
  return pages.map((page, index) => {
    const attributes: { 'aria-current': 'page' } | {} =
      page.path === currentPath ? { 'aria-current': 'page' } : {};
    return (
      <li key={index}>
        <a href={page.path} {...attributes}>
          {page.title}
        </a>
      </li>
    );
  });
}

interface NavMenuListProps {
  pages: WebPage[];
  elementId: string;
  currentPath: string;
}
