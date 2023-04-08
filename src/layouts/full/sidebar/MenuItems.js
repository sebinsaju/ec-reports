import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus,
  IconUsers,IconFileDatabase,IconForms, IconChartInfographic
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/admin-dashboard',
  },
  {
    navlabel: true,
    subheader: 'Users',
  },
  {
    id: uniqueId(),
    title: 'Users List',
    icon: IconUsers,
    href: '/admin/users-list',
  },
  {
    id: uniqueId(),
    title: 'Add User',
    icon: IconUserPlus,
    href: '/admin/create-user',
  },
  {
    navlabel: true,
    subheader: 'Forms',
  },

  {
    id: uniqueId(),
    title: 'Forms List',
    icon: IconFileDatabase,
    href: '/admin-forms',
  },
  {
    id: uniqueId(),
    title: 'Create Form',
    icon: IconForms,
    href: '/admin/create-form',
  },
  {
    navlabel: true,
    subheader: 'Reports',
  },

  {
    id: uniqueId(),
    title: 'Report',
    icon: IconChartInfographic,
    href: '/admin/report',
  },
];
export default Menuitems;
