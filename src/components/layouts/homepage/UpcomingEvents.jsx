/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */

import MuiTimelineItem from '@mui/lab/TimelineItem';
import { Box, Button, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { makeStyles, withStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import DJImage from '../../../assets/images/dj.jpg';
import UpcomingEvents from '../../../assets/images/upcomingEvents.jpg';

const data = [
	{
		date: '2021-10-14T06:04:05Z',
		artists: [
			{
				name: 'Bragginton',
				desc: 'Retained foreign body in left upper eyelid',
				price: '$6.53',
				slogan: 'Fetal blood sample/bx',
				time: '4:09 AM',
			},
			{
				name: 'Losbie',
				desc: 'Nondisplaced fracture (avulsion) of lateral epicondyle of right humerus',
				price: '$6.76',
				slogan: 'Abdominal wall x-ray NEC',
				time: '9:09 PM',
			},
			{
				name: 'Gouch',
				desc: 'Fracture of unspecified phalanx of unspecified finger, subsequent encounter for fracture with nonunion',
				price: '$2.84',
				slogan: 'Clos pharynx fistula NEC',
				time: '6:55 PM',
			},
		],
	},
	{
		date: '2021-07-19T06:12:18Z',
		artists: [
			{
				name: 'Denning',
				desc: 'Unspecified open wound of right middle finger with damage to nail',
				price: '$6.79',
				slogan: 'Endosc destru duoden les',
				time: '9:42 PM',
			},
			{
				name: 'Glowacha',
				desc: 'Displaced fracture of lateral end of right clavicle, subsequent encounter for fracture with nonunion',
				price: '$1.98',
				slogan: 'Limited interview/evalua',
				time: '4:24 PM',
			},
			{
				name: 'Porker',
				desc: 'Other specified injury of left carotid artery, sequela',
				price: '$3.72',
				slogan: 'Pedicle graft/flap NOS',
				time: '11:34 PM',
			},
			{
				name: 'Kewley',
				desc: 'Person injured in unspecified motor-vehicle accident, nontraffic, sequela',
				price: '$8.34',
				slogan: 'Radical maxillary antrot',
				time: '4:39 AM',
			},
		],
	},
	{
		date: '2021-11-23T05:46:04Z',
		artists: [
			{
				name: 'Doughty',
				desc: 'Nondisplaced fracture of medial cuneiform of left foot, sequela',
				price: '$9.11',
				slogan: 'Therapeu plateltpheresis',
				time: '4:03 PM',
			},
			{
				name: 'Coyle',
				desc: 'Malignant neoplasm of lateral wall of oropharynx',
				price: '$4.40',
				slogan: 'Total ankle replacement',
				time: '12:30 PM',
			},
		],
	},
	{
		date: '2022-02-03T22:09:31Z',
		artists: [
			{
				name: 'Danilowicz',
				desc: 'Solitary bone cyst, right pelvis',
				price: '$3.42',
				slogan: 'Anorectal myomectomy',
				time: '7:33 AM',
			},
			{
				name: 'Blencowe',
				desc: 'Superficial frostbite of unspecified knee and lower leg, initial encounter',
				price: '$3.79',
				slogan: 'Excision of shoulder NEC',
				time: '8:51 PM',
			},
			{
				name: 'Ottosen',
				desc: 'Unspecified injury of popliteal artery, left leg',
				price: '$8.71',
				slogan: 'Ins/repl interspine dev',
				time: '12:21 PM',
			},
			{
				name: 'Tomkiss',
				desc: 'Crushing injury of right lesser toe(s), subsequent encounter',
				price: '$9.69',
				slogan: 'App ext fix dev-ring sys',
				time: '8:23 AM',
			},
			{
				name: 'Oaker',
				desc: 'Other recurrent vertebral dislocation, thoracic region',
				price: '$9.92',
				slogan: 'Amputation of cervix',
				time: '8:42 PM',
			},
		],
	},
];

const TimelineItem = withStyles({
	missingOppositeContent: {
		'&:before': {
			display: 'none',
		},
	},
})(MuiTimelineItem);

const useStyles = makeStyles((theme) => ({
	styledHeader: {
		position: 'relative',
		display: 'inline-block',
		padding: '0 20px 20px 20px',
		'&:before': {
			content: '""',
			position: 'absolute',
			left: 0,
			bottom: 0,
			width: '100%',
			height: '2px',
			backgroundColor: theme.palette.secondary.main,
		},
		'&:after': {
			content: '""',
			position: 'absolute',
			left: '50%',
			bottom: '-5px',
			width: '7px',
			height: '7px',
			backgroundColor: theme.palette.secondary.main,
			outline: `2px solid ${theme.palette.secondary.main}`,
			outlineOffset: '2px',
			transform: 'rotate(45deg) translateX(-50%)',
		},
	},
	eventsSection: {
		backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(13, 19, 21, 0.4) 0%, #0D1315 100%), url(${UpcomingEvents})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		padding: theme.spacing(2, 5),
		backgroundSize: 'cover',
		textAlign: 'center',
	},

	timeline: {},
	timeline__imgbtn: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		position: 'relative',
		padding: theme.spacing(2, 0),
	},
	timeline__image: {
		width: 80,
		height: 80,
		borderRadius: '50%',
		backgroundColor: 'red',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	timeline__connectorbar: {
		width: '50px',
		height: '4px',
	},
	timeline__activeDot: {
		aspectRatio: '1',
		borderRadius: '50%',
		width: '10px',
	},

	card: {},
	card__details: {
		position: 'relative',
		padding: theme.spacing(0, 5),
		backgroundColor: '#121D20',
		textAlign: 'center',
		overflow: 'hidden',
		flex: 1,
	},
	card__details__slogan: {
		position: 'absolute',
		left: '0',
		right: '0',
		top: '50%',
		transform: 'translatey(-50%)',
		opacity: '1',
		fontWeight: 'bold',
	},
	card__details__priceTag: {
		position: 'absolute',
		width: '15rem',
		height: '15rem',
		padding: theme.spacing(4),
		backgroundColor: theme.palette.secondary.dark,
		borderRadius: '50%',
		top: '70%',
		left: '50%',
		transform: 'translateX(-50%)',
	},
}));

const StyledTabs = styled((props) => (
	<Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
	'& .MuiTabs-indicator': {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	'& .MuiTabs-indicatorSpan': {
		backgroundColor: 'transparent',
	},
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
	textTransform: 'none',
	fontWeight: 'bold',
	fontSize: theme.typography.pxToRem(15),
	marginRight: theme.spacing(1),
	color: 'rgba(255, 255, 255, 0.5)',
	'&.Mui-selected': {
		color: '#fff',
		backgroundColor: alpha(theme.palette.secondary.main, 0.5),
	},
	'&.Mui-focusVisible': {
		backgroundColor: 'white',
	},
}));

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
};

const UpacomingEvents = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [selectedData, setSelectedData] = useState({});

	useEffect(() => {
		setValue(0);
		setSelectedData(data[0].artists[0]);
	}, []);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		setSelectedData(data[newValue].artists[0]);
	};

	return (
		<Box sx={{ background: '#0D1315', py: 10 }}>
			<Box className={classes.eventsSection}>
				<Typography
					fontStyle="italic"
					fontWeight="bold"
					variant="h6"
					sx={{ color: (theme) => theme.palette.secondary.main, mb: 2 }}
				>
					Events
				</Typography>
				<Typography fontFamily="sans-serif" variant="h4" sx={{ mb: 10 }} className={classes.styledHeader}>
					Upcoming Events
				</Typography>
				<StyledTabs centered value={value} onChange={handleChange} aria-label="styled tabs example">
					{data?.map((el) => (
						<StyledTab
							label={`${new Date(el.date).getDate()} ${new Date(el.date).toLocaleString('en-US', { month: 'short' })}`}
							key={el.date}
						/>
					))}
				</StyledTabs>

				{data?.map((el, i) => (
					<TabPanel value={value} index={i}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								// height: '20rem',
							}}
						>
							<Box
								className="hello"
								sx={{
									width: '90%',
									display: 'flex',
									gap: 2,
									alignItems: 'center',
									justifyContent: 'center',
									flexWrap: 'wrap',
								}}
							>
								<Box
									sx={{
										display: 'flex',
										flexDirection: { xs: 'row', sm: 'column' },
										overflow: { xs: 'scroll' },
										maxHeight: '20rem',
									}}
								>
									{el.artists.map((artist) => (
										<Box sx={{ display: 'flex' }} className={classes.timeline}>
											<Box className={classes.timeline__imgbtn}>
												<Button onClick={() => setSelectedData(artist)}>
													<img
														alt="name"
														src={DJImage}
														className={classes.timeline__image}
														style={{ outline: artist.name === selectedData?.name ? '4px solid #C4AC86' : 'none' }}
													/>
												</Button>
												<Box
													className={classes.timeline__connectorbar}
													sx={{
														display: { xs: 'none', sm: 'block' },
														backgroundColor: artist.name === selectedData?.name ? alpha('#ffffff', 0.1) : 'transparent',
													}}
												/>
											</Box>
											<Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', alignItems: 'center' }}>
												<Box sx={{ flex: 1, width: '2px', bgcolor: alpha('#ffffff', 0.1) }} />
												<Box
													className={classes.timeline__activeDot}
													sx={{
														outline: (theme) => `5px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
														backgroundColor: (theme) =>
															artist.name === selectedData?.name ? 'secondary.main' : `#4D4246`,
													}}
												/>
												<Box sx={{ flex: 1, width: '2px', bgcolor: alpha('#ffffff', 0.1) }} />
											</Box>
										</Box>
									))}
								</Box>
								<Box sx={{ display: 'flex', flex: 1 }} className={classes.card}>
									<Box className={classes.card__details}>
										<Box sx={{ position: 'relative', textAlign: 'center' }}>
											<Typography variant="h1" sx={{ opacity: '0.1', fontWeight: 'bold' }}>
												{`${new Date(el.date).getDate()} ${new Date(el.date).toLocaleString('en-US', {
													month: 'short',
												})}`}
											</Typography>
											<Typography variant="h4" fontWeight="bold" className={classes.card__details__slogan}>
												{selectedData?.slogan}
											</Typography>
										</Box>

										<Typography variant="h6">{selectedData?.desc}</Typography>

										<Typography variant="h6" sx={{ py: 4 }}>
											START AT {selectedData?.time}
										</Typography>

										<Box className={classes.card__details__priceTag}>
											<Typography variant="h4" fontWeight="bold">
												{selectedData?.price}
											</Typography>
											<Typography variant="h4">Entrance</Typography>
										</Box>
									</Box>
									<img src={DJImage} alt="DJ" style={{ width: '424px', height: 'auto' }} />
									{/* <p>Hello</p> */}
								</Box>
								<Box />
							</Box>
						</Box>
					</TabPanel>
				))}
			</Box>
		</Box>
	);
};

export default UpacomingEvents;
