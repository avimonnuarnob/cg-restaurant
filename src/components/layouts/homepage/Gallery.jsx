/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Gallery1 from '../../../assets/images/gallery1.jpg';
import Gallery2 from '../../../assets/images/gallery2.jpg';
import Gallery3 from '../../../assets/images/gallery3.jpg';
import Gallery4 from '../../../assets/images/gallery4.jpg';

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
}));

const Gallery = () => {
	const classes = useStyles();

	return (
		<Box sx={{ bgcolor: '#0D1315' }}>
			<Box sx={{ p: 2, textAlign: 'center', width: '80%', mx: 'auto' }}>
				<Typography
					fontStyle="italic"
					fontWeight="bold"
					variant="h6"
					sx={{ color: (theme) => theme.palette.secondary.main, mb: 2 }}
				>
					Our Gallery
				</Typography>
				<Typography fontFamily="sans-serif" variant="h4" sx={{ mb: 10 }} className={classes.styledHeader}>
					Gallery
				</Typography>
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
						<Box sx={{ backgroundColor: '#121D20', px: 2, py: 1 }}>View all gallery</Box>
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Gallery;
