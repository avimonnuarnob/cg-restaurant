import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Box, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CrabImage from '../../../assets/images/crab.jpg';
import FishImage from '../../../assets/images/fish.jpg';
import LobstarImage from '../../../assets/images/lobstar.jpg';
import RoundSvg from '../../../assets/svgs/RoundSvg';
import AnimatedHeader from '../../atoms/AnimatedHeader';
import AbsoluteBorderedBackground from '../AbsoluteBorderedBackGround';

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
	sevricesSection: {
		// padding: theme.spacing(15),
		// backgroundColor: '#0D1315',
		textAlign: 'center',
		position: 'relative',
		overflow: 'hidden',
	},

	card: {
		textAlign: 'left',
		backgroundSize: 'contain',
		paddingTop: theme.spacing(10),
		backgroundRepeat: 'no-repeat',

		flex: '1 1 160px',
	},
	card__number: {
		fontFamily: 'sans-serif !important',
		marginBottom: theme.spacing(1),
		color: theme.palette.secondary.main,
	},
	card__header: {
		fontFamily: 'sans-serif !importnat',
		marginBottom: `${theme.spacing(1)} !important`,
		fontSize: '1.25rem !important',
		fontWeight: 'bold !important',
	},
	card__detail: {
		fontFamily: 'sans-serif !important',
		lineHeight: '1.875rem !important',
		color: '#B2B7BA',
	},
	card__button: {
		backgroundColor: 'transparent',
		border: `1px solid ${theme.palette.secondary.main} !important`,
	},
	card__icon: {
		color: theme.palette.secondary.main,
	},
}));

const OurServicesSection = () => {
	const classes = useStyles();
	const { ref, inView } = useInView({
		threshold: 1,
	});

	return (
		<section className={classes.sevricesSection}>
			<AbsoluteBorderedBackground />
			<Box sx={{ position: 'absolute', bottom: '-20%', left: 0 }}>
				<RoundSvg />
			</Box>
			<Box sx={{ padding: (theme) => theme.spacing(15), position: 'relative' }}>
				<Box ref={ref}>
					<Typography
						fontStyle="italic"
						fontWeight="bold"
						variant="h6"
						sx={{ color: (theme) => theme.palette.secondary.main, mb: 2 }}
					>
						Get to know
					</Typography>
					<AnimatedHeader inView={inView} label="Our Services" />
				</Box>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 15, width: '70%', mx: 'auto' }}>
					<Box
						component={motion.div}
						animate={{ y: 10 }}
						transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
						sx={{ backgroundImage: `url(${LobstarImage})` }}
						className={classes.card}
					>
						<span className={classes.card__number}>01</span>
						<Typography className={classes.card__header}>Fresh Products</Typography>
						<Typography className={classes.card__detail}>
							Fishes, shellfishes and crustaceans of our local fishermen. Vegetables from our garden.
						</Typography>
						<Box sx={{ py: 5 }}>
							<IconButton variant="outlined" aria-label="delete" className={classes.card__button}>
								<ArrowForwardOutlinedIcon className={classes.card__icon} />
							</IconButton>
						</Box>
					</Box>

					<Box
						component={motion.div}
						animate={{ y: -10 }}
						transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
						sx={{ backgroundImage: `url(${CrabImage})` }}
						className={classes.card}
					>
						<span className={classes.card__number}>02</span>
						<Typography className={classes.card__header}>Fresh Products</Typography>
						<Typography className={classes.card__detail}>
							Fishes, shellfishes and crustaceans of our local fishermen. Vegetables from our garden.
						</Typography>
						<Box sx={{ py: 5 }}>
							<IconButton variant="outlined" aria-label="delete" className={classes.card__button}>
								<ArrowForwardOutlinedIcon className={classes.card__icon} />
							</IconButton>
						</Box>
					</Box>

					<Box
						component={motion.div}
						animate={{ y: 10 }}
						transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
						sx={{ backgroundImage: `url(${FishImage})` }}
						className={classes.card}
					>
						<span className={classes.card__number}>03</span>
						<Typography className={classes.card__header}>Fresh Products</Typography>
						<Typography className={classes.card__detail}>
							Fishes, shellfishes and crustaceans of our local fishermen. Vegetables from our garden.
						</Typography>
						<Box sx={{ py: 5 }}>
							<IconButton variant="outlined" aria-label="delete" className={classes.card__button}>
								<ArrowForwardOutlinedIcon className={classes.card__icon} />
							</IconButton>
						</Box>
					</Box>
				</Box>
			</Box>
		</section>
	);
};

export default OurServicesSection;
