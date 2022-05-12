/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useInView } from 'react-intersection-observer';
import Gallery1 from '../../../assets/images/gallery1.jpg';
import Gallery2 from '../../../assets/images/gallery2.jpg';
import Gallery3 from '../../../assets/images/gallery3.jpg';
import Gallery4 from '../../../assets/images/gallery4.jpg';
import AnimatedHeader from '../../atoms/AnimatedHeader';

const useStyles = makeStyles((theme) => ({
	galleryGrid: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		gap: '20px',
	},

	styledHeader: {
		position: 'relative',
		display: 'inline-block',
		padding: '0 20px 20px 20px',
		'&:before': {
			content: '""',
			position: 'absolute',
			left: 0,
			bottom: 0,
			width: '100%',
			height: '2px',
			backgroundColor: theme.palette.secondary.main,
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

const Gallery = () => {
	const classes = useStyles();
	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	return (
		<Box sx={{ bgcolor: '#0D1315', padding: (theme) => theme.spacing(10) }} ref={ref}>
			<Box sx={{ p: 2, textAlign: 'center', width: '80%', mx: 'auto' }}>
				<Typography
					fontStyle="italic"
					fontWeight="bold"
					variant="h6"
					sx={{ color: (theme) => theme.palette.secondary.main, mb: 2 }}
				>
					Our Gallery
				</Typography>
				<AnimatedHeader inView={inView} label="Gallery" />

				<Box className={classes.galleryGrid}>
					<Box sx={{ gridColumn: { xs: '1 / -1', sm: '1 / span 2' }, bgcolor: 'red', gridRow: '1 / span 2' }}>
						<img src={Gallery1} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
					</Box>
					<Box sx={{ gridColumn: { xs: '1 / -1', sm: '3 / span 1' }, bgcolor: 'blue', gridRow: '1 / span 2' }}>
						<img src={Gallery2} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
					</Box>
					<Box sx={{ gridColumn: { xs: '1 / -1', sm: '4 / -1' }, bgcolor: 'white' }}>
						<img src={Gallery3} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
					</Box>
					<Box sx={{ gridColumn: { xs: '1 / -1', sm: '4 / -1' }, bgcolor: 'gray' }}>
						<img src={Gallery4} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
					</Box>
				</Box>

				<Box className={classes.button__container}>
					<Button className={classes.button}>View All Gallery</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Gallery;
