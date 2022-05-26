/* eslint-disable no-unused-vars */
import * as Yup from 'yup';
import customMembershipFormModel from './customMembershipFormModel';

const {
	formField: { services, days, serviceType, paymentMethod, bankName, bankDepositSlip },
} = customMembershipFormModel;

export default [
	Yup.object().shape({
		[services.name]: Yup.array().min(1, `${services.requiredErrorMsg}`),
	}),
	Yup.object().shape({
		[days.name]: Yup.string().required(`${days.requiredErrorMsg}`),
	}),
	Yup.object().shape({
		[serviceType.name]: Yup.string().required(`${serviceType.requiredErrorMsg}`),
	}),
	Yup.object().shape({
		[paymentMethod.name]: Yup.string().required(`${paymentMethod.requiredErrorMsg}`),
		[bankName.name]: Yup.string().required(`${bankName.requiredErrorMsg}`),
		[bankDepositSlip.name]: Yup.mixed().required(`${bankDepositSlip.requiredErrorMsg}`),
	}),
];
