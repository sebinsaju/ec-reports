import React from 'react';
import Menuitems from './MenuItems';
import { useLocation } from 'react-router';
import { Box, List } from '@mui/material';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';
import { useSelector } from 'react-redux';
import UserMenuItems from './UserMenuItems';

const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const user = useSelector((state) => state.user);
  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {user.user.user_role=="ADMIN"?Menuitems.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else {
            return <NavItem item={item} key={item.id} pathDirect={pathDirect} />;
          }
        }):
        UserMenuItems.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else {
            return <NavItem item={item} key={item.id} pathDirect={pathDirect} />;
          }
        })
        }
      </List>
    </Box>
  );
};
export default SidebarItems;
