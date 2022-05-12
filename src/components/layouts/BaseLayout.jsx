/* eslint-disable no-unused-vars */
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { Suspense } from 'react';
import routeConfig from '../../routes';
import routes from '../../routes/routes';
import Footer from './Footer';

const useStyles = makeStyles(() => ({
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 1,
	},
}));

const BaseLayout = () => {
	const classes = useStyles();

	return (
		<>
			{/* <Box sx={{ padding: { xs: '10px', sm: '10px 25px', md: '10px' } }} className={classes.header}>
				<Header />
			</Box> */}

			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Box>{routeConfig(routes)}</Box>
				</Suspense>
			</main>

			<Box sx={{ padding: { xs: '10px', sm: '10px 25px', md: '10px 75px' } }}>
				<Footer />
			</Box>
		</>
	);
};

export default BaseLayout;
