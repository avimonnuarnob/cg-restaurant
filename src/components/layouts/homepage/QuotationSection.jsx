/* eslint-disable no-unused-vars */
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DJImage from '../../../assets/images/dj.jpg';
import Salmon from '../../../assets/images/salmon.jpg';
import QuoteSvg from '../../../assets/svgs/quote.svg';

const useStyles = makeStyles((theme) => ({
	section: {
		backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(13, 19, 21, 0.64) 0%, #0D1315 100%), url(${Salmon})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		padding: theme.spacing(2, 5),
		backgroundSize: 'cover',
	},
	quote: {
		flex: 1,
		position: 'relative',
		padding: theme.spacing(3, 4),
		border: `1px solid ${theme.palette.secondary.main}`,
	},
	quote__svg: {
		position: 'absolute',
		top: '-30px',
		backgroundColor: '#0D1315',
	},

	quote__profile: {
		display: 'flex',
		gap: 10,
		alignItems: 'center',
		padding: theme.spacing(3, 0, 0, 0),
		'& img': {
			width: '50px',
			height: '50px',
			borderRadius: '50%',
		},
	},
}));

const QuationSection = () => {
	const classes = useStyles();
	return (
		<Box sx={{ py: 10, border: '1px solid red' }} className={classes.section}>
			<Box>
				<Box sx={{ display: 'flex', width: '80%', mx: 'auto', gap: 3 }}>
					<Box sx={{ flex: 1.5 }}>
						<Typography sx={{ color: 'secondary.main', mb: 2 }}>GuestBook</Typography>
						<Typography variant="h3">Read Incredible Stories of Our Guests</Typography>
						<Box sx={{ py: 10 }}>
							<Button
								sx={{
									fontFamily: 'sans-serif',
									color: 'white',
									px: 1,
									py: 1,
									border: (theme) => `1px solid ${theme.palette.secondary.main}`,
									borderRadius: '0',
								}}
							>
								<Box sx={{ backgroundColor: '#121D20', px: 2, py: 1 }}>All Testimonial</Box>
							</Button>
						</Box>
					</Box>
					<Box className={classes.quote}>
						<img src={QuoteSvg} alt="hello" className={classes.quote__svg} />
						<Typography lineHeight="2rem" variant="h6" sx={{ letterSpacing: '2px' }}>
							“Because a restaurant’s story is never complete, there is always something new and wonderful to discover.
							An evening spent at Cityscape is like a ship sailing through night.”
						</Typography>

						<Box className={classes.quote__profile}>
							<img src={DJImage} alt="profile" />
							<Box>
								<Typography>Forhad Reza</Typography>
								<Typography>Client of Restaurant </Typography>
							</Box>
						</Box>
					</Box>
					<Box className={classes.quote}>
						<img src={QuoteSvg} alt="hello" className={classes.quote__svg} />
						<Typography lineHeight="2rem" variant="h6" sx={{ letterSpacing: '2px' }}>
							“Because a restaurant’s story is never complete, there is always something new and wonderful to discover.
							An evening spent at Cityscape is like a ship sailing through night.”
						</Typography>

						<Box className={classes.quote__profile}>
							<img src={DJImage} alt="profile" />
							<Box>
								<Typography>Forhad Reza</Typography>
								<Typography>Client of Restaurant </Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box sx={{ height: '20rem', bgcolor: 'aquamarine' }} />
		</Box>
	);
};

export default QuationSection;
