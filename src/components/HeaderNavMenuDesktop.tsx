import './HeaderNavMenu.scss';

export default function HeaderNavMenuDesktop({ children }: { children: React.ReactNode }) {
  return (
    <div className="nav-container">
      <nav aria-label="Main site navigation">
        <ul className="nav-list">{children}</ul>
      </nav>
    </div>
  );
}
