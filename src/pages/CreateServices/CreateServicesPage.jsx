/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { Box, Button, CircularProgress, Grid, Step, StepContent, StepLabel, Stepper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { sleep } from '../../utils/functions';
import customMembershipFormInitialValues from './formModel/customMembershipFormInitialValues';
import validationSchema from './formModel/validationSchema';
import PaymentMethod from './parts/PaymentMethod';
import SelectServices from './parts/SelectServices';
import SelectServiceType from './parts/SelectServiceType';
import SelectTimeRange from './parts/SelectTimeRange';

// const options = ['one', 'two', 'three'];

const REG_STEPS = [
	{
		label: 'Services',
		content: 'Choose your services',
	},
	{
		label: 'Time Date',
		content: 'Setup your time settings',
	},
	{
		label: 'Service Type',
		content: 'Setup your service type',
	},
	{
		label: 'Payment',
		content: 'Confirm your payment',
	},
];

const SERVICES = [
	{
		id: '1',
		serviceName: 'SPA',
	},
	{
		id: '2',
		serviceName: 'GYM',
	},
	{
		id: '3',
		serviceName: 'MEETING',
	},
	{
		id: '4',
		serviceName: 'KID ZONE',
	},
];

const DAYS = [
	{
		id: '11',
		value: '1 Day',
		unit: '1D',
	},
	{
		id: '12',
		value: '7 Day',
		unit: '7D',
	},
	{
		id: '13',
		value: '30 Day',
		unit: '30D',
	},
];

const SERVICE_TYPE = [
	{
		id: '1',
		type: 'gold',
	},
	{
		id: '2',
		type: 'silver',
	},
	{
		id: '3',
		type: 'platinum',
	},
];

const useStyles = makeStyles((theme) => ({
	icon: {
		fill: `${theme.palette.secondary.main} !important`,
		borderRadius: 0,
	},
	color: {
		color: `${theme.palette.secondary.main} !important`,
	},

	button: {
		color: '#fff !important',
		backgroundImage: `linear-gradient(90deg, #121D20 0%,#121D20 50%,${theme.palette.secondary.main} 50%,${theme.palette.secondary.main} 100%)`,
		backgroundSize: '200%',
		transition: 'background-position .3s cubic-bezier(.47, .1, 1, .63), color .2s linear !important',
		transitionDelay: '0.0s, 0.15s !important',
		borderRadius: '0 !important',
		padding: `${theme.spacing(0.5, 3)} !important`,
		'&:hover': {
			color: '#272838 !important',
			backgroundPosition: '-100% 100%',
		},
	},
	button__container: {
		border: `1px solid ${theme.palette.secondary.main}`,
		display: 'inline-block',
		padding: theme.spacing(0.5),
	},
	modal: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		backgroundColor: '#121D20',
		border: '2px solid #000',
		boxShadow: 24,
		padding: theme.spacing(4),
		textAlign: 'center',
	},
}));

const CreateServicesPage = () => {
	const classes = useStyles();
	const [services, setServices] = useState([]);
	const [days, setDays] = useState('');
	const [serviceType, setServiceType] = useState('');
	const [open, setOpen] = useState(false);
	const [activeStep, setActiveStep] = useState(0);
	const [loading, setLoading] = useState(false);
	const currentValidationSchema = validationSchema[activeStep];

	const isLastStep = activeStep === REG_STEPS.length - 1;
	const isSecondLastStep = activeStep === REG_STEPS.length - 2;

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			await sleep(2000);
			const servicesData = [
				{
					id: '1c8744d0-0409-4613-866c-f4d507a411db',
					title: 'Kid Zone',
				},
				{
					id: '9eebec6d-9f7d-428f-9906-b5101b6561e8',
					title: 'Spa',
				},
				{
					id: 'ce8fef3d-441a-4e29-aa78-698dfc84ea40',
					title: 'Meeting',
				},
				{
					id: '914f731d-dbfd-4fec-b10c-9c34c6f60d5a',
					title: 'Restaurant',
				},
				{
					id: '9b0177b4-5081-4b28-9e1a-c83295991db1',
					title: 'Gym',
				},
			];
			setServices(servicesData.map((el) => ({ ...el, checked: false })));
			setLoading(false);
		};
		fetchData();
	}, []);

	const handleSubmit = async (values, actions) => {
		if (isSecondLastStep) {
			setLoading(true);
			await sleep(2000);
			actions.setFieldValue('amout', 5000);
			setLoading(false);
		}

		console.log(values);
		console.log(actions);
		setActiveStep(activeStep + 1);
	};

	const renderStepContent = useCallback(
		(step) => {
			switch (step) {
				case 0:
					return <SelectServices services={services} />;
				case 1:
					return <SelectTimeRange />;
				case 2:
					return <SelectServiceType />;
				case 3:
					return <PaymentMethod />;
				default:
					return <div>Not Found</div>;
			}
		},
		[services]
	);

	return (
		<Box className="Hello">
			<Box sx={{ mx: 'auto', px: 2, py: 5 }}>
				<Grid container spacing={2}>
					<Grid xs={12} sm={3} item sx={{ height: 'auto' }}>
						<Box
							sx={{
								border: (theme) => `1px solid ${theme.palette.secondary.main}`,
								flex: 1,
								backgroundColor: '#121D20',
								p: 3,
								height: '100%',
							}}
						>
							<Stepper activeStep={activeStep} orientation="vertical">
								{REG_STEPS.map((step) => {
									const stepProps = {};
									const labelProps = {};

									return (
										<Step key={step.label} {...stepProps} sx={{ borderRadius: 0 }}>
											<StepLabel
												sx={{
													'& .MuiStepLabel-label': {
														fontSize: '1.25rem',
														'&.Mui-active': {
															color: (theme) => theme.palette.secondary.main,
														},
														'&.Mui-completed': {
															color: (theme) => theme.palette.secondary.main,
														},
													},
												}}
												{...labelProps}
												StepIconProps={{ classes: { active: classes.icon, completed: classes.icon } }}
											>
												{step.label}
											</StepLabel>
											<StepContent>{step.content}</StepContent>
										</Step>
									);
								})}
							</Stepper>
						</Box>
					</Grid>
					<Grid xs={12} sm={9} item sx={{ height: 'auto' }}>
						<Box
							sx={{
								border: (theme) => `1px solid ${theme.palette.secondary.main}`,
								flex: 1,
								p: 3,
								height: '100%',
							}}
						>
							<Formik
								enableReinitialize
								initialValues={customMembershipFormInitialValues}
								validationSchema={currentValidationSchema}
								onSubmit={handleSubmit}
							>
								{({ isSubmitting }) => (
									<Form style={{ height: '100%' }}>
										<Box
											sx={{
												display: 'flex',
												flexDirection: 'column',
												height: '100%',
											}}
										>
											{!loading ? renderStepContent(activeStep) : 'Loading...'}
											<div className={classes.buttons}>
												<Box
													sx={{
														padding: (theme) => theme.spacing(2, 0),
														display: 'flex',
														justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end',
													}}
												>
													{activeStep !== 0 && (
														<Box className={classes.button__container}>
															<Button
																onClick={() => setActiveStep(activeStep - 1)}
																className={classes.button}
																variant="contained"
																color="primary"
															>
																Back
															</Button>
														</Box>
													)}

													<Box className={classes.button__container}>
														<Button
															disabled={isSubmitting}
															type="submit"
															variant="contained"
															color="primary"
															endIcon={
																isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />
															}
															className={classes.button}
														>
															{isLastStep ? 'Submit' : 'Next'}
														</Button>
													</Box>
												</Box>
											</div>
										</Box>
									</Form>
								)}
							</Formik>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default CreateServicesPage;
