import './HeaderNavMenuNavLink.scss';

export default function HeaderNavMenuNavLink({ title, isCurrent, path }) {
  const activeClassName = isCurrent ? 'active' : '';
  const currentAttributeValue = isCurrent ? 'page' : null;
  return (
    <a href={path} className={`nav-link ${activeClassName}`} aria-current={currentAttributeValue}>
      {title}
    </a>
  );
}
