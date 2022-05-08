import { Box, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import DateInputField from '../../molecules/DateInputField';
import SelectInputField from '../../molecules/SelectInputField';
import TextInputField from '../../molecules/TextInputField';

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

const useStyles = makeStyles((theme) => ({
	button: {
		borderRadius: '0 !important',
		backgroundColor: `${theme.palette.secondary.main} !important`,
		color: 'black !important',

		'&:hover': {
			backgroundColor: 'white !important',
		},
	},
}));

const MakeReserveSection = () => {
	const classes = useStyles();

	const onSubmitHandler = (data) => {
		console.log(data);
	};

	return (
		<Box sx={{ bgcolor: '#0D1315', textAlign: 'center' }}>
			<Box sx={{ width: '70%', bgcolor: '#121D20', mx: 'auto', p: 5 }}>
				<Typography variant="h5" color="secondary.main" fontWeight="bold">
					Make a Reserve
				</Typography>

				<Formik
					initialValues={{
						name: '',
						phone: '',
						persons: '',
					}}
					onSubmit={onSubmitHandler}
					enableReinitialize
				>
					{() => (
						<Form>
							<Box sx={{ bgcolor: '#121D20' }}>
								<fieldset style={{ border: 'none' }}>
									<Grid container spacing={2}>
										<Grid item md={6} sm={6} xs={12}>
											<TextInputField fullWidth isRequired label="Your Name" name="name" />
										</Grid>
										<Grid item md={6} sm={6} xs={12}>
											<TextInputField fullWidth isRequired label="Your Phone" name="phone" />
										</Grid>
										<Grid item md={4} sm={4} xs={12}>
											<SelectInputField
												items={selectItemsArray}
												fullWidth
												isRequired
												label="Number of Persons"
												name="persons"
												boxStyles={{ py: 2 }}
											/>
										</Grid>
										<Grid item md={4} sm={4} xs={12}>
											<DateInputField
												type="date"
												label="Reservation Date"
												fullWidth
												name="date"
												boxStyles={{ py: 2 }}
											/>
										</Grid>
										<Grid item md={4} sm={4} xs={12}>
											<DateInputField
												type="time"
												label="Reservation Time"
												fullWidth
												name="time"
												boxStyles={{ py: 2 }}
											/>
										</Grid>
									</Grid>
								</fieldset>
							</Box>
							<Box sx={{ my: 4 }}>
								<Button type="submit" variant="contained" className={classes.button}>
									Book A Table
								</Button>
							</Box>
						</Form>
					)}
				</Formik>

				<Typography>
					<Typography variant="span" color="secondary.main">
						Hotline Number:
					</Typography>{' '}
					+88013 24 24 9090
				</Typography>
			</Box>
		</Box>
	);
};

export default MakeReserveSection;
