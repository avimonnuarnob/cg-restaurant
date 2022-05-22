import registrationFormModel from './registrationFormModel';

const {
	formField: {
		firstName,
		lastName,
		email,
		phone,
		password,
		confirmPassword,
		photo,
		identityImage,
		selfieWithIDPhoto,
		OTP,
	},
} = registrationFormModel;

export default {
	[firstName.name]: '',
	[lastName.name]: '',
	[email.name]: '',
	[phone.name]: '',
	[password.name]: '',
	[confirmPassword.name]: '',
	[photo.name]: '',
	[selfieWithIDPhoto.name]: '',
	[identityImage.name]: '',
	[OTP.name]: '',
};
