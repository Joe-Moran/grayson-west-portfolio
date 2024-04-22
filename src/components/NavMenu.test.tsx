import { render, fireEvent, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import NavMenu from './NavMenu';
const defaultProps = {
  pages: [
    { title: 'story', path: '/a' },
    { title: 'story 23', path: '/' },
  ],
  elementId: 'test',
  currentPath: '/',
};

it('Does not render nav menu list on mount', () => {
  renderNavMenu();
  expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
});

it('Renders nav menu list on click of activator button', () => {
  renderNavMenu();
  fireEvent.click(screen.getByRole('button', { name: 'Howdy' }));
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

function renderNavMenu(props = defaultProps) {
  render(
    <NavMenu pages={props.pages} elementId={props.elementId} currentPath={props.currentPath} />,
  );
}
