/* eslint-disable no-unused-vars */
import {
	Box,
	Grid,
	// eslint-disable-next-line prettier/prettier
	Typography
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import DateInputField from '../../molecules/DateInputField';
import SelectInputField from '../../molecules/SelectInputField';
import TextInputField from '../../molecules/TextInputField';

const selectItemsArray = [
	{
		id: '1',
		label: '2 persons',
		value: 2,
	},
	{
		id: '2',
		label: '4 persons',
		value: 4,
	},
	{
		id: '1',
		label: '8 persons',
		value: 8,
	},
];

const MakeReserveSection = () => {
	const [date, setDate] = useState(null);
	const [time, setTime] = useState(null);

	return (
		<Box sx={{ bgcolor: '#0D1315', py: 20, textAlign: 'center' }}>
			<Box sx={{ width: '80%', bgcolor: '#121D20', mx: 'auto', p: 3 }}>
				<Typography variant="h5">Make a Reserve</Typography>

				{/* <Box component="form" noValidate autoComplete="off">
					<Grid container spacing={2}>
						<Grid item md={6} sm={6} xs={12} sx={{ p: 4 }}>
							<TextInputField
								fullWidth
								isRequired
								label="Your Name"
								name="email"
								boxStyles={{ padding: '15px 0 30px 0' }}
							/>
						</Grid>

						<Grid item md={6} sm={6} xs={12}>
							<TextField id="phoneNo" label="Your Phone" required variant="standard" fullWidth />
						</Grid>
						<Grid item md={4} sm={4} xs={12}>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label" />

								<NativeSelect
									fullWidth
									defaultValue={30}
									inputProps={{
										name: 'age',
										id: 'uncontrolled-native',
									}}
								>
									<option value={10}>Ten</option>
									<option value={20}>Twenty</option>
									<option value={30}>Thirty</option>
								</NativeSelect>
							</FormControl>
						</Grid>
						<Grid item md={4} sm={4} xs={12}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<DatePicker
									label="Basic example"
									value={date}
									onChange={(newValue) => {
										setDate(newValue);
									}}
									// eslint-disable-next-line react/jsx-props-no-spreading
									renderInput={(params) => <TextField {...params} variant="standard" fullWidth />}
								/>
							</LocalizationProvider>
						</Grid>
						<Grid item md={4} sm={4} xs={12}>
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<TimePicker
									label="Basic example"
									value={time}
									onChange={(newValue) => {
										setTime(newValue);
									}}
									// eslint-disable-next-line react/jsx-props-no-spreading
									renderInput={(params) => <TextField {...params} variant="standard" fullWidth />}
								/>
							</LocalizationProvider>
						</Grid>
					</Grid>
				</Box> */}

				<Formik
					initialValues={{
						name: '',
						phone: '',
					}}
					onSubmit={() => {}}
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
						</Form>
					)}
				</Formik>
			</Box>
		</Box>
	);
};

export default MakeReserveSection;
