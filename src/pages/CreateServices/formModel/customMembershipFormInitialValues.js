import customMembershipFormModel from './customMembershipFormModel';

const {
	formField: { services, days, serviceType, paymentMethod, bankName, bankDepositSlip },
} = customMembershipFormModel;

export default {
	[services.name]: [],
	[days.name]: '',
	[serviceType.name]: '',
	[paymentMethod.name]: '',
	[bankName.name]: '',
	[bankDepositSlip.name]: '',
	amount: '',
};
