import './HeaderNavMenuNavLink.scss';

type Props = {
  title: string;
  isCurrent: boolean;
  path: string;
  hasDropdown?: boolean; // keep prop (used for styling / padding), but don't render a caret
  isDisciplineLink?: boolean;
};

export default function HeaderNavMenuNavLink({
  title,
  isCurrent,
  path,
  hasDropdown,
  isDisciplineLink,
}: Props) {
  const activeClassName = isCurrent ? 'active' : '';
  const attributes: { 'aria-current': 'page' } | {} = isCurrent ? { 'aria-current': 'page' } : {};

  return (
    <a
      href={path}
      className={`nav-link ${activeClassName} ${hasDropdown ? 'has-dropdown' : ''} ${
        isDisciplineLink ? 'discipline-link' : ''
      }`}
      {...attributes}
    >
      <span>{title}</span>
    </a>
  );
}
