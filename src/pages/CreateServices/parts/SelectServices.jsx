import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid } from '@mui/material';
import { ErrorMessage, Field, useFormikContext } from 'formik';

const SelectServices = ({ services }) => {
	const { values } = useFormikContext();

	return (
		<Box>
			<FormControl sx={{ my: 3 }} component="fieldset" variant="standard">
				<FormLabel sx={{ color: 'secondary.main' }}>Select your services</FormLabel>
				<Grid container>
					<Grid xs={6} item>
						<FormGroup label="Hello">
							{services.slice(0, Math.ceil(services.length / 2)).map((el) => (
								<Field
									key={el.id}
									as={FormControlLabel}
									type="checkbox"
									name="services"
									value={el.id}
									control={
										<Checkbox
											sx={{
												color: 'secondary.main',
												'&.Mui-checked': {
													color: 'secondary.main',
												},
											}}
											checked={values.services.includes(el.id)}
										/>
									}
									label={el.title}
								/>
							))}
						</FormGroup>
					</Grid>
					<Grid xs={6} item>
						<FormGroup>
							{services.slice(Math.ceil(services.length / 2)).map((el) => (
								<Field
									key={el.id}
									as={FormControlLabel}
									type="checkbox"
									name="services"
									value={el.id}
									control={
										<Checkbox
											sx={{
												color: 'secondary.main',
												'&.Mui-checked': {
													color: 'secondary.main',
												},
											}}
											checked={values.services.includes(el.id)}
										/>
									}
									label={el.title}
								/>
							))}
						</FormGroup>
					</Grid>
				</Grid>
				<ErrorMessage name="services" />
			</FormControl>
		</Box>
	);
};

export default SelectServices;
