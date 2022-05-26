/* eslint-disable no-unused-vars */
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DJImage from '../../../assets/images/dj.jpg';
import Salmon from '../../../assets/images/salmon.jpg';
import QuationSvg from '../../../assets/svgs/QuationSvg';
import QuoteSvg from '../../../assets/svgs/quote.svg';

const useStyles = makeStyles((theme) => ({
	section: {
		backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(13, 19, 21, 0.64) 0%, #0D1315 100%), url(${Salmon})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		padding: theme.spacing(15, 5),
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

	button: {
		color: '#fff !important',
		backgroundImage: `linear-gradient(90deg, #121D20 0%,#121D20 50%,${theme.palette.secondary.main} 50%,${theme.palette.secondary.main} 100%)`,
		backgroundSize: '200%',
		transition: 'background-position .3s cubic-bezier(.47, .1, 1, .63), color .2s linear !important',
		transitionDelay: '0.0s, 0.15s !important',
		borderRadius: '0 !important',
		padding: `${theme.spacing(1, 3)} !important`,
		// outline: `1px solid ${theme.palette.secondary.main} !important`,
		outlineOffset: '10px',
		'&:hover': {
			color: '#272838 !important',
			backgroundPosition: '-100% 100%',
		},
	},
	button__container: {
		margin: theme.spacing(5, 0),
		border: `1px solid ${theme.palette.secondary.main}`,
		display: 'inline-block',
		padding: theme.spacing(1),
	},
}));

const QuationSection = () => {
	const classes = useStyles();
	return (
		<Box className={classes.section}>
			<Box>
				<Box sx={{ display: 'flex', width: '80%', mx: 'auto', gap: 3 }}>
					<Box sx={{ flex: 1.5 }}>
						<Typography sx={{ color: 'secondary.main', mb: 2 }}>GuestBook</Typography>
						<Typography variant="h3">Read Incredible Stories of Our Guests</Typography>
						<Box className={classes.button__container}>
							<Button className={classes.button}>All Testimonial</Button>
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

			<Box sx={{ pt: 10, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
				<QuationSvg />
				<Typography variant="h3" sx={{ width: '70%', mx: 'auto', textAlign: 'center', mt: 3 }}>
					Teste & Feel the Spirit of Sea. Quality of Michelin.
				</Typography>
			</Box>
		</Box>
	);
};

export default QuationSection;
