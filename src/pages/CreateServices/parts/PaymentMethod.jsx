import { FormControl, Grid, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import FileInput from '../../../components/atoms/FileInput';
import RadioInput from '../../../components/atoms/RadioInput';
import SelectInput from '../../../components/atoms/SelectInput';

const options = ['Bank Deposit', 'Online Payment'];
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

const PaymentMethod = () => {
	const { values } = useFormikContext();

	return (
		<FormControl fullWidth sx={{}} component="fieldset" variant="standard">
			<Grid container spacing={2}>
				<Grid xs={12} item>
					<Typography>Payable Amount</Typography>
					<Typography>{values.amout} BDT</Typography>
				</Grid>
				<Grid xs={12} item>
					<RadioInput options={options} name="paymentMethod" label="Select Payment Method: " />
				</Grid>
				<Grid xs={12} item>
					<SelectInput label="Select Bank" name="bankName" options={selectItemsArray} />
				</Grid>
				<Grid item md={12} sm={12} xs={12} autoComplete="off">
					<FileInput required label="Upload Bank Deposit Slip" name="bankDepositSlip" sx={{ mb: 2 }} />
				</Grid>
			</Grid>
		</FormControl>
	);
};

export default PaymentMethod;
