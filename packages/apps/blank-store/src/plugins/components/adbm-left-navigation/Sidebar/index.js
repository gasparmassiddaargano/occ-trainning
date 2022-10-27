import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import DesktopSidebar from './variants/DesktopSidebar/DesktopSidebar';
import MobileSidebar from './variants/MobileSidebar/MobileSidebar';

const Sidebar = (props) => {
  const {
    open,
    setOpen,
    primaryItems,
    secondaryItems,
    backButtonText,
    menuText,
    onOpen,
    onClose,
    firstName,
    lastName
  } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return isMobile ? (
    <MobileSidebar
      open={open}
      menuText={menuText}
      primaryItems={primaryItems}
      backButtonText={backButtonText}
      secondaryItems={secondaryItems}
      onOpen={onOpen}
      onClose={onClose}
    />
  ) : (
    <DesktopSidebar
      open={open}
      setOpen={setOpen}
      primaryItems={primaryItems}
      secondaryItems={secondaryItems}
      firstName={firstName}
      lastName={lastName}
    />
  );
};

export default Sidebar;
