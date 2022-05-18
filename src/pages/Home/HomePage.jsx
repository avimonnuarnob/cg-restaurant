import React from 'react';
import AboutSection from '../../components/layouts/homepage/AboutSection';
import BannerSection from '../../components/layouts/homepage/BannerSection';
import BlogSection from '../../components/layouts/homepage/BlogSection';
import Gallery from '../../components/layouts/homepage/Gallery';
import MakeReserveSection from '../../components/layouts/homepage/MakeReserveSection';
import MapView from '../../components/layouts/homepage/MapViewSection';
import MenuSection from '../../components/layouts/homepage/MenuSection';
import OurServicesSection from '../../components/layouts/homepage/OurServices';
import QuationSection from '../../components/layouts/homepage/QuotationSection';
import UpacomingEvents from '../../components/layouts/homepage/UpcomingEvents';

const HomePage = () => (
	<>
		<BannerSection />
		<AboutSection />
		<MenuSection />
		<OurServicesSection />
		<UpacomingEvents />
		<Gallery />
		<QuationSection />
		<MakeReserveSection />
		<BlogSection />
		<MapView />
	</>
);

export default HomePage;
