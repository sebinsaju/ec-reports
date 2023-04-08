import {
    IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus,
    IconUsers,IconFileDatabase,IconForms
  } from '@tabler/icons';
  
  import { uniqueId } from 'lodash';
  
  const UserMenuItems = [
    {
      navlabel: true,
      subheader: 'Home',
    },
  
    {
      id: uniqueId(),
      title: 'Dashboard',
      icon: IconLayoutDashboard,
      href: '/dashboard',
    },
    // {
    //   navlabel: true,
    //   subheader: 'Forms',
    // },
    // {
    //   id: uniqueId(),
    //   title: 'Users List',
    //   icon: IconUsers,
    //   href: '/admin/users-list',
    // },
    // {
    //   id: uniqueId(),
    //   title: 'Add User',
    //   icon: IconUserPlus,
    //   href: '/ui/shadow',
    // },
    {
      navlabel: true,
      subheader: 'Forms',
    },
  
    {
      id: uniqueId(),
      title: 'Forms List',
      icon: IconFileDatabase,
      href: '/user-forms',
    },
    {
      id: uniqueId(),
      title: 'Submitted',
      icon: IconForms,
      href: '/user-submitted-forms',
    },
  ];
  export default UserMenuItems;
  