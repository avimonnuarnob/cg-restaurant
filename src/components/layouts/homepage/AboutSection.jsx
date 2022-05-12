/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import BarIcon from '../../../assets/svgs/BarIcon';
import AnimatedHeader from '../../atoms/AnimatedHeader';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	dotsClass: 'slick-dots slick-thumb',
	appendDots: (dots) => <ul style={{ bottom: '-50px' }}>{dots}</ul>,
	customPaging: (i) => <div style={{ textAlign: 'center' }}>{i + 1}</div>,
};

const useStyles = makeStyles((theme) => ({
	section: {
		backgroundColor: '#0D1315',
		// backgroundImage: `radial-gradient(49.36% 44.13% at 27.95% 61.4%, rgba(13, 19, 21, 0) 0%, #0D1315 100%) , url(${ClubImage})`,
		backgroundRepeat: 'no-repeat',
		padding: theme.spacing(15, 15, 20, 15),
		textAlign: 'center',

		// border: `10px solid ${theme.pallete.secondary.main}`,
	},
}));

const AboutSection = () => {
	const classes = useStyles();
	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	return (
		<section className={classes.section} ref={ref}>
			<Box>
				<BarIcon />
			</Box>

			<AnimatedHeader inView={inView} label="About Our club" />

			<Box sx={{ width: '80%', mx: 'auto' }}>
				<Slider {...settings}>
					<Box>
						<Typography variant="h4" color="secondary.main" fontWeight="bold" sx={{ mb: 4 }}>
							We serve the premiums
						</Typography>
						<Typography lineHeight="2rem">
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
