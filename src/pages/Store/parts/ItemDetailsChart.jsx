import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
	{ name: 'Jan', price: 20 },
	{ name: 'Feb', price: 22 },
	{ name: 'Mar', price: 17 },
	{ name: 'Apr', price: 19 },
	{ name: 'May', price: 25 },
	{ name: 'Jun', price: 21 },
	{ name: 'Jul', price: 20 },
	{ name: 'Aug', price: 18 },
	{ name: 'Sep', price: 23 },
	{ name: 'Oct', price: 15 },
	{ name: 'Nov', price: 24 },
	{ name: 'Dec', price: 20 },
];

const ItemDetailsChart = () => (
	<Grid
		container
		maxWidth="lg"
		columnSpacing={4}
		sx={{ margin: '0 auto', border: (theme) => `1px dotted ${theme.palette.primary.main}`, padding: '0px 10px' }}
	>
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
			<Typography variant="h4" ml={3}>
				Price Analysis
			</Typography>

			<Divider sx={{ marginLeft: 3 }} />

			<Box mt={2} sx={{ width: '100%' }}>
				<ResponsiveContainer width="100%" height={400}>
					<LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
						<Line type="monotone" dataKey="price" stroke="#C4AC86" strokeWidth={3} />
						<CartesianGrid stroke="#333" strokeDasharray="5 5" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
					</LineChart>
				</ResponsiveContainer>
			</Box>
		</Box>
	</Grid>
);

export default ItemDetailsChart;
