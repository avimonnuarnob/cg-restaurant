import { Route, Routes } from 'react-router-dom';

const routeConfig = (routes) => {
	if (!routes) return <div />;

	return (
		<Routes>
			{routes?.map((route) => (
				<Route key={route.id} path={route.path} element={<route.component />} />
			))}
		</Routes>
	);
};

export default routeConfig;
