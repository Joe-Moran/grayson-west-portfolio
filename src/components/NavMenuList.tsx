import type { WebPage } from '../types/Page.mts';
import './NavMenuList.scss';

export default function NavMenuList({
  pages,
  elementId,
  currentPath,
}: {
  pages: WebPage[];
  elementId: string;
  currentPath: string;
}) {
  return (
    <nav className='nav-menu-list' id={elementId}>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <a href={page.path} aria-current={page.path === currentPath ? 'page' : null}>
              {page.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
