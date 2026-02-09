import type { WebPage } from '../types/Page.mts';
import { useRef, useState } from 'react';
import './HeaderDisciplineMenu.scss';

export default function HeaderDisciplineMenu({
  pages,
  elementId,
  currentPath,
}: {
  pages: WebPage[];
  elementId: string;
  currentPath: string;
}) {
  const self = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const keyUpListener = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') setIsActive(false);
  };

  const blurListener = (event: React.FocusEvent<HTMLButtonElement>) => {
    const isSelfOrChildInFocus = self.current?.contains(event.relatedTarget as Node);
    if (!isSelfOrChildInFocus) setIsActive(false);
  };

  return (
    <div className="header-discipline-menu" ref={self} onKeyUp={keyUpListener}>
      <button
        type="button"
        className="header-discipline-menu__button"
        onClick={() => setIsActive((v) => !v)}
        aria-expanded={isActive}
        aria-controls={elementId}
        aria-label="Select a page"
        onBlur={blurListener}
      >
        <span className="header-discipline-menu__caret" aria-hidden="true" />
      </button>

      {isActive && (
        <nav className="header-discipline-menu__list" id={elementId} aria-label="Discipline pages">
          <ul>
            {pages.map((page, index) => {
              const attrs: { 'aria-current': 'page' } | {} =
                page.path === currentPath ? { 'aria-current': 'page' } : {};
              return (
                <li key={index}>
                  <a href={page.path} {...attrs}>
                    {page.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
