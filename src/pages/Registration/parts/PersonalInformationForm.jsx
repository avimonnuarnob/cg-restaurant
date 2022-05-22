import { Grid } from '@mui/material';
import TextInputField from '../../../components/molecules/TextInputField';

const PersonalInformationForm = (props) => {
	console.log('hello');

	const {
		formField: { firstName, lastName, phone },
	} = props;

	return (
		<fieldset style={{ border: 'none' }}>
			<Grid container spacing={2}>
				<Grid item md={6} sm={6} xs={6}>
					<TextInputField
						fullWidth
						isRequired
						label={firstName.label}
						name={firstName.name}
						// boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={lastName.label}
						name={lastName.name}
						// boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>

				<Grid item md={12} sm={12} xs={12}>
					<TextInputField
						fullWidth
						isRequired
						label={phone.label}
						name={phone.name}
						// boxStyles={{ paddingTop: '10px' }}
					/>
				</Grid>
			</Grid>
		</fieldset>
	);
};

export default PersonalInformationForm;
