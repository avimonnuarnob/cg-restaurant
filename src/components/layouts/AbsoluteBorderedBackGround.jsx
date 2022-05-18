import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles((theme) => ({
	blurredBorder: {
		transition: `transform 2000ms ${theme.transitions.easing.easeInOut}`,
		transformOrigin: 'top',
		borderRight: () => `1px solid #21221e`,
	},
}));

// make sure to give position relative to parent
const AbsoluteBorderedBackground = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	const classes = useStyles();
	return (
		<Box sx={{ position: 'absolute', top: '0', height: '100%', bgcolor: '#0D1315', width: '100%' }} ref={ref}>
			<Box sx={{ height: '100%' }}>
				<Grid container sx={{ height: '100%' }}>
					<Grid item xs={1} sx={{ borderRight: (theme) => `0px solid ${theme.palette.secondary.main}` }} />

					<Grid item xs={10}>
						<Grid container sx={{ height: '100%' }}>
							<Grid
								item
								xs={2}
								sx={{ transform: inView ? 'scaleY(1)' : 'scaleY(0)' }}
								className={classes.blurredBorder}
							/>
							<Grid
								item
								xs={2}
								sx={{ transform: inView ? 'scaleY(1)' : 'scaleY(0)' }}
								className={classes.blurredBorder}
							/>
							<Grid
								item
								xs={2}
								sx={{ transform: inView ? 'scaleY(1)' : 'scaleY(0)' }}
								className={classes.blurredBorder}
							/>
							<Grid
								item
								xs={2}
								sx={{ transform: inView ? 'scaleY(1)' : 'scaleY(0)' }}
								className={classes.blurredBorder}
							/>
							<Grid
								item
								xs={2}
								sx={{ transform: inView ? 'scaleY(1)' : 'scaleY(0)' }}
								className={classes.blurredBorder}
							/>
						</Grid>
					</Grid>

					<Grid item xs={1} sx={{ borderLeft: (theme) => `0px solid ${theme.palette.secondary.main}` }} />
				</Grid>
			</Box>
		</Box>
	);
};

export default AbsoluteBorderedBackground;
