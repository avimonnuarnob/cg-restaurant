import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useInView } from 'react-intersection-observer';
import BlogImageOne from '../../../assets/images/blogImageOne.jpg';
import PastaImage from '../../../assets/images/pasta.jpg';
import AnimatedHeader from '../../atoms/AnimatedHeader';

const useStyles = makeStyles((theme) => ({
	blogSection: {
		backgroundColor: '#0D1315',
		padding: theme.spacing(15),
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
}));

const BlogSection = () => {
	const classes = useStyles();
	const { ref, inView } = useInView({
		threshold: 1,
	});

	return (
		<section className={classes.blogSection}>
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

			<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 5, mx: 'auto' }}>
				<Box textAlign="left" sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 320px', bgcolor: '#121D20' }}>
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

			<Box sx={{ pt: 10 }}>
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
					<Box sx={{ backgroundColor: '#121D20', px: 2, py: 1 }}>View All New</Box>
				</Button>
			</Box>
		</section>
	);
};

export default BlogSection;
