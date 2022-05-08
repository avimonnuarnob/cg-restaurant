import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, CardMedia } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const StoreItem = ({ item = {} }) => (
	<Link to={`/store/${item.id}`} style={{ textDecoration: 'none' }}>
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
						subheader={<Typography variant="subtitle2">{item.username}</Typography>}
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

					<CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
							<Box>
								<Typography mb={0.5} fontWeight={400} variant="h6">
									{item.productName}
								</Typography>
								<Rating name="read-only" size="small" value={item.rating} readOnly />
							</Box>

							<Box>
								<Typography mb={0.5} variant="subtitle2" sx={{ color: (theme) => theme.palette.secondary.main }}>
									Current Bit
								</Typography>
								<Typography variant="body1" fontWeight={500}>
									{item.price} BTC
								</Typography>
							</Box>
						</Box>

						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
							<Box>
								<Typography mb={0.5} variant="subtitle2" sx={{ color: (theme) => theme.palette.secondary.main }}>
									Auction Ending In
								</Typography>
								<Typography variant="body1" fontWeight={350}>
									{item.time}
								</Typography>
							</Box>

							<Box>
								<Button
									variant="outlined"
									sx={{
										padding: '6px 25px',
										margin: '10px 0px 0px 0px',
										fontWeight: '350',
										color: (theme) => theme.palette.secondary.main,
										borderColor: (theme) => theme.palette.secondary.main,
										':hover': {
											color: (theme) => theme.palette.text.primary,
											borderColor: (theme) => theme.palette.secondary.main,
											background: (theme) => theme.palette.secondary.main,
										},
									}}
								>
									Place A Bid
								</Button>
							</Box>
						</Box>
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	</Link>
);

export default StoreItem;
