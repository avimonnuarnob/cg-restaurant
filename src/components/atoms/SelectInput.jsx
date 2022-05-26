/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { FormControl, InputLabel, MenuItem, Select, SvgIcon } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

const CustomSelectComponent = ({
	field, // { name, value, onChange, onBlur }
	form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
	children,
	...props
}) => {
	console.log('blah', props);
	const { name, value } = field;
	return (
		<Select
			name={name}
			value={value}
			{...props}
			onChange={(e) => {
				setFieldValue(name, e.target.value);
			}}
		>
			{children}
		</Select>
	);
};

const SelectInput = ({ name, options, ...props }) => (
	<FormControl variant="outlined" fullWidth>
		<InputLabel id="demo-simple-select-helper-label" sx={{ '&.Mui-focused': { color: 'secondary.main' } }}>
			{props.label}
		</InputLabel>

		<Field name={name} component={CustomSelectComponent} {...props}>
			<MenuItem value="">
				<em>NONE</em>
			</MenuItem>
			{options?.map((option) => (
				<MenuItem key={option?.id} value={option?.value}>
					{option?.icon ? <SvgIcon sx={{ color: 'white' }}>{option.icon}</SvgIcon> : null}
					{option?.label}
				</MenuItem>
			))}
		</Field>
		<ErrorMessage name={name}>{(msg) => <span style={{ color: 'red' }}>{msg}</span>}</ErrorMessage>
	</FormControl>
);

export default SelectInput;
