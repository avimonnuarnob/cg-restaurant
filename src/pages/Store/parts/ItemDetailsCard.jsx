import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';

const ItemDetailsCard = ({ item = {} }) => (
	<Grid
		container
		maxWidth="lg"
		columnSpacing={4}
		sx={{ margin: '0 auto', border: (theme) => `1px dotted ${theme.palette.primary.main}`, padding: '50px 10px' }}
	>
		<Grid item xs={12} md={6}>
			<Box>
				<img src={item.image} alt={item.productName} style={{ borderRadius: 20, height: '100%', width: '100%' }} />
			</Box>
		</Grid>

		<Grid item xs={12} md={6}>
			<Box mb={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant="h4">{item.productName}</Typography>
				<Box>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</Box>
			</Box>

			<Box>
				<Typography variant="h5" mb={1}>
					Lorem Inpum Dolor
				</Typography>
				<Typography variant="body2">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed perferendis itaque nam sint dolore, optio, quas
					esse eveniet voluptas neque amet nihil omnis a, eligendi nulla id velit deserunt quisquam.
				</Typography>
			</Box>

			<Box sx={{ display: 'flex', gap: 3 }} mt={3}>
				<Box
					sx={{
						cursor: 'pointer',
						display: 'flex',
						gap: 1,
						alignItems: 'center',
						border: (theme) => `1px solid ${theme.palette.secondary.main}`,
						padding: '5px 40px 5px 10px',
						borderRadius: 2,
						':hover': {
							background: (theme) => theme.palette.secondary.light,
						},
					}}
				>
					<Avatar>H</Avatar>
					<Box>
						<Typography variant="caption">Owner</Typography>
						<Typography variant="h6" fontWeight={350}>
							{item.name}
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						cursor: 'pointer',
						display: 'flex',
						gap: 1,
						alignItems: 'center',
						border: (theme) => `1px solid ${theme.palette.secondary.main}`,
						padding: '5px 40px 5px 10px',
						borderRadius: 2,
						':hover': {
							background: (theme) => theme.palette.secondary.light,
						},
					}}
				>
					<Avatar>S</Avatar>
					<Box>
						<Typography variant="caption">Creator</Typography>
						<Typography variant="h6" fontWeight={350}>
							Avimonnu Arnob
						</Typography>
					</Box>
				</Box>
			</Box>

			<Box mt={3}>
				<Typography variant="caption">Price</Typography>
				<Typography variant="h5">{item.price} BTC</Typography>
			</Box>

			<Box mt={3} sx={{ display: 'flex', gap: 3 }}>
				<Button
					variant="outlined"
					sx={{
						padding: { xs: '10px 40px', sm: '10px 60px', md: '10px 80px' },
						margin: '10px 0px 0px 0px',
						fontWeight: '350',
						borderRadius: 10,
						color: (theme) => theme.palette.secondary.main,
						borderColor: (theme) => theme.palette.secondary.main,
						':hover': {
							color: (theme) => theme.palette.text.primary,
							borderColor: (theme) => theme.palette.secondary.main,
							background: (theme) => theme.palette.secondary.main,
						},
					}}
				>
					Make Offer
				</Button>

				<Button
					variant="outlined"
					sx={{
						padding: '10px 80px',
						margin: '10px 0px 0px 0px',
						fontWeight: '350',
						borderRadius: 10,
						color: (theme) => theme.palette.primary.main,
						borderColor: (theme) => theme.palette.secondary.main,
						background: (theme) => theme.palette.secondary.main,
						':hover': {
							color: (theme) => theme.palette.text.primary,
							borderColor: (theme) => theme.palette.secondary.main,
						},
					}}
				>
					Buy Now
				</Button>
			</Box>
		</Grid>
	</Grid>
);

export default ItemDetailsCard;
