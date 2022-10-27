import {
  ClickAwayListener,
  Grow,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuList,
  Paper,
  Popper,
  firstName,
  lastName
} from '@mui/material';
import React, { useRef, useState } from 'react';
import { useSidebarStyles } from '../../Sidebar.styles';
import ADBMFavouriteIcon from '../../../../adbm-favourite-icon';


export const MenuItem = (props) => {
  const {
    children,
    enableSubmenu = true,
    containerProps = {},
    childItems = [],
    popperPlacement,
    firstName,
    lastName
  } = props;
  const classes = useSidebarStyles({});
  const parentRef = useRef();
  const [openMenu, setOpenMenu] = useState(false);

  const shouldOpenOnClick =  true;

  const handlePopoverOpen = () => setOpenMenu(true);
  const handlePopoverClose = () => setOpenMenu(false);
  const handleClick = () => {
    if (shouldOpenOnClick) handlePopoverOpen();
  };

  // useEffect(() => {
  //   window.addEventListener("beforeunload", hideSideBar);
  //   window.addEventListener("load", hideSideBar);
  //   return () => {
  //     window.removeEventListener("beforeunload", hideSideBar);
  //     window.removeEventListener("load", hideSideBar);
  //   };
  // }, []);
  // const hideSideBar = (e) => {
   
  // };

  return (
    <div {...containerProps} onMouseLeave={handlePopoverClose}>
      <ListItem
        ref={parentRef}
        onMouseEnter={handlePopoverOpen}
        onClick={handleClick}
        style={{ position: 'relative' }}
        {...props}
        button
        disableRipple
      >
        {children}
        {!!childItems.length && (
          <Popper
            role={undefined}
            placement={popperPlacement}

            style={{
              zIndex: 10000,
            }}
            open={enableSubmenu && openMenu && firstName && lastName}
            anchorEl={parentRef.current}
            transition
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper className={classes.subMenuPaper}>
                  <ClickAwayListener onClickAway={handlePopoverClose}>
                    <MenuList className={classes.subMenu}>
                      {childItems.map(
                        ({ icon ,childrenItems=[], text, index, onClick, selected }) => (
                          <MenuItem
                            key={text}
                            containerProps={{
                              className: classes.menuItemContainer,
                            }}
                            component={undefined}
                            onClick={onClick}
                            childItems={!!childrenItems.length && childrenItems}
                            enableSubmenu={!!childrenItems.length}
                            className={classes.menuItem}
                            selected={selected}
                            popperPlacement={!!childrenItems.length && "right"}
                            button
                          >
                            {icon && (
                              <ListItemIcon className={classes.menuItemIcon}>
                                {icon}
                              </ListItemIcon>
                            )}
                            <ListItemText primary={text} data-key={index} />
                            {!!childrenItems.length && icon}
                          </MenuItem>
                        ),
                      )}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        )}
      </ListItem>
    </div>
  );
};
