import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useInView } from 'react-intersection-observer';
import BlogImageOne from '../../../assets/images/blogImageOne.jpg';
import PastaImage from '../../../assets/images/pasta.jpg';
import AnimatedHeader from '../../atoms/AnimatedHeader';
import AbsoluteBorderedBackground from '../AbsoluteBorderedBackGround';

const useStyles = makeStyles((theme) => ({
	blogSection: {
		// backgroundColor: '#0D1315',
		// padding: theme.spacing(15),
		textAlign: 'center',
	},
	card: {},
	card__button: {
		backgroundColor: 'transparent',
		border: `1px solid ${theme.palette.secondary.main} !important`,
	},
	card__icon: {
		color: theme.palette.secondary.main,
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

const BlogSection = () => {
	const classes = useStyles();
	const { ref, inView } = useInView({
		threshold: 1,
	});

	return (
		<section className={classes.blogSection}>
			<AbsoluteBorderedBackground />
			<Box sx={{ position: 'relative', padding: (theme) => theme.spacing(15) }}>
				<Box ref={ref}>
					<Typography
						fontStyle="italic"
						fontWeight="bold"
						variant="h6"
						sx={{ color: (theme) => theme.palette.secondary.main, mb: 2 }}
					>
						Our Blog
					</Typography>

					<AnimatedHeader inView={inView} label="Be First Who Read News" />
				</Box>

				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 5, mx: 'auto', width: '90%' }}>
					<Box
						textAlign="left"
						sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 320px', bgcolor: '#121D20' }}
					>
						<Box sx={{ flex: 2 }}>
							<img src={PastaImage} alt="blogImageOne" width="100%" height="100%" />
						</Box>
						<Box sx={{ padding: 3, flex: 1, bgcolor: '#121D20' }}>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
								<Typography color="secondary.main">September 20, 2022</Typography>
								<Box
									sx={{
										bgcolor: 'secondary.main',
										width: '10px',
										height: '10px',
										borderRadius: '2px',
										transform: 'rotate(45deg)',
									}}
								/>
								<Typography color="secondary.main">Recipes</Typography>
							</Box>
							<Typography variant="h5">Sushi Time: 10 Tips How to make it at home</Typography>
							<Box
								sx={{
									position: 'relative',
									mt: 2,
									display: 'flex',
									justifyContent: 'flex-end',
									'&:after': {
										position: 'absolute',
										content: '""',
										width: '30%',
										height: '1px',
										top: '50%',
										transform: 'translateY(-50%)',
										left: 0,
										bgcolor: 'secondary.main',
									},
								}}
							>
								<IconButton variant="outlined" sx={{ ml: 'auto' }} aria-label="delete" className={classes.card__button}>
									<ArrowForwardOutlinedIcon className={classes.card__icon} />
								</IconButton>
							</Box>
						</Box>
					</Box>

					<Box textAlign="left" sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 320px' }}>
						<Box sx={{ flex: 2 }}>
							<img src={BlogImageOne} alt="blogImageOne" width="100%" height="100%" />
						</Box>
						<Box sx={{ padding: 3, flex: 1, bgcolor: '#121D20' }}>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
								<Typography color="secondary.main">September 20, 2022</Typography>
								<Box
									sx={{
										bgcolor: 'secondary.main',
										width: '10px',
										height: '10px',
										borderRadius: '2px',
										transform: 'rotate(45deg)',
									}}
								/>
								<Typography color="secondary.main">Recipes</Typography>
							</Box>
							<Typography variant="h5">Sushi Time: 10 Tips How to make it at home</Typography>
							<Box
								sx={{
									position: 'relative',
									mt: 2,
									display: 'flex',
									justifyContent: 'flex-end',
									'&:after': {
										position: 'absolute',
										content: '""',
										width: '30%',
										height: '1px',
										top: '50%',
										transform: 'translateY(-50%)',
										left: 0,
										bgcolor: 'secondary.main',
									},
								}}
							>
								<IconButton variant="outlined" sx={{ ml: 'auto' }} aria-label="delete" className={classes.card__button}>
									<ArrowForwardOutlinedIcon className={classes.card__icon} />
								</IconButton>
							</Box>
						</Box>
					</Box>

					<Box textAlign="left" sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 320px' }}>
						<Box sx={{ flex: 2 }}>
							<img src={BlogImageOne} alt="blogImageOne" width="100%" height="100%" />
						</Box>
						<Box sx={{ padding: 3, flex: 1, bgcolor: '#121D20' }}>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
								<Typography color="secondary.main">September 20, 2022</Typography>
								<Box
									sx={{
										bgcolor: 'secondary.main',
										width: '10px',
										height: '10px',
										borderRadius: '2px',
										transform: 'rotate(45deg)',
									}}
								/>
								<Typography color="secondary.main">Recipes</Typography>
							</Box>
							<Typography variant="h5">Sushi Time: 10 Tips How to make it at home</Typography>
							<Box
								sx={{
									position: 'relative',
									mt: 2,
									display: 'flex',
									justifyContent: 'flex-end',
									'&:after': {
										position: 'absolute',
										content: '""',
										width: '30%',
										height: '1px',
										top: '50%',
										transform: 'translateY(-50%)',
										left: 0,
										bgcolor: 'secondary.main',
									},
								}}
							>
								<IconButton variant="outlined" sx={{ ml: 'auto' }} aria-label="delete" className={classes.card__button}>
									<ArrowForwardOutlinedIcon className={classes.card__icon} />
								</IconButton>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box className={classes.button__container}>
					<Button className={classes.button}>View All New</Button>
				</Box>
			</Box>
		</section>
	);
};

export default BlogSection;
