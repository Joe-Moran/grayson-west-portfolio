import type { WebPage } from '../types/Page.mts';
import { useLayoutEffect, useMemo, useState } from 'react';
import HeaderNavMenu from './HeaderNavMenu';

type DisciplineKey = 'ux' | 'visual' | 'photo' | 'sound';

type DisciplineSubpages = Record<DisciplineKey, WebPage[]>;

type SiteHeaderProps = {
  navItems: WebPage[];
  currentPath: string;
  disciplineSubpages: DisciplineSubpages;
  currentDiscipline?: DisciplineKey;
};

export default function SiteHeader({
  navItems,
  currentPath,
  disciplineSubpages,
  currentDiscipline,
}: SiteHeaderProps) {
  const mobileBreakpoint = 768;
  const [width] = useWindowSize();
  const isMobile = useMemo(() => width < mobileBreakpoint, [width]);

  return (
    <HeaderNavMenu
      isMobile={isMobile}
      navItems={navItems}
      currentPath={currentPath}
      disciplineSubpages={disciplineSubpages}
      currentDiscipline={currentDiscipline}
    />
  );
}

function useWindowSize() {
  const [size, setSize] = useState<[number, number]>([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
