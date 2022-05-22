/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import {
	Alert,
	Box,
	Button,
	CircularProgress,
	Grid,
	Modal,
	Snackbar,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	// eslint-disable-next-line prettier/prettier
	Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useCallback, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Slide1Image from '../../assets/images/slide1image.jpg';
import AnimatedHeader from '../../components/atoms/AnimatedHeader';
import registrationFormInitialValues from './formModel/registrationFormInitialValues';
import registrationFormModel from './formModel/registrationFormModel';
import validationSchema from './formModel/validationSchema';
import FirstForm from './parts/FirstForm';
import FourthForm from './parts/FourthForm';
import SecondForm from './parts/SecondForm';
import ThirdForm from './parts/ThirdForm';

const REG_STEPS = [
	{
		label: 'Account Information',
		content: 'Setup your basic information',
	},
	{
		label: 'Personal Information',
		content: 'Setup your account settings',
	},
	{
		label: 'Document',
		content: 'Setup your document settings',
	},
	{
		label: 'OTP',
		content: 'Confirm your account',
	},
];
const { formId, formField } = registrationFormModel;

const style = {};

const useStyles = makeStyles((theme) => ({
	icon: {
		fill: `${theme.palette.secondary.main} !important`,
		borderRadius: 0,
	},
	color: {
		color: `${theme.palette.secondary.main} !important`,
	},

	headerSection: {
		background: `url(${Slide1Image}) no-repeat`,
		backgroundSize: 'cover',
		padding: theme.spacing(20, 10),
		textAlign: 'center',
		// position: 'relative',
	},
	regFormSection: {
		padding: theme.spacing(20, 10),
		backgroundColor: '#0D1315',
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

const RegistrationPage = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [error, setError] = useState(false);
	const { ref, inView } = useInView({
		threshold: 0.25,
	});

	const currentValidationSchema = validationSchema[activeStep];
	const isSecondLastStep = activeStep === REG_STEPS.length - 2;
	const isLastStep = activeStep === REG_STEPS.length - 1;

	const renderStepContent = useCallback((step) => {
		switch (step) {
			case 0:
				return <FirstForm formField={formField} step={step} />;
			case 1:
				return <SecondForm formField={formField} step={step} />;
			case 2:
				return <ThirdForm formField={formField} step={step} />;
			case 3:
				return <FourthForm formField={formField} step={step} setActiveStep={setActiveStep} />;
			default:
				return <div>Not Found</div>;
		}
	}, []);

	const finalSubmission = async (values, actions) => {
		const reqBody = {
			token: localStorage.getItem('msgVerificationToken'),
			mobileNumberVerificationCode: values.OTP,
		};
		try {
			const response = await axios.post('http://144.48.119.238:3000/api/v1/customer/phoneverification', reqBody);

			if (response.data.status) {
				setError('');
				setShowModal(true);
				setActiveStep(0);
				actions.resetForm();
				localStorage.removeItem('msgVerificationToken');
				actions.setTouched({});
			} else {
				setError(response.data.message);
			}
			actions.setSubmitting(false);
		} catch (e) {
			console.log(e);
			actions.setSubmitting(false);
		}
	};

	const handleSubmit = async (values, actions) => {
		if (isLastStep) {
			finalSubmission(values, actions);
		} else if (isSecondLastStep) {
			const reqBody = {
				name: [values.firstName, values.lastName].join(' '),
				mobileNumber: values.phone,
				email: values.email,
				password: values.password,
				photo: values.photo,
				identityImage: values.identityImage,
				selfieWithIDPhoto: values.selfieWithIDPhoto,
			};
			try {
				const response = await axios.post('http://144.48.119.238:3000/api/v1/customer/registration', reqBody);
				if (response.data.status) {
					setError('');
					localStorage.setItem('msgVerificationToken', response.data.data.token);
					setActiveStep(activeStep + 1);
					actions.setTouched({});
				} else {
					setError(response.data.message);
				}
				actions.setSubmitting(false);
			} catch (e) {
				console.log(e);
				actions.setSubmitting(false);
			}
		} else {
			setActiveStep(activeStep + 1);
			actions.setTouched({});
			actions.setSubmitting(false);
		}
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<>
			<section className={classes.headerSection}>
				<Typography variant="h1" fontWeight="bolder" className={[classes.slide__slogan, 'stroke-text'].join(' ')}>
					Registration
				</Typography>
			</section>
			<section className={classes.regFormSection}>
				<Box sx={{ textAlign: 'center' }} ref={ref}>
					<Typography sx={{ color: 'secondary.main' }} fontSize="small" fontStyle="italic">
						Create Information
					</Typography>
					<AnimatedHeader inView={inView} label="Join Us" />
				</Box>

				<Grid container columnSpacing={2}>
					{/* ===steper=== */}
					<Grid xs={12} sm={3} item sx={{ display: 'flex', alignItems: 'stretch' }}>
						<Box
							sx={{
								border: (theme) => `1px solid ${theme.palette.secondary.main}`,
								flex: 1,
								backgroundColor: '#121D20',
								p: 3,
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

					{/* ===form=== */}
					<Grid xs={12} sm={9} item>
						<Box sx={{ border: (theme) => `1px solid ${theme.palette.secondary.main}`, backgroundColor: '#121D20' }}>
							<Formik
								initialValues={registrationFormInitialValues}
								validationSchema={currentValidationSchema}
								onSubmit={handleSubmit}
							>
								{({ isSubmitting }) => (
									<Form id={formId}>
										{renderStepContent(activeStep)}

										<div className={classes.buttons}>
											<Box
												sx={{
													padding: (theme) => theme.spacing(2, 5),
													display: 'flex',
													justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end',
												}}
											>
												{activeStep !== 0 && (
													<Box className={classes.button__container}>
														<Button onClick={handleBack} className={classes.button} variant="contained" color="primary">
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
														endIcon={isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
														className={classes.button}
													>
														{isLastStep ? 'Submit' : 'Next'}
													</Button>
												</Box>
											</Box>
										</div>
									</Form>
								)}
							</Formik>
						</Box>
					</Grid>
				</Grid>
			</section>

			{/* ===success modal=== */}
			<Modal open={showModal} onClose={() => setShowModal(false)}>
				<Box className={classes.modal}>
					<Typography id="modal-modal-title" variant="h3" component="h2">
						Hello Mr./Mrs.
					</Typography>
					<Typography id="modal-modal-description" sx={{ my: 2 }}>
						Thank you for the Registration! We have received your registration form for Aandaz. You will get a
						confirmation notification from us within 72 hours. Till then stay tuned with Aandaz .
					</Typography>
					<Box className={classes.button__container}>
						<Button onClick={() => setShowModal(false)} className={classes.button} variant="contained" color="primary">
							Ok
						</Button>
					</Box>
				</Box>
			</Modal>

			{/* ===Error snackbar=== */}
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={!!error.length}
				autoHideDuration={3000}
				onClose={() => setError('')}
			>
				<Alert
					onClose={() => setError('')}
					severity="error"
					sx={{ width: '100%', bgcolor: '#c0392b', border: (theme) => `1px solid ${theme.palette.secondary.main}` }}
				>
					{error}
				</Alert>
			</Snackbar>
		</>
	);
};

export default RegistrationPage;
