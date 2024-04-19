import { it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import HeaderNavMenu from './HeaderNavMenu.tsx';

const defaultProps = {
  navItems: [{ path: '', title: '' }],
  currentPath: '',
  isMobile: false,
};

const menuButtonName = /open navigation drawer/i;

it('Renders nav link on mount when props.isMobile = false and propsl.navItems contains entries', () => {
  renderHeaderNavMenu({ ...defaultProps, navItems: [{ path: '/', title: 'Home' }] });

  const navLink = screen.getByRole('link', { name: 'Home' });
  expect(navLink).toBeInTheDocument();
});

it('Renders nav link with aria-current="page" when props.currentPath matches the nav link path', () => {
  renderHeaderNavMenu({
    ...defaultProps,
    navItems: [{ path: '/', title: 'Home' }],
    currentPath: '/',
  });

  const navLink = screen.getByRole('link', { name: 'Home' });
  expect(navLink).toHaveAttribute('aria-current', 'page');
});

it('Does not render nav items on mount when props.isMobile = true', () => {
  renderHeaderNavMenu({ ...defaultProps, isMobile: true });

  const navElement = screen.queryByRole('navigation');
  expect(navElement).not.toBeInTheDocument();
});

it('Renders menu button when props.isMobile = true', () => {
  renderHeaderNavMenu({ ...defaultProps, isMobile: true });

  const menuButton = screen.getByRole('button', { name: menuButtonName });
  expect(menuButton).toBeInTheDocument();
});

it('Does not render menu button when props.isMobile = false', () => {
  renderHeaderNavMenu({ ...defaultProps, isMobile: false });

  const menuButton = screen.queryByRole('button', { name: menuButtonName });
  expect(menuButton).not.toBeInTheDocument();
});

it('Renders nav element when props.isMobile = true and the menu button is clicked', () => {
  renderHeaderNavMenu({ ...defaultProps, isMobile: true });
  const menuButton = screen.getByRole('button', { name: menuButtonName });
  fireEvent.click(menuButton);
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});

it('Removes nav element when props.isMobile = true and the menu button is clicked once to activate, again to deactivate', () => {
  renderHeaderNavMenu({ ...defaultProps, isMobile: true });
  const menuButton = screen.getByRole('button', { name: menuButtonName });
  fireEvent.click(menuButton);
  fireEvent.click(menuButton);
  const navElement = screen.queryByRole('navigation');

  expect(navElement).not.toBeInTheDocument();
});

function renderHeaderNavMenu(props) {
  return render(
    <HeaderNavMenu
      navItems={props.navItems}
      currentPath={props.currentPath}
      isMobile={props.isMobile}
    />,
  );
}
