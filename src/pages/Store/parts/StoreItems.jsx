import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import buttons from './buttons';
import data from './data';
import StoreItem from './StoreItem';

const StoreItems = () => (
	<Box>
		<Box sx={{ textAlign: 'center' }}>
			{buttons.map((item) => (
				<Button
					key={item.id}
					variant="outlined"
					type={item.type}
					sx={{
						padding: '6px 25px',
						margin: '0px 10px 10px 10px',
						fontWeight: '350',
						color: (theme) => (item.active ? theme.palette.text.primary : theme.palette.secondary.main),
						background: (theme) => (item.active ? theme.palette.secondary.main : null),
						borderColor: (theme) => theme.palette.secondary.main,
						':hover': {
							color: (theme) => theme.palette.text.primary,
							borderColor: (theme) => theme.palette.secondary.main,
							background: (theme) => theme.palette.secondary.main,
						},
					}}
				>
					{item.title}
				</Button>
			))}
		</Box>

		<Grid
			container
			maxWidth="lg"
			columnSpacing={2.5}
			rowSpacing={5}
			columns={{ xs: 4, sm: 8, md: 12 }}
			sx={{ margin: '0 auto', pb: 6, pt: 2 }}
		>
			{data.map((item) => (
				<Grid item center xs={12} sm={4} md={4} key={item.id}>
					<StoreItem item={item} />
				</Grid>
			))}
		</Grid>
	</Box>
);

export default StoreItems;
