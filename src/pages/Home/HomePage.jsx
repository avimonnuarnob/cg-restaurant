import { Box } from '@mui/material';
import React from 'react';
import BannerSection from '../../components/layouts/homepage/BannerSection';
import Gallery from '../../components/layouts/homepage/Gallery';
import MakeReserveSection from '../../components/layouts/homepage/MakeReserveSection';
import QuationSection from '../../components/layouts/homepage/QuotationSection';
import UpacomingEvents from '../../components/layouts/homepage/UpcomingEvents';

const HomePage = () => (
	<div>
		<BannerSection />
		<Box sx={{ height: '400px' }} />
		<UpacomingEvents />
		<Gallery />
		<QuationSection />
		<MakeReserveSection />
	</div>
);

export default HomePage;
