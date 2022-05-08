import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './parts/data';
import ItemDetailsCard from './parts/ItemDetailsCard';
import ItemDetailsChart from './parts/ItemDetailsChart';
import ItemDetailsExploreMore from './parts/ItemDetailsExploreMore';

const ItemDetails = () => {
	const [itemDetails, itemDetailsSet] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const itemFounded = data.find((item) => item.id === id);

		if (itemFounded) {
			itemDetailsSet(itemFounded);
		}
	}, [id]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const scrollToTop = () => window.scrollTo(0, 0);

	return (
		<>
			<ItemDetailsCard item={itemDetails} />
			<ItemDetailsChart />
			<ItemDetailsExploreMore type={itemDetails.type} scrollTo={scrollToTop} />
		</>
	);
};

export default ItemDetails;
