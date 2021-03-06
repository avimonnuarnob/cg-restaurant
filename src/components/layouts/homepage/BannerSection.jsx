/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slider from 'react-slick';
import Slide1Image from '../../../assets/images/slide1image.jpg';
import ZigZag from '../../../assets/svgs/zigZag.svg';
import Decor from '../../atoms/Decor';

const useStyles = makeStyles((theme) => ({
	button: {
		color: '#fff !important',
		backgroundImage: `linear-gradient(90deg, #121D20 0%,#121D20 50%,${theme.palette.secondary.main} 50%,${theme.palette.secondary.main} 100%)`,
		backgroundSize: '200%',
		transition: 'background-position .3s cubic-bezier(.47, .1, 1, .63), color .2s linear !important',
		transitionDelay: '0.0s, 0.15s !important',
		borderRadius: '0 !important',
		padding: `${theme.spacing(1, 3)} !important`,
		outline: `1px solid ${theme.palette.secondary.main} !important`,
		outlineOffset: '10px',
		'&:hover': {
			color: '#272838 !important',
			backgroundPosition: '-100% 100%',
		},
	},
	slide: {
		background: `url(${Slide1Image}) no-repeat`,
		backgroundSize: 'cover',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(30, 10),
		textAlign: 'center',
	},
	slide__slogan: {
		letterSpacing: '1.25rem !important',
		// fontSize: '6.875rem !important',
		fontFamily: 'open_sanscondensed !important',
	},
	'slide__slogan--logo': {
		display: 'inline !important',
		position: 'absolute',
		top: '50%',
		transformOrigin: 'center left',
	},
	'slide__arrow--next': {
		width: 11,
		height: 29,
		transform: 'rotate(45deg)',
		borderTop: `1px solid ${theme.palette.secondary.main}`,
		borderRight: `1px solid ${theme.palette.secondary.main}`,
	},
	'slide__arrow--prev': {
		width: 11,
		height: 29,
		transform: 'rotate(45deg)',
		borderLeft: `1px solid ${theme.palette.secondary.main}`,
		borderBottom: `1px solid ${theme.palette.secondary.main}`,
	},
}));

const SampleNextArrow = (props) => {
	const classes = useStyles();
	const { className, style, onClick } = props;
	// return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
	return (
		<Box
			style={{ ...style }}
			className={[className, classes['slide__arrow--next']].join(' ')}
			sx={{ width: 20, height: 20 }}
			onClick={onClick}
		/>
	);
};

const SamplePrevArrow = (props) => {
	const classes = useStyles();
	const { className, style, onClick } = props;
	// return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
	return (
		<Box
			style={{ ...style }}
			className={[className, classes['slide__arrow--prev']].join(' ')}
			sx={{ width: 20, height: 20 }}
			onClick={onClick}
		/>
	);
};

const settings = {
	dots: true,
	// infinite: true,
	// autoplay: true,
	speed: 2000,
	autoplaySpeed: 2000,
	cssEase: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
	dotsClass: 'slick-dots slick-thumb',
	appendDots: (dots) => <ul>{dots}</ul>,
	customPaging: (i) => <a>{i + 1}</a>,
	adaptiveHeight: true,
};

const BannerSection = () => {
	const classes = useStyles();

	return (
		<section>
			<Slider {...settings}>
				<Box className={classes.slide}>
					<Typography
						color="secondary.main"
						fontWeight="bold"
						variant="h5"
						sx={{ letterSpacing: '0.25rem', fontFamily: 'open_sanscondensed' }}
					>
						welcome to our delicious corner
					</Typography>

					<Box sx={{ position: 'relative', display: 'inline-block' }}>
						{/* <img
							src={ZigZag}
							alt="React Logo"
							className={classes['slide__slogan--logo']}
							style={{ transform: 'rotate(180deg)', left: '-10px' }}
						/> */}

						<Decor sx={{ transform: 'translateY(-50%) rotate(180deg)', left: '-10px' }} />
						<Typography variant="h1" fontWeight="bolder" className={[classes.slide__slogan, 'stroke-text'].join(' ')}>
							Own The Royality
						</Typography>
						<Decor sx={{ transform: 'translateY(-50%)', left: '100%' }} />
					</Box>

					<Typography sx={{ letterSpacing: '0.25rem', margin: 'auto' }} width="50%">
						We have a proper passion for cooking. Love is the secret ingredient that makes all our meals taste better
						and magical.
					</Typography>

					<Box sx={{ mt: 10 }}>
						<Button className={classes.button}>View More</Button>
					</Box>
				</Box>

				<Box className={classes.slide}>
					<Typography
						color="secondary.main"
						fontWeight="bold"
						variant="h5"
						sx={{ letterSpacing: '0.25rem', fontFamily: 'open_sanscondensed' }}
					>
						welcome to our delicious corner
					</Typography>

					<Box sx={{ position: 'relative', display: 'inline-block' }}>
						<img
							src={ZigZag}
							alt="React Logo"
							className={classes['slide__slogan--logo']}
							style={{ transform: 'rotate(180deg)', left: '-10px' }}
						/>
						<Typography variant="h1" fontWeight="bolder" className={[classes.slide__slogan, 'stroke-text'].join(' ')}>
							THE BEST DISHES
						</Typography>
						<img src={ZigZag} alt="React Logo" className={classes['slide__slogan--logo']} style={{ left: '100%' }} />
					</Box>

					<Typography sx={{ letterSpacing: '0.25rem', margin: 'auto' }} width="50%">
						We have a proper passion for cooking. Love is the secret ingredient that makes all our meals taste better
						and magical.
					</Typography>

					<Box sx={{ mt: 10 }}>
						<Button className={classes.button}>View More</Button>
					</Box>
				</Box>

				<Box className={classes.slide}>
					<Typography
						color="secondary.main"
						fontWeight="bold"
						variant="h5"
						sx={{ letterSpacing: '0.25rem', fontFamily: 'open_sanscondensed' }}
					>
						welcome to our delicious corner
					</Typography>

					<Box sx={{ position: 'relative', display: 'inline-block' }}>
						<img
							src={ZigZag}
							alt="React Logo"
							className={classes['slide__slogan--logo']}
							style={{ transform: 'rotate(180deg)', left: '-10px' }}
						/>
						<Typography variant="h1" fontWeight="bolder" className={[classes.slide__slogan, 'stroke-text'].join(' ')}>
							THE BEST DISHES
						</Typography>
						<img src={ZigZag} alt="React Logo" className={classes['slide__slogan--logo']} style={{ left: '100%' }} />
					</Box>

					<Typography sx={{ letterSpacing: '0.25rem', margin: 'auto' }} width="50%">
						We have a proper passion for cooking. Love is the secret ingredient that makes all our meals taste better
						and magical.
					</Typography>

					<Box sx={{ mt: 10 }}>
						<Button className={classes.button}>View More</Button>
					</Box>
				</Box>
			</Slider>
		</section>
	);
};

export default BannerSection;
