/* eslint-disable no-unused-vars */
import { Box, Grid, Typography } from '@mui/material';
import TextInput from '../../../components/atoms/TextInput';

const FirstForm = (props) => {
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
						Give your basic information
					</Typography>
					<Typography sx={{ color: '#B2B7BA' }}>Given your information & go to next step</Typography>
				</Box>
				<Typography sx={{ color: 'secondary.main' }}>Step {step + 1} / 4</Typography>
			</Box>
			<fieldset style={{ border: 'none', padding: '0' }}>
				<Grid container spacing={2}>
					<Grid item md={12} sm={12} xs={12} autoComplete="off">
						<TextInput label={email.label} name={email.name} sx={{ mb: 2 }} />
					</Grid>
					<Grid item md={6} sm={6} xs={12}>
						<TextInput type="password" label={password.label} name={password.name} />
					</Grid>
					<Grid item md={6} sm={6} xs={12}>
						<TextInput type="password" label={confirmPassword.label} name={confirmPassword.name} />
					</Grid>
				</Grid>
			</fieldset>
		</Box>
	);
};

export default FirstForm;
