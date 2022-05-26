import { Box, FormControl } from '@mui/material';
import RadioInput from '../../../components/atoms/RadioInput';

const options = ['Silver', 'Gold', 'Platinum'];

const SelectServiceType = () => (
	<Box>
		<FormControl sx={{ my: 3 }} component="fieldset" variant="standard">
			<RadioInput options={options} name="serviceType" label="Select your prefered service type: " />
		</FormControl>
	</Box>
);

export default SelectServiceType;
