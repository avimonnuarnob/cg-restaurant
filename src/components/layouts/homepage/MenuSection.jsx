import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PastaImage from '../../../assets/images/pasta.jpg';

const FAKE_DATA = [
	{
		menu_name: 'Raw Scallops from Erquy',
		menu_item: 'Candied Jerusalem artichokes, truffle',
		menu_price: '৳509',
	},
	{
		menu_name: 'Sea Bass Ceviche',
		menu_item: 'Avocado, buttemut, lime',
		menu_price: '৳509',
	},
	{
		menu_name: 'Tender Octopus and Fennel',
		menu_item: 'Citrus, wid rocket condiment',
		menu_price: '৳509',
	},
	{
		menu_name: 'Thinly Sliced Brittany Artichokes',
		menu_item: 'Purslane, truffle',
		menu_price: '৳509',
	},
];

const useStyles = makeStyles((theme) => ({
	menuSection: {
		padding: theme.spacing(15),
		backgroundImage: `url(${PastaImage})`,
	},
}));

const MenuSection = () => {
	const classes = useStyles();

	return (
		<section className={classes.menuSection}>
			<Box sx={{ width: '40%', ml: 'auto' }}>
				<Typography sx={{ mb: 2 }} color="secondary.main" fontStyle="italic">
					From Our Menu
				</Typography>
				<Typography sx={{ mb: 4 }} variant="h4">
					Try Our Daily Offers
				</Typography>

				{FAKE_DATA.map((menu) => (
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 2 }} key={menu.menu_name}>
						<Box>
							<Typography fontWeight="bold" variant="h6">
								{menu.menu_name}
							</Typography>
							<Typography variant="body2" color="#878586">
								{menu.menu_item}
							</Typography>
						</Box>
						<Box sx={{ height: '1px', bgcolor: 'secondary.main', flex: 1 }} />
						<Typography fontWeight="bold" color="secondary.main" variant="h6">
							{menu.menu_price}
						</Typography>
					</Box>
				))}
			</Box>
		</section>
	);
};

export default MenuSection;
