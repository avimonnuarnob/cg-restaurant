import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DecorSvg from '../../assets/svgs/DecorSvg';

const useStyles = makeStyles(() => ({
	decor: {
		display: 'inline !important',
		position: 'absolute',
		top: '50%',
		transformOrigin: 'center left',
	},

	'@keyframes eltdfDrawDecor': {
		from: {
			strokeDashoffset: 57,
			strokeDasharray: 57,
		},

		to: {
			strokeDashoffset: 0,
			strokeDasharray: 57,
		},
	},
}));

const Decor = ({ sx }) => {
	const classes = useStyles();

	return (
		<Box className={classes.decor} sx={sx}>
			<DecorSvg />
		</Box>
	);
};

export default Decor;
