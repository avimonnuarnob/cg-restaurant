import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MapImage from '../../../assets/images/map.png';

const useStyles = makeStyles(() => ({
	section: {
		// padding: theme.spacing(10),
		height: '30rem',
		position: 'relative',
	},
}));

const MapView = () => {
	const classes = useStyles();

	return (
		<section className={classes.section}>
			<FmdGoodIcon
				sx={{
					position: 'absolute',
					color: 'secondary.main',
					top: '50%',
					left: '50%',
					fontSize: '3rem',
					transform: 'translate(-50%, -50%)',
				}}
			/>
			<img src={MapImage} alt="hello" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
			<Box
				sx={{
					width: '19rem',
					p: 2,
					bgcolor: 'secondary.main',
					position: 'absolute',
					bottom: '2rem',
					right: '2rem',
					borderRadius: '5px',
				}}
			>
				<Box sx={{ display: 'flex', gap: 2, color: '#121D20', mb: 2 }}>
					<FmdGoodIcon />
					<Typography>Cityscape Tower, 8th Floor, 53 Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh.</Typography>
				</Box>
				<Box sx={{ display: 'flex', gap: 2, color: '#121D20', mb: 2 }}>
					<LocalPhoneIcon />
					<Typography>+88013 24 24 9090</Typography>
				</Box>
				<Box sx={{ display: 'flex', gap: 2, color: '#121D20' }}>
					<EmailIcon />
					<Typography>info@cityscapeglobal.net</Typography>
				</Box>
			</Box>
		</section>
	);
};

export default MapView;
