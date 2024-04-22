import NavMenuList from './NavMenuList';

export default {
  title: 'Components/NavMenuList',
  component: NavMenuList,
};

export const Primary = {
  render: () => (
    <NavMenuList
      pages={[
        { title: 'story', path: '/sdf' },
        { title: 'story 23', path: '/asdf' },
      ]}
      elementId='test'
      currentPath='/'
    />
  ),
};

export const Active = {
  render: () => (
    <NavMenuList
      pages={[
        { title: 'story', path: '/sdf' },
        { title: 'story 23', path: '/active' },
      ]}
      elementId='test'
      currentPath='/active'
    />
  ),
};
