import { useLayoutEffect, useMemo, useState } from 'react';
import HeaderNavMenu from './HeaderNavMenu.tsx';

export default function SiteHeader({ navItems, currentPath }) {
  const mobileBreakpoint = 768;
  const [width] = useWindowSize();
  const isMobile = useMemo(() => width < mobileBreakpoint, [width]);
  return <HeaderNavMenu isMobile={isMobile} navItems={navItems} currentPath={currentPath} />;
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
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
