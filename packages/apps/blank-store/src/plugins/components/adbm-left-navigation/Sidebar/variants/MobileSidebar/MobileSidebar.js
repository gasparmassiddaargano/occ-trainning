/* eslint-disable no-shadow */
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import ADBMFavouriteIcon from '../../../../adbm-favourite-icon';
import Button from '@mui/material/Button';
import { useSidebarStyles } from '../../Sidebar.styles';
import { useMobileSidebarStyles } from './MobileSidebar.styles';

const MobileSidebar = (props) => {
  const {
    primaryItems,
    secondaryItems,
    open,
    backButtonText,
    menuText,
    onOpen,
    onClose
  } = props;
  const classes = useSidebarStyles({});
  const mobileClasses = useMobileSidebarStyles();

  const items = useMemo(
    () => [...primaryItems, ...secondaryItems],
    [primaryItems, secondaryItems],
  );

  const [currentItems, setCurrentItems] = useState(items);
  const [path, setPath] = useState([]);

  useEffect(() => {
    const currentItems = getCurrentItems(items, path);
    setCurrentItems(currentItems);
  }, [items, path]);

  const getCurrentItems = (items, path) => {
    let currentLevel = items;

    path.forEach(selectedItem => {
      currentLevel = currentLevel[selectedItem].childrenItems;
    });

    return currentLevel;
  };

  const diveDown = (selectedIndex) => {
    setPath(currentPath => currentPath.concat(selectedIndex));
  };

  const riseUp = () => {
    setPath(currentPath => currentPath.slice(0, currentPath.length - 2));
  };

  const close = () => {
    resetState();
    onClose();
  };

  const resetState = () => {
    setPath([]);
  };

  return (
    <SwipeableDrawer
      anchor='bottom'
      PaperProps={{
        style: {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },
        elevation: 8,
      }}
      ModalProps={{
        BackdropProps: {
          // @ts-ignore
          'data-cy': 'sidebar-mobile-backdrop',
          'data-testid': 'mobile-menu',
        },
      }}
      open={open}
      onClose={close}
      onOpen={() => onOpen()}
    >
      <Box>
        <Box
          display='flex'
          alignItems='flex-end'
          justifyContent='space-between'
          className={mobileClasses.mobileDrawerToolbar}
          width='100%'
        >
          {path.length > 0 ? (
            <Button
              onClick={riseUp}
              className={mobileClasses.backButton}
              variant='text'
              color='secondary'
              disableRipple
            >
              <ADBMFavouriteIcon style={{ width: 20, height: 20, marginRight: 8 }} />
              <Typography variant='h4'>{backButtonText}</Typography>
            </Button>
          ) : (
            <Typography variant='h4'>{menuText}</Typography>
          )}
          <ADBMFavouriteIcon onClick={close} data-cy='sidebar-close-mobile' />
        </Box>
        <Divider />
        <List
          style={{
            padding: '12px 8px 16px',
          }}
        >
          {Array.isArray(currentItems) &&
            currentItems.map(
              (
                { icon: Icon, text, childrenItems, onClick, selected, dataCy },
                index,
              ) => {
                const hasChildren = !!(childrenItems && childrenItems.length);

                return (
                  <ListItem
                    key={(text || '').concat(index)}
                    className={classes.menuItem}
                    onClick={() => {
                      if (onClick) onClick();
                      if (!hasChildren) return;
                      diveDown(index);
                    }}
                    button
                    disableRipple
                    selected={selected}
                    data-cy={dataCy}
                  >
                    {Icon && (
                      <ListItemIcon className={classes.menuItemIcon}>
                        <Icon />
                      </ListItemIcon>
                    )}
                    <ListItemText primary={text} />
                    {hasChildren && <ADBMFavouriteIcon />}
                  </ListItem>
                );
              },
            )}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default MobileSidebar;
