import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	styledHeader: {
		position: 'relative',
		display: 'inline-block',
		padding: '0 20px 20px 20px',
		fontWeight: '300',
		'&:before': {
			content: '""',
			position: 'absolute',
			left: 0,
			bottom: 0,
			width: '100%',
			height: '2px',
			backgroundColor: theme.palette.secondary.main,
			transform: 'scaleX(0)',
			transition: `transform 2000ms ${theme.transitions.easing.easeInOut}`,
		},
		'&:after': {
			content: '""',
			position: 'absolute',
			left: '50%',
			bottom: '-5px',
			width: '7px',
			height: '7px',
			backgroundColor: theme.palette.secondary.main,
			outline: `2px solid ${theme.palette.secondary.main}`,
			outlineOffset: '2px',
			transform: 'rotate(45deg) translateX(-50%)',
		},
	},
}));

const AnimatedHeader = ({ inView, label }) => {
	const classes = useStyles();
	return (
		<Typography
			variant="h4"
			sx={{
				mb: 10,
				'&:before': {
					transform: inView ? 'scaleX(1)' : 'scaleX(0)',
				},
			}}
			className={classes.styledHeader}
		>
			{label}
		</Typography>
	);
};

AnimatedHeader.propTypes = {
	label: PropTypes.string.isRequired,
	inView: PropTypes.bool.isRequired,
};

export default AnimatedHeader;
