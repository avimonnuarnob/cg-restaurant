import { Box, List, ListItem, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../atoms/Logo';
import { leftSideMenu, rightSideMenu } from './menuItems';

const useStyles = makeStyles((theme) => ({
	nav: {
		background: `${theme.palette.background.default} !important`,
		padding: '5px 0px',
		boxShadow: 'none !important',
	},
	navbar: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	navbar_list: {
		display: 'flex',
		textTransform: 'uppercase',
		textDecoration: 'none',
		listStyle: 'none',
	},
	navbar_list__item: {
		color: `${theme.palette.text.primary}`,
		textDecoration: 'none',
		lineHeight: 1.5,
		fontSize: '14px',
		letterSpacing: '0.21428571428em',
		'&:hover': {
			color: `${theme.palette.secondary.main} !important`,
		},
		'&.active': {
			position: 'relative',
			'&:before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				top: '100%',
				height: '5px',
				width: '100%',
				borderTop: `1px solid ${theme.palette.secondary.main}`,
				borderBottom: `1px solid ${theme.palette.secondary.main}`,
			},
		},
	},

	'navbar_list--special': {
		color: `${theme.palette.text.primary} !important`,
		textDecoration: 'none',
		lineHeight: 1.5,
		letterSpacing: '0.21428571428em',
		fontSize: 'small',
		border: `1px solid ${theme.palette.secondary.main}`,
		padding: '10px 20px',
		'&:hover': {
			color: `${theme.palette.secondary.main} !important`,
		},
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<header>
			{/* <AppBar className={classes.navbar}> */}
			{/* <Toolbar> */}
			<Box component="nav" className={classes.navbar}>
				<List className={classes.navbar_list}>
					{leftSideMenu.map((menu) => (
						<ListItem key={menu.id}>
							<Tooltip title={menu.title}>
								<NavLink to={menu.href} className={classes.navbar_list__item}>
									{menu.title}
								</NavLink>
							</Tooltip>
						</ListItem>
					))}
				</List>

				<div>
					<Tooltip title="Cityscape NFT Resturant">
						<NavLink to="/">
							<Logo outlined height={60} width={60} />
						</NavLink>
					</Tooltip>
				</div>

				<List className={classes.navbar_list}>
					{rightSideMenu.map((menu) => (
						<ListItem key={menu.id}>
							<Tooltip title={menu.title}>
								<NavLink to={menu.href} className={classes.navbar_list__item}>
									{menu.title}
								</NavLink>
							</Tooltip>
						</ListItem>
					))}

					<ListItem alignItems="center" sx={{ whiteSpace: 'nowrap' }}>
						<Tooltip title="Become A Member">
							<NavLink to="become-a-member" className={classes['navbar_list--special']}>
								Become a member
							</NavLink>
						</Tooltip>
					</ListItem>
					{/* <Tooltip title="Theme">
						<ListItem>
							<Theme />
						</ListItem>
					</Tooltip> */}
				</List>
			</Box>
			{/* </Toolbar> */}
			{/* </AppBar> */}
		</header>
	);
};

export default Header;
