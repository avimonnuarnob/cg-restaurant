/* eslint-disable no-unused-vars */
import { FormControl, Grid, TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';
import TextInput from '../../../components/atoms/TextInput';

const CustomFileUpload = (props) => {
	const { field, form } = props;

	const handleChange = async (e) => {
		const file = e.currentTarget.files[0];
		const reader = new FileReader();

		reader.readAsDataURL(file);
		let base64String;

		reader.onload = await function (event) {
			base64String = event.target?.result;
			form.setFieldValue(field.name, base64String);
		};
	};

	return (
		<div>
			<FormControl fullWidth>
				<TextField fullWidth type="file" onChange={(o) => handleChange(o)} className="form-control" />
				<ErrorMessage name={field.name} />
			</FormControl>
		</div>
	);
};

const DocumentInformationForm = (props) => {
	const {
		formField: { photo, identityImage, selfieWithIDPhoto },
	} = props;

	return (
		<fieldset style={{ border: 'none' }}>
			<Grid container spacing={2}>
				<Grid item md={6} sm={6} xs={6}>
					<TextInput label="hello" name={photo.name} />
				</Grid>
				<Grid item md={6} sm={6} xs={6}>
					<Field name={photo.name} component={CustomFileUpload} />
				</Grid>

				<Grid item md={6} sm={6} xs={12}>
					<Field name={identityImage.name} component={CustomFileUpload} />
				</Grid>

				<Grid item md={12} sm={12} xs={12}>
					<Field name={selfieWithIDPhoto.name} component={CustomFileUpload} />
				</Grid>
				<Grid item md={6} sm={6} xs={6}>
					<TextInput type="number" label="hello" name={photo.name} />
				</Grid>
			</Grid>
		</fieldset>
	);
};

export default DocumentInformationForm;
