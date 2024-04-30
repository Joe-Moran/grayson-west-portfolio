import './HeaderNavMenuNavLink.scss';

export default function HeaderNavMenuNavLink({ title, isCurrent, path }) {
  const activeClassName = isCurrent ? 'active' : '';
  const attributes: { 'aria-current': 'page' } | {} = isCurrent ? { 'aria-current': 'page' } : {};
  return (
    <a href={path} className={`nav-link ${activeClassName}`} {...attributes}>
      {title}
    </a>
  );
}
