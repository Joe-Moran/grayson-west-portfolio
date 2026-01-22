import type { WebPage } from '../types/Page.mts';
import { useEffect, useMemo, useState } from 'react';
import './HeaderNavMenuMobile.scss';

type DisciplineKey = 'ux' | 'visual' | 'photo' | 'sound';
type DisciplineSubpages = Record<DisciplineKey, WebPage[]>;

type Props = {
  navItems: WebPage[];
  currentPath: string;
  currentDiscipline?: DisciplineKey;
  disciplineSubpages: DisciplineSubpages;
};

export default function HeaderNavMenuMobile({
  navItems,
  currentPath,
  currentDiscipline,
  disciplineSubpages,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const subpagesForCurrent = useMemo(() => {
    if (!currentDiscipline) return [];
    return disciplineSubpages[currentDiscipline] || [];
  }, [currentDiscipline, disciplineSubpages]);

  const isCurrentPath = (path: string) =>
    currentPath === path || currentPath.startsWith(path + '/');

  const closeMenu = () => setIsOpen(false);

  // ✅ Prevent scrolling the page behind the menu (and avoid scrollbar reflow on desktop widths)
  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [isOpen]);

  return (
    <div className="nav-container nav-container--mobile">
      <div className="nav-drawer-button-slot">
        <button
          type="button"
          className={`nav-drawer-button ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          <span className="hamburger" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            className="nav-drawer-backdrop"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />

          <nav className="nav-drawer" aria-label="Main site navigation">
            <div className="nav-drawer-header">
              <a href="/" className="logo nav-drawer-logo" onClick={closeMenu}>
                GGW
              </a>
            </div>

            <ul className="nav-drawer-list">
              {navItems.map((item) => {
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

                const isDisciplineItem =
                  disciplineForPath !== undefined && disciplineForPath === currentDiscipline;

                const showSubpages = !!currentDiscipline && isDisciplineItem;

                return (
                  <li className="nav-drawer-item" key={item.path}>
                    <a
                      href={item.path}
                      className={`nav-drawer-link ${isCurrentPath(item.path) ? 'is-current' : ''}`}
                      onClick={closeMenu}
                    >
                      {item.title}
                    </a>

                    {/* ✅ Subpages behavior remains exactly as-is (frozen) */}
                    {showSubpages && subpagesForCurrent.length > 0 && (
                      <ul className="nav-drawer-sublist" aria-label={`${item.title} pages`}>
                        {subpagesForCurrent.map((p) => (
                          <li key={p.path}>
                            <a
                              href={p.path}
                              className={`nav-drawer-sublink ${
                                isCurrentPath(p.path) ? 'is-current' : ''
                              }`}
                              onClick={closeMenu}
                            >
                              {p.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
