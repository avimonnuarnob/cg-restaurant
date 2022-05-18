/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import AboutUsSvg from '../../../assets/svgs/AboutUsSvg';
import BarIcon from '../../../assets/svgs/BarIcon';
import AnimatedHeader from '../../atoms/AnimatedHeader';
import AbsoluteBorderedBackground from '../AbsoluteBorderedBackGround';

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
		position: 'relative',
		// backgroundImage: `linear-gradient(to right, rgba(50, 70, 80, 0.7), #C4AC86), url(${ClubImage})`,
		// backgroundRepeat: 'no-repeat',
		// padding: theme.spacing(15),
		overflow: 'hidden',
		textAlign: 'center',
		'&:after': {
			// position: 'absolute',
			// content: '""',
			// // backgroundImage: `url(${ClubImage})`,
			// width: '100%',
			// height: '100%',
			// top: 0,
			// bottom: 0,
			// left: 0,
			// right: 0,
			// backgroundAttachment: 'fixed',
			// backgroundSize: 'cover',
			// opacity: '0.2',
		},
		'& > *': {
			position: 'relative',
			zIndex: '100',
		},
	},
}));

const AboutSection = () => {
	const classes = useStyles();
	const { ref, inView } = useInView({
		threshold: 0.25,
	});

	return (
		<section className={classes.section} ref={ref}>
			<AbsoluteBorderedBackground />
			<Box sx={{ position: 'absolute', top: '-20%', left: 10 }}>
				<AboutUsSvg />
			</Box>
			<Box sx={{ padding: (theme) => theme.spacing(15) }}>
				<Box>
					<BarIcon sx={{ display: 'block' }} />
				</Box>
				<AnimatedHeader inView={inView} label="About Our club" />
				<Box>
					<Box sx={{ width: '70%', mx: 'auto', mb: 10 }}>
						<Slider {...settings}>
							<Box>
								<Typography variant="h4" color="secondary.main" fontWeight="bold" sx={{ mb: 4 }}>
									We serve the premiums
								</Typography>
								<Typography lineHeight="2rem" variant="h6">
									Cetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
									minim veniam, quis nostrud exercitation ullamco la boris nisi ut aliquip ex ea commodo consequat. Duis
									aute irure dolor in reprehenderit quis nostrud exercitation ullamco laboris nisi ut aliquip exea. Qute
									irure dolor in reprehenderit quis nostrud\r\rexercitation ullamco laboris nisi ut aliquip ex ea commod
									ouis nostrud exerceo la boris nisi ut aliquip ex ea commodo consequat.
								</Typography>
							</Box>

							<Box>
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
							<Box>
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
				</Box>
			</Box>
		</section>
	);
};

export default AboutSection;
