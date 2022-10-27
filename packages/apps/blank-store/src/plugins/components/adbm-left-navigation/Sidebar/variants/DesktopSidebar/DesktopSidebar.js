import {
  Box,
  ClickAwayListener,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Theme,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, {useCallback, useEffect, useState} from 'react';
import ADBMFavouriteIcon from '../../../../adbm-favourite-icon';
import {isTouchEnabled, joinClasses} from '../../../utils/helpers';
import {MenuItem} from '../../components/MenuItem';
import {useSidebarStyles} from '../../Sidebar.styles';
import {useNavigator} from '@oracle-cx-commerce/react-components/link';


const DesktopSidebar = (props) => {
  const {
    primaryItems,
    secondaryItems,
    open,
    setOpen,
    firstName,
    lastName
  } = props;
  const theme = useTheme();
  const openTransitionDuration = theme.transitions.duration.enteringScreen;
  // todo: Refactor this flag into a component prop and move the decision logic up the tree
  const shouldOpenOnHover = useMediaQuery(theme.breakpoints.up('lg'));
  const classes = useSidebarStyles({open, openTransitionDuration});

  const [enableSubmenu, setEnableSubmenu] = useState(!shouldOpenOnHover);
  const [openedByClick, setOpenedByClick] = useState(false);
  const goToPage = useNavigator();

  const handleToggleClick = () => {
    setOpenedByClick(current => !current);
    handleToggleDrawerDesktop();
    goToPage('home');
  };

  const handleToggleDrawerDesktop = () => {
    open ? closeDrawer() : openDrawer();
  };

  const handleMouseOut = useCallback(() => {
    if (openedByClick) return;
    closeDrawer();
  }, [openedByClick]);

  const handleMouseIn = useCallback(() => {
    if (!shouldOpenOnHover) return;
    openDrawer();
  }, [shouldOpenOnHover]);

  const handleClickAway = () => {
    if (isTouchEnabled()) closeDrawer();
  };

  const openDrawer = useCallback(() => {
    // When shouldOpenOnHover is true, disable the menu to prevent it from being rendered in the wrong place
    if (!shouldOpenOnHover) setEnableSubmenu(false);
    setOpen(true);
  }, [shouldOpenOnHover]);

  const closeDrawer = useCallback(() => {
    // When shouldOpenOnHover is true, disable the menu to prevent it from being rendered in the wrong place
    if (!shouldOpenOnHover) setEnableSubmenu(false);

    setOpen(false);
    setOpenedByClick(false);
  }, [shouldOpenOnHover]);

  useEffect(() => {
    if (!open && shouldOpenOnHover) return setEnableSubmenu(false);

    const timeout = setTimeout(() => setEnableSubmenu(true), openTransitionDuration);

    return () => clearTimeout(timeout);
  }, [open, shouldOpenOnHover]);

  const menuItemRenderer = ({
    icon,
    text,
    childrenItems = [],
    onClick,
    index,
    selected,
    dataCy,
    dataTestId,
    component,
    subMenuPlacement
  }) => (
    <MenuItem
      key={text}
      containerProps={{
        className: classes.menuItemContainer
      }}
      component={component}
      onClick={onClick}
      className={classes.menuItem}
      childItems={childrenItems}
      enableSubmenu={enableSubmenu}
      selected={selected}
      data-testid={dataTestId}
      data-cy={dataCy}
      popperPlacement={subMenuPlacement}
      firstName={firstName}
      lastName={lastName}
      button
    >
      <ListItemIcon data-key={index} className={classes.menuItemIcon}>
        {icon}
      </ListItemIcon>
       <ListItemText style={{ display: open? 'block': 'none'}} data-key={index} className={classes.upperLevelMenuItemText} primary={text} />
      {!!childrenItems.length && open && <div
      className={`icon-filter navigation-icon chevron-right`}
    ></div>}
    </MenuItem>
  );

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Drawer
        variant="permanent"
        onMouseLeave={shouldOpenOnHover ? handleMouseOut : undefined}
        onClose={closeDrawer}
        className={joinClasses(classes.drawer, (open && firstName && lastName) ? classes.drawerOpen : classes.drawerClose)}
        PaperProps={{
          elevation: 4,
          // @ts-ignore
          'data-cy': 'sidebar-desktop',
          'data-testid': 'sidebar-desktop'
        }}
        classes={{
          paper: (open && firstName && lastName) ? classes.drawerOpen : classes.drawerClose
        }}
      >
        <div className={classes.toolbar}>
          <Box display="flex" alignItems="flex-start" width="100%">
            <IconButton
              className={`${classes.toggle} AD-vertical-branding-logo`}
              onClick={handleToggleClick}
              data-testid="sidebar-toggle-desktop"
              data-cy="sidebar-toggle-desktop"
            >
              {open ? (
                <div className={`icon-filter navigation-icon leftnav-close-icon`}></div>
              ) : (
                <div className={`icon-filter navigation-icon leftnav-menu-icon`}></div>
              )}
            </IconButton>
            {open && (
              <img
                className={`${classes.icon} ad-branding-logo`}
                src="/file/general/atoms-branding-logo-primary.svg"
                height={32}
                alt="Avery Dennison"
                onClick= {()=>{goToPage("home")}}
              />
            )}
          </Box>
        </div>
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          flex={1}
          onMouseOverCapture={shouldOpenOnHover ? handleMouseIn : undefined}
          data-testid="sidebar-main-section"
        >
          <List className={classes.mainItems}>{primaryItems.map(menuItemRenderer)}</List>
          {Array.isArray(secondaryItems) && Boolean(secondaryItems.length) &&(
            <List style={{paddingBottom: 8}}>{secondaryItems.map(menuItemRenderer)}</List>
          )}
        </Box>
      </Drawer>
    </ClickAwayListener>
  );
};

export default DesktopSidebar;
