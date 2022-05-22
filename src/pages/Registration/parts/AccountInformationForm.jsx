import { Grid } from '@mui/material';
import RadioInput from '../../../components/atoms/RadioInput';
import SelectInput from '../../../components/atoms/SelectInput';
import TextInput from '../../../components/atoms/TextInput';

const selectItemsArray = [
	{
		id: '1',
		label: '2 persons',
		value: '2',
	},
	{
		id: '2',
		label: '4 persons',
		value: '4',
	},
	{
		id: '3',
		label: '8 persons',
		value: '8',
	},
];

const options = ['Yes', 'No', 'Maybe'];

const AccountInfromationForm = (props) => {
	const {
		formField: { email, password, confirmPassword },
	} = props;

	return (
		<fieldset style={{ border: 'none' }}>
			<Grid container spacing={2}>
				<Grid item md={12} sm={12} xs={12}>
					<TextInput label={email.label} name={email.name} />
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<TextInput type="password" label={password.label} name={password.name} />
				</Grid>

				<Grid item md={6} sm={6} xs={12} autoComplete="off">
					<TextInput type="password" label={confirmPassword.label} name={confirmPassword.name} />
				</Grid>
				<Grid item md={6} sm={6} xs={12}>
					<SelectInput label="blah" name="firstName" options={selectItemsArray} />
				</Grid>
				<Grid item md={6} sm={6} xs={12}>
					<RadioInput label="Hello" name="blah" options={options} />
				</Grid>
			</Grid>
		</fieldset>
	);
};

export default AccountInfromationForm;
