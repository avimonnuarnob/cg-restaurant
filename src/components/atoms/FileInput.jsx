/* eslint-disable react/jsx-props-no-spreading */
import { Box, FormControl, FormHelperText, TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

const CustomFileUpload = (props) => {
	const { field, form, label } = props;

	const handleChange = async (e) => {
		const file = e.currentTarget.files[0];
		const reader = new FileReader();

		reader.readAsDataURL(file);
		let base64String;

		console.log(e);

		reader.onload = (event) => {
			base64String = event.target?.result;
			// eslint-disable-next-line prefer-destructuring
			base64String = base64String.split('image/jpeg;base64,')[1];
			form.setFieldValue(field.name, base64String);
		};
	};

	return (
		<TextField
			label={label}
			fullWidth
			type="file"
			onChange={(o) => handleChange(o)}
			InputLabelProps={{ shrink: true }}
		/>
	);
};

const FileInput = ({ name, sx = {}, ...props }) => (
	<Box sx={sx} autoComplete="off">
		<FormControl variant="outlined" fullWidth>
			<Field name={name} component={CustomFileUpload} {...props} />
			<FormHelperText>File size: Max 1MB, High Resulation: Min 300 DPI</FormHelperText>
			<ErrorMessage name={name}>{(msg) => <span style={{ color: '#c0392b' }}>{msg}</span>}</ErrorMessage>
		</FormControl>
	</Box>
);

export default FileInput;
