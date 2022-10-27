import { makeStyles } from '@mui/styles';
import { createStyles } from '@mui/styles';
import { adColors } from '../theme/common';
import { FontWeights } from '../theme/common/typography';
import { createTheme} from '@mui/material/styles';

const theme = createTheme();
export const useSidebarStyles = makeStyles(() => {
  const drawerWidth = 350;

  return createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      overflow: 'visible',
      transition: ({ openTransitionDuration }) =>
        theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: openTransitionDuration,
        }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflow: 'hidden',
      width: 80,
    },
    toolbar: {
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(2),
    },
    toggle: {
      padding: theme.spacing(1),
    },
    icon: {
      marginLeft: 6,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    mainItems: {
      flex: 1,
    },
    menuItemContainer: {
      width: '100%',
      boxSizing: 'border-box',
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      '&:not(:last-child)': {
        paddingBottom: theme.spacing(2),
      },
    },
    menuItem: {
      borderRadius: 4,
      padding: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        '&:not(:last-child)': {
          marginBottom: theme.spacing(2),
        },
      },
      '& .MuiListItemText-root': {
        marginTop: 0,
        marginBottom: 0,
        whiteSpace: 'nowrap',
        '& .MuiTypography-root': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
      '&.Mui-selected': {
        backgroundColor: adColors.marble,
      },
      '& .MuiSvgIcon-root': {
        fill: theme.palette.common.black,
      },
      '&:hover': {
        backgroundColor: adColors.deepMarble,
      },
      '&:hover, &.Mui-selected': {
        '& .MuiSvgIcon-root': {
          fill: adColors.red,
        },
        '& .MuiListItemText-root .MuiTypography-root': {
          color: adColors.red,
        },
        '& .MuiSvgIcon-root [fill]': {
          fill: `${adColors.red} !important`,
        },
      },
    },
    menuItemIcon: {
      minWidth: 0,
      marginRight: 16,
    },
    upperLevelMenuItemText: {
      fontSize: theme.typography.body1.fontSize,
      opacity: ({ open }) => (open ? 1 : 0),
      '& .MuiTypography-root': {
        fontWeight: FontWeights.semiBold,
      },
    },
    subMenuPaper: {
      borderRadius: 8,
    },
    subMenu: {
      minWidth: 296,
    },
    userAvatar: {
      width: 28,
      height: 28,
    },
    floatingMenu: {
      minWidth: 235,
      '& li': {
        fontFamily: 'Aktifo-A',
        fontSize: 16,
        fontWeight: 600,
      },
      '& li:hover': {
        backgroundColor: '#f8f8f8',
        color: '#e31f26',
      },
      '& li svg': {
        marginLeft: 'auto',
      },
    },
  });
});
