import type { WebPage } from '../types/Page.mts';
import HeaderNavMenu from './HeaderNavMenu.tsx';

type DisciplineKey = 'ux' | 'visual' | 'photo' | 'sound';
type DisciplineSubpages = Record<DisciplineKey, WebPage[]>;

type SiteHeaderProps = {
  navItems: WebPage[];
  currentPath: string;
  currentDiscipline?: DisciplineKey;
  disciplineSubpages: DisciplineSubpages;
};

export default function SiteHeader(props: SiteHeaderProps) {
  return (
    <HeaderNavMenu
      navItems={props.navItems}
      currentPath={props.currentPath}
      currentDiscipline={props.currentDiscipline}
      disciplineSubpages={props.disciplineSubpages}
    />
  );
}
