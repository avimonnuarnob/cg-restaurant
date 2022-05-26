export default {
	formId: 'CustomMembershipForm',
	formField: {
		services: {
			name: 'services',
			label: 'Choose your services',
			requiredErrorMsg: 'At least one service is required',
		},
		days: {
			name: 'days',
			label: 'Amout of days you need the facilities for',
			requiredErrorMsg: 'khali dekhte ashben?',
		},
		serviceType: {
			name: 'serviceType',
			label: 'Choose your service type',
			requiredErrorMsg: 'Choose your service type',
		},
		paymentMethod: {
			name: 'paymentMethod',
			label: 'Select payment method',
			requiredErrorMsg: 'Payment method is required',
		},
		bankName: {
			name: 'bankName',
			label: 'Select Bank',
			requiredErrorMsg: 'Bank name is required',
		},
		bankDepositSlip: {
			name: 'bankDepositSlip',
			label: 'Upload bank deposit slip',
			requiredErrorMsg: 'File is required',
		},
	},
};
