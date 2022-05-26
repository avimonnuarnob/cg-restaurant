/* eslint-disable no-unused-vars */
import { Box, Grid, Typography } from '@mui/material';
import TextInput from '../../../components/atoms/TextInput';

const SecondForm = (props) => {
	const {
		formField: {
			firstName,
			lastName,
			phone,
			photo,
			identityImage,
			selfieWithIDPhoto,
			password,
			confirmPassword,
			email,
		},
		step,
	} = props;

	return (
		<Box sx={{ padding: (theme) => theme.spacing(5) }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
				<Box mb={4}>
					<Typography variant="h4" fontWeight="bold">
						Give your personal information
					</Typography>
					<Typography sx={{ color: '#B2B7BA' }}>Given your information & go to next step</Typography>
				</Box>
				<Typography sx={{ color: 'secondary.main' }}>Step {step + 1} / 4</Typography>
			</Box>
			<fieldset style={{ border: 'none', padding: '0' }}>
				<Grid container spacing={2}>
					<Grid item md={6} sm={6} xs={12}>
						<TextInput required label={firstName.label} name={firstName.name} />
					</Grid>
					<Grid item md={6} sm={6} xs={12}>
						<TextInput required label={lastName.label} name={lastName.name} />
					</Grid>
					<Grid item md={12} sm={12} xs={12} autoComplete="off">
						<TextInput required label={phone.label} name={phone.name} sx={{ my: 2 }} />
					</Grid>
				</Grid>
			</fieldset>
		</Box>
	);
};

export default SecondForm;
