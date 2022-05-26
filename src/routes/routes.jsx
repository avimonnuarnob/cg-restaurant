import { lazy } from 'react';
import CreateServicesPage from '../pages/CreateServices/CreateServicesPage';
import HomePage from '../pages/Home/HomePage';
import RegistrationPage from '../pages/Registration/RegistrationPage';

const StorePage = lazy(() => import(/* webpackChunkName: "store" */ '../pages/Store/StorePage'));
const StoreItemDetails = lazy(() => import(/* webpackChunkName: "store-item-details" */ '../pages/Store/ItemDetails'));

const routes = [
	{
		id: '4d808a2a-b7b9-11ec-b909-0242ac120002',
		path: '/',
		exact: true,
		name: 'HomePage',
		component: HomePage,
		protected: false,
	},
	{
		id: '4d808a2a-b7b9-11ec-b909-0242ac120004',
		path: '/registration',
		exact: true,
		name: 'Registration',
		component: RegistrationPage,
		protected: false,
	},
	{
		id: '42390d65-b219-434a-8f2a-d1095eae6032',
		path: '/store',
		exact: true,
		name: 'StorePage',
		component: StorePage,
		protected: false,
	},
	{
		id: 'f3d3fd52-9d88-465b-bf05-7c3dc79b7023',
		path: '/store/:id',
		exact: true,
		name: 'StoreItemDetails',
		component: StoreItemDetails,
		protected: false,
	},
	{
		id: 'f3d3fd52-9d88-465b-bf05-7c3dc79b7023',
		path: '/create-services',
		exact: true,
		name: 'CreateServices',
		component: CreateServicesPage,
		protected: false,
	},
];

export default routes;
