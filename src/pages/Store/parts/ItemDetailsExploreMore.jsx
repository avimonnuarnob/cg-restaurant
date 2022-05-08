import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, CardMedia, Divider, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from './data';

const ItemDetailsExploreMore = ({ type = '', scrollTo = null }) => {
	// eslint-disable-next-line no-unused-vars
	const [moreData, moreDataSet] = useState([]);

	useEffect(() => {
		moreDataSet(data.filter((item) => item.type === type));
	}, [type]);

	return (
		<Grid
			container
			maxWidth="lg"
			columnSpacing={4}
			sx={{ margin: '0 auto', border: (theme) => `1px dotted ${theme.palette.primary.main}`, padding: '50px 10px' }}
		>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
				<Typography variant="h4" ml={3}>
					Explore More
				</Typography>

				<Divider sx={{ marginLeft: 3 }} />

				<Grid
					container
					maxWidth="lg"
					columnSpacing={2.5}
					rowSpacing={2.5}
					columns={{ xs: 4, sm: 8, md: 12 }}
					sx={{ margin: '0 auto' }}
				>
					{moreData.map((item) => (
						<Grid item center xs={12} sm={4} md={4} key={item.id}>
							<Box>
								<Link to={`/store/${item.id}`} style={{ textDecoration: 'none' }} onClick={scrollTo}>
									<Box sx={{ background: (theme) => theme.palette.primary }}>
										<Card
											sx={{
												maxWidth: 400,
												background: (theme) => theme.palette.primary.main,
												border: (theme) => `1px dotted ${theme.palette.primary.dark}`,
												borderRadius: 3,
												boxShadow: '0 1rem 3rem rgba(0,0,0,.175)!important',
											}}
										>
											<CardActionArea>
												<CardHeader
													avatar={<Avatar aria-label="recipe">{item.name[0]}</Avatar>}
													action={
														<IconButton aria-label="settings">
															<MoreHorizIcon />
														</IconButton>
													}
													title={<Typography variant="h6">{item.name}</Typography>}
												/>

												<CardMedia
													component="img"
													image={item.image}
													height="250"
													sx={{
														width: { xs: 250, sm: 300, md: 350 },
														margin: '0 auto',
														borderRadius: 2,
														border: (theme) => `2px solid ${theme.palette.primary.main}`,
													}}
													alt="Paella dish"
												/>

												<CardContent>
													<Box
														sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}
													>
														<Typography mb={0.5} fontWeight={400} variant="h6">
															{item.productName}
														</Typography>
														<Typography
															variant="h6"
															fontWeight={500}
															sx={{ color: (theme) => theme.palette.secondary.main }}
														>
															{item.price} BTC
														</Typography>
													</Box>
												</CardContent>
											</CardActionArea>
										</Card>
									</Box>
								</Link>
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
		</Grid>
	);
};

export default ItemDetailsExploreMore;
