import NavMenu from './NavMenu';

export default {
  title: 'Components/NavMenu',
  component: NavMenu,
};

export const Primary = {
  render: () => (
    <NavMenu
      pages={[
        { title: 'story', path: '/sd' },
        { title: 'story 23', path: '/d' },
      ]}
      elementId='test'
      currentPath='/'
    />
  ),
};
