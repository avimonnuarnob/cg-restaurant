/* eslint-disable react/jsx-props-no-spreading */
import EditIcon from '@mui/icons-material/Edit';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import OTPInput from 'otp-input-react';

const FourthForm = ({ step, setActiveStep }) => {
	const { values, setFieldValue, errors, touched } = useFormikContext();
	console.log(values);

	return (
		<Box sx={{ padding: (theme) => theme.spacing(5) }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
				<Box mb={4}>
					<Typography variant="h4" fontWeight="bold">
						Verify your number
					</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<Typography>Enter the 6 digit PIN sent to: </Typography>
						<Box sx={{ color: 'secondary.main', display: 'flex', alignItems: 'center' }}>
							<Typography>{values.phone}</Typography>
							<IconButton onClick={() => setActiveStep(1)}>
								<EditIcon />
							</IconButton>
						</Box>
					</Box>
				</Box>
				<Typography sx={{ color: 'secondary.main' }}>Step {step + 1} / 4</Typography>
			</Box>
			<fieldset style={{ border: 'none', padding: '0' }}>
				<Grid container spacing={2}>
					<Grid item md={12} sm={12} xs={12}>
						{/* <TextInput label={firstName.label} name={firstName.name} /> */}
						<OTPInput
							inputStyles={{
								width: '50px',
								height: '50px',
								backgroundColor: '#1C272B',
								border: 0,
								borderRadius: '5px',
								color: 'white',
							}}
							value={values.OTP}
							onChange={(otp) => setFieldValue('OTP', otp)}
							autoFocus
							OTPLength={6}
							otpType="number"
							disabled={false}
						/>
						{touched.OTP && errors.OTP ? <p>{errors.OTP}</p> : null}
					</Grid>
				</Grid>
			</fieldset>
		</Box>
	);
};

export default FourthForm;
