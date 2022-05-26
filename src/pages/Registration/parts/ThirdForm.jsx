/* eslint-disable react/jsx-props-no-spreading */

import { Box, Grid, Typography } from '@mui/material';
import FileInput from '../../../components/atoms/FileInput';

const ThirdForm = (props) => {
	const {
		formField: { photo, identityImage, selfieWithIDPhoto },
		step,
	} = props;

	return (
		<Box sx={{ padding: (theme) => theme.spacing(5) }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
				<Box mb={4}>
					<Typography variant="h4" fontWeight="bold">
						Upload your document
					</Typography>
					<Typography sx={{ color: '#B2B7BA' }}>please upload your document & complete the registration. </Typography>
				</Box>
				<Typography sx={{ color: 'secondary.main' }}>Step {step + 1} / 4</Typography>
			</Box>
			<fieldset style={{ border: 'none', padding: '0' }}>
				<Grid container spacing={2}>
					<Grid item md={12} sm={12} xs={12} autoComplete="off">
						<FileInput required label={photo.label} name={photo.name} sx={{ mb: 2 }} />
					</Grid>
					<Grid item md={6} sm={6} xs={12} autoComplete="off">
						<FileInput required label={identityImage.label} name={identityImage.name} />
					</Grid>
					<Grid item md={6} sm={6} xs={12} autoComplete="off">
						<FileInput required label={selfieWithIDPhoto.label} name={selfieWithIDPhoto.name} />
					</Grid>
				</Grid>
			</fieldset>
		</Box>
	);
};

export default ThirdForm;
