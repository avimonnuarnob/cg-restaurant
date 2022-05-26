import { Box, FormControl } from '@mui/material';
import RadioInput from '../../../components/atoms/RadioInput';

const options = ['1 Day', '7 Days', '30 Days'];

const SelectTimeRange = () => (
	<Box>
		<FormControl sx={{ my: 3 }} component="fieldset" variant="standard">
			<RadioInput options={options} name="days" label="How many days you want the service for: " />
		</FormControl>
	</Box>
);

export default SelectTimeRange;
