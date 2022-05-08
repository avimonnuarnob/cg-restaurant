import React from 'react';
import AboutSection from '../../components/layouts/homepage/AboutSection';
import BannerSection from '../../components/layouts/homepage/BannerSection';
import Gallery from '../../components/layouts/homepage/Gallery';
import MakeReserveSection from '../../components/layouts/homepage/MakeReserveSection';
import MenuSection from '../../components/layouts/homepage/MenuSection';
import OurServicesSection from '../../components/layouts/homepage/OurServices';
import QuationSection from '../../components/layouts/homepage/QuotationSection';
import UpacomingEvents from '../../components/layouts/homepage/UpcomingEvents';

const HomePage = () => (
	<div>
		<BannerSection />
		<AboutSection />
		<OurServicesSection />
		<MenuSection />
		<UpacomingEvents />
		<Gallery />
		<QuationSection />
		<MakeReserveSection />
	</div>
);

export default HomePage;
