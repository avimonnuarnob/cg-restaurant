/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

const renderOptions = (options) =>
	options.map((option) => (
		<FormControlLabel
			key={option}
			value={option}
			control={
				<Radio
					sx={{
						'& span': {
							color: 'secondary.main',
						},
					}}
				/>
			}
			label={option}
		/>
	));

const FormikRadioGroup = ({ field, form: { touched, errors }, name, options, children, ...props }) => {
	const fieldName = name || field.name;

	return (
		<>
			<FormLabel
				id="demo-row-radio-buttons-group-label"
				sx={{ color: 'secondary.main', '&.Mui-focused': { color: 'secondary.main' } }}
			>
				{props.label}
			</FormLabel>
			<RadioGroup row {...field} {...props} name={fieldName}>
				{/* Here you either map over the props and render radios from them,
         or just render the children if you're using the function as a child */}
				{options ? renderOptions(options) : children}
			</RadioGroup>
		</>
	);
};

const RadioInput = ({ name, options, ...props }) => (
	<Box autoComplete="off">
		<FormControl variant="outlined" fullWidth>
			<Field name={name} options={options} component={FormikRadioGroup} {...props} />
			<ErrorMessage name={name}>{(msg) => <span style={{ color: 'red' }}>{msg}</span>}</ErrorMessage>
		</FormControl>
	</Box>
);

export default RadioInput;
