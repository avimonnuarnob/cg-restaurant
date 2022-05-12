import { Box, Button, Typography } from '@mui/material';
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

	menuSection: {
		padding: theme.spacing(15),
		backgroundImage: `url(${PastaImage})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
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

				<Box className={classes.button__container}>
					<Button className={classes.button}>View More</Button>
				</Box>
			</Box>
		</section>
	);
};

export default MenuSection;
