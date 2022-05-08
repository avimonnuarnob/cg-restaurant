/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slider from 'react-slick';
import ClubImage from '../../../assets/images/club.jpg';
import BarIcon from '../../../assets/svgs/BarIcon';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	dotsClass: 'slick-dots slick-thumb',
	appendDots: (dots) => <ul style={{ bottom: '-50px', textAlign: 'left' }}>{dots}</ul>,
	customPaging: (i) => <div style={{ textAlign: 'center' }}>{i + 1}</div>,
};

const useStyles = makeStyles((theme) => ({
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
	section: {
		backgroundColor: 'white',
		backgroundImage: `radial-gradient(49.36% 44.13% at 27.95% 61.4%, rgba(13, 19, 21, 0) 0%, #0D1315 100%) , url(${ClubImage})`,
		backgroundRepeat: 'no-repeat',
		padding: theme.spacing(15),
		textAlign: 'center',
	},
}));

const AboutSection = () => {
	const classes = useStyles();

	return (
		<section className={classes.section}>
			<Box>
				<BarIcon />
			</Box>
			<Typography variant="h4" sx={{ mb: 10 }} className={classes.styledHeader}>
				About Our club
			</Typography>

			<Box sx={{ width: '40%', ml: 'auto' }}>
				<Slider {...settings}>
					<Box textAlign="left">
						<Typography variant="h5" sx={{ mb: 4 }}>
							We serve the premiums
						</Typography>
						<Typography>
							Cetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco la boris nisi ut aliquip ex ea commodo consequat. Duis
							aute irure dolor in reprehenderit quis nostrud exercitation ullamco laboris nisi ut aliquip exea. Qute
							irure dolor in reprehenderit quis nostrud\r\rexercitation ullamco laboris nisi ut aliquip ex ea commod
							ouis nostrud exerceo la boris nisi ut aliquip ex ea commodo consequat.
						</Typography>
					</Box>
					<Box textAlign="left">
						<Typography variant="h5" sx={{ mb: 4 }}>
							We serve the premiums
						</Typography>
						<Typography>
							Cetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco la boris nisi ut aliquip ex ea commodo consequat. Duis
							aute irure dolor in reprehenderit quis nostrud exercitation ullamco laboris nisi ut aliquip exea. Qute
							irure dolor in reprehenderit quis nostrud\r\rexercitation ullamco laboris nisi ut aliquip ex ea commod
							ouis nostrud exerceo la boris nisi ut aliquip ex ea commodo consequat.
						</Typography>
					</Box>
					<Box textAlign="left">
						<Typography variant="h5" sx={{ mb: 4 }}>
							We serve the premiums
						</Typography>
						<Typography>
							Cetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco la boris nisi ut aliquip ex ea commodo consequat. Duis
							aute irure dolor in reprehenderit quis nostrud exercitation ullamco laboris nisi ut aliquip exea. Qute
							irure dolor in reprehenderit quis nostrud\r\rexercitation ullamco laboris nisi ut aliquip ex ea commod
							ouis nostrud exerceo la boris nisi ut aliquip ex ea commodo consequat.
						</Typography>
					</Box>
				</Slider>
			</Box>
		</section>
	);
};

export default AboutSection;
