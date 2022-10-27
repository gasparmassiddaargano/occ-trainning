import { makeStyles } from '@mui/styles';
import { createTheme} from '@mui/material/styles';

const theme = createTheme();
export const useMobileSidebarStyles = makeStyles(() => ({
	backButton: {
		padding: 0,
		height: 'auto',
		minWidth: 0,
		display: 'flex',
		alignItems: 'flex-end',
	},
	mobileDrawerToolbar: {
		padding: theme.spacing(2, 1.5, 1.5),
	}
}));