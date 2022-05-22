export default {
	formId: 'registrationForm',
	formField: {
		firstName: {
			name: 'firstName',
			label: 'First name',
			requiredErrorMsg: 'First name is required',
		},
		lastName: {
			name: 'lastName',
			label: 'Last name',
			requiredErrorMsg: 'Last name is required',
		},
		phone: {
			name: 'phone',
			label: 'Mobile number',
			requiredErrorMsg: 'Mobile number is required',
		},
		email: {
			name: 'email',
			label: 'Email address*',
			requiredErrorMsg: 'Email address is required',
		},
		password: {
			name: 'password',
			label: 'Password*',
			requiredErrorMsg: 'Password is required',
		},
		confirmPassword: {
			name: 'confirmPassword',
			label: 'Confirm password*',
			requiredErrorMsg: 'Password needs to match',
		},
		photo: {
			name: 'photo',
			label: 'Photo',
			requiredErrorMsg: 'Photo is required',
		},
		identityImage: {
			name: 'identityImage',
			label: 'Gov’t ID (NID, Passport, Driver License Etc)',
			requiredErrorMsg: 'Gov’t ID (NID, Passport, Driver License Etc) is required',
		},
		selfieWithIDPhoto: {
			name: 'selfieWithIDPhoto',
			label: 'Selfie holding the gov’t issued ID',
			requiredErrorMsg: 'Selfie holding the gov’t issued ID is required',
		},
		OTP: {
			name: 'OTP',
			label: 'OTP',
			requiredErrorMsg: 'There is a problem with OTP',
		},
	},
};
