/* eslint-disable no-unused-vars */
import * as Yup from 'yup';
import registrationFormModel from './registrationFormModel';

const {
	formField: {
		firstName,
		lastName,
		email,
		password,
		confirmPassword,
		photo,
		identityImage,
		selfieWithIDPhoto,
		phone,
		OTP,
	},
} = registrationFormModel;

export default [
	Yup.object().shape({
		[email.name]: Yup.string().email().required(`${email.requiredErrorMsg}`),
		[password.name]: Yup.string().required(`${password.requiredErrorMsg}`).min(6, 'Password too short'),
		[confirmPassword.name]: Yup.string()
			.required('Please retype your password.')
			.oneOf([Yup.ref('password'), null], `${confirmPassword.requiredErrorMsg}`),
	}),
	Yup.object().shape({
		[firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
		[lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
		[phone.name]: Yup.string().required(`${phone.requiredErrorMsg}`),
	}),
	Yup.object().shape({
		[firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
		[lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
		[phone.name]: Yup.string().required(`${phone.requiredErrorMsg}`),
		[photo.name]: Yup.mixed().required(`${photo.requiredErrorMsg}`),
		[identityImage.name]: Yup.mixed().required(`${identityImage.requiredErrorMsg}`),
		[selfieWithIDPhoto.name]: Yup.mixed().required(`${selfieWithIDPhoto.requiredErrorMsg}`),
	}),
	Yup.object().shape({
		[OTP.name]: Yup.string().required(`${OTP.requiredErrorMsg}`).min(6, 'OTP too short'),
	}),
];
