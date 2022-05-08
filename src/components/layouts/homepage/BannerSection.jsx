/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Slider from 'react-slick';
import Slide1Image from '../../../assets/images/slide1image.jpg';
import ZigZag from '../../../assets/svgs/zigZag.svg';

const useStyles = makeStyles((theme) => ({
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
		fontSize: '6.875rem !important',
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
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
	dotsClass: 'slick-dots slick-thumb',
	appendDots: (dots) => <ul>{dots}</ul>,
	customPaging: (i) => <a>{i + 1}</a>,
};

const BannerSection = () => {
	const classes = useStyles();
	return (
		<div>
			<Slider {...settings}>
				<Box className={classes.slide}>
					<Typography color="secondary.main" fontWeight="bold" variant="h5" sx={{ letterSpacing: '0.25rem' }}>
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
				</Box>

				<Box className={classes.slide}>
					<Typography color="secondary.main" fontWeight="bold" variant="h5" sx={{ letterSpacing: '0.25rem' }}>
						welcome to our delicious corner
					</Typography>
					<Typography fontWeight="bolder" className={[classes.slide__slogan, 'stroke-text'].join(' ')}>
						THE BEST DISHES
					</Typography>
					<Typography>
						We have a proper passion for cooking. Love is the secret ingredient that makes all our meals taste better
						and magical.
					</Typography>
				</Box>

				<Box className={classes.slide}>
					<Typography color="secondary.main" fontWeight="bold" variant="h5" sx={{ letterSpacing: '0.25rem' }}>
						welcome to our delicious corner
					</Typography>
					<Typography fontWeight="bolder" className={[classes.slide__slogan, 'stroke-text'].join(' ')}>
						THE BEST DISHES
					</Typography>
					<Typography>
						We have a proper passion for cooking. Love is the secret ingredient that makes all our meals taste better
						and magical.
					</Typography>
				</Box>
			</Slider>
		</div>
	);
};

export default BannerSection;
