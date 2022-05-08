import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import StoreItems from './parts/StoreItems';

const useStyles = makeStyles(() => ({
	store: {},
	store_header: {
		padding: '50px 20px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	store_items: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

const StorePage = () => {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.store_header}>
				<Box sx={{ maxWidth: 800, textAlign: { sm: 'center', md: 'left' } }}>
					<Typography variant="h2">NFT STORE</Typography>
				</Box>

				<Box sx={{ maxWidth: 800, textAlign: { sm: 'center', md: 'left' } }}>
					<Typography variant="h5" fontWeight="300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore alias unde similique aliquam libero!
						unde similique aliquam libero! unde similiqu.
					</Typography>
				</Box>
			</Box>

			<StoreItems />
		</>
	);
};

export default StorePage;
