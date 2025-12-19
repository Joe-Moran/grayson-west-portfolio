import './HeaderNavMenuNavLink.scss';

type Props = {
  title: string;
  isCurrent: boolean;
  path: string;
  hasDropdown?: boolean;
};

export default function HeaderNavMenuNavLink({ title, isCurrent, path, hasDropdown }: Props) {
  const activeClassName = isCurrent ? 'active' : '';
  const attributes: { 'aria-current': 'page' } | {} = isCurrent ? { 'aria-current': 'page' } : {};

  return (
    <a
      href={path}
      className={`nav-link ${activeClassName} ${hasDropdown ? 'has-dropdown' : ''}`}
      {...attributes}
    >
      <span>{title}</span>
      {hasDropdown && <span className="nav-link-caret" aria-hidden="true" />}
    </a>
  );
}
