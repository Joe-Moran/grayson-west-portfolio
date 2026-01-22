import './HeaderNavMenu.scss';

export default function HeaderNavMenuDesktop({
  children,
  currentPath,
}: {
  children: React.ReactNode;
  currentPath: string;
}) {
  return (
    <div className="nav-container nav-desktop">
      <nav aria-label="Main site navigation">
        <ul className="nav-list">{children}</ul>
      </nav>
    </div>
  );
}
