/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, FormControl, TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

const CustomInputComponent = ({
	field, // { name, value, onChange, onBlur }
	form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
	...props
}) => <TextField autoComplete="off" {...field} {...props} />;

const TextInput = ({ name, ...props }) => (
	<Box autoComplete="off">
		<FormControl variant="outlined" fullWidth>
			<Field name={name} component={CustomInputComponent} {...props} />
			<ErrorMessage name={name}>{(msg) => <span style={{ color: '#c0392b' }}>{msg}</span>}</ErrorMessage>
		</FormControl>
	</Box>
);

export default TextInput;
