import type { WebPage } from '../types/Page.mts';
import React, { useEffect, useMemo, useState } from 'react';
import './HeaderNavMenuMobile.scss';

type DisciplineKey = 'ux' | 'visual' | 'photo' | 'sound';
type DisciplineSubpages = Record<DisciplineKey, WebPage[]>;

type LinkInfo = {
  title: string;
  path: string;
  isCurrent?: boolean;
};

function getDisciplineKeyFromPath(path: string): DisciplineKey | undefined {
  if (path === '/ux') return 'ux';
  if (path === '/visual') return 'visual';
  if (path === '/photo') return 'photo';
  if (path === '/sound') return 'sound';
  return undefined;
}

/**
 * We receive `children` which are <li><HeaderNavMenuNavLink ... /></li>.
 * We extract the link props so we can render mobile UI (text + caret button).
 */
function extractLinks(children: React.ReactNode): LinkInfo[] {
  const links: LinkInfo[] = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    // Expecting: <li> ... </li>
    const liChildren: unknown = (child as React.ReactElement).props?.children;
    if (!React.isValidElement(liChildren)) return;

    // Expecting: <HeaderNavMenuNavLink path title isCurrent ... />
    const props: any = (liChildren as React.ReactElement).props;
    if (!props?.path || !props?.title) return;

    links.push({
      title: String(props.title),
      path: String(props.path),
      isCurrent: Boolean(props.isCurrent),
    });
  });

  return links;
}

export default function HeaderNavMenuMobile({
  children,
  currentDiscipline,
  disciplineSubpages,
  currentPath,
}: {
  children: React.ReactNode;
  currentDiscipline?: DisciplineKey;
  disciplineSubpages: DisciplineSubpages;
  currentPath: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<DisciplineKey | null>(null);

  const links = useMemo(() => extractLinks(children), [children]);

  // Close the drawer when navigating (currentPath changes)
  useEffect(() => {
    if (!isOpen) return;
    setIsOpen(false);
    setOpenSection(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setOpenSection(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // When drawer opens, default-expand the current discipline (nice UX)
  useEffect(() => {
    if (isOpen && currentDiscipline) setOpenSection(currentDiscipline);
  }, [isOpen, currentDiscipline]);

  const toggleSection = (key: DisciplineKey) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  return (
    <div className="nav-container nav-mobile">
      <button
        type="button"
        className="nav-drawer-button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
      >
        <span className="hamburger" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop so the drawer overlays and doesn't push content */}
          <button
            type="button"
            className="nav-drawer-backdrop"
            aria-label="Close navigation menu"
            onClick={() => {
              setIsOpen(false);
              setOpenSection(null);
            }}
          />

          <nav id="mobile-nav-drawer" className="nav-drawer" aria-label="Main site navigation">
            <ul className="nav-drawer-list">
              {links.map((link) => {
                const disciplineKey = getDisciplineKeyFromPath(link.path);
                const isDiscipline = disciplineKey !== undefined;

                if (!isDiscipline) {
                  return (
                    <li key={link.path} className="nav-drawer-item">
                      <a
                        href={link.path}
                        className={`nav-drawer-link ${link.path === currentPath ? 'is-current' : ''}`}
                        aria-current={link.path === currentPath ? 'page' : undefined}
                      >
                        {link.title}
                      </a>
                    </li>
                  );
                }

                const isExpanded = openSection === disciplineKey;
                const subpages = disciplineSubpages[disciplineKey] ?? [];

                return (
                  <li key={link.path} className="nav-drawer-item nav-drawer-item--discipline">
                    <div className="nav-drawer-row">
                      <a
                        href={link.path}
                        className={`nav-drawer-link ${link.path === currentPath ? 'is-current' : ''}`}
                        aria-current={link.path === currentPath ? 'page' : undefined}
                      >
                        {link.title}
                      </a>

                      <button
                        type="button"
                        className="nav-drawer-caret"
                        aria-label={isExpanded ? `Collapse ${link.title} pages` : `Expand ${link.title} pages`}
                        aria-expanded={isExpanded}
                        onClick={() => toggleSection(disciplineKey)}
                      >
                        <span aria-hidden="true" />
                      </button>
                    </div>

                    {isExpanded && subpages.length > 0 && (
                      <ul className="nav-drawer-sublist" aria-label={`${link.title} pages`}>
                        {subpages.map((p) => (
                          <li key={p.path}>
                            <a
                              href={p.path}
                              className={`nav-drawer-sublink ${p.path === currentPath ? 'is-current' : ''}`}
                              aria-current={p.path === currentPath ? 'page' : undefined}
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
