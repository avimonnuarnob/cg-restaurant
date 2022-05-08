import { Box, Link, List, ListItem, Tooltip, Typography } from '@mui/material';
import Icon from '../atoms/Icon';
import Logo from '../atoms/Logo';
import { footerMediaIconsMenu } from './menuItems';

const Footer = () => (
	<>
		<Box
			sx={{
				padding: '10px 0px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div>
				<Logo />
			</div>

			<Box sx={{ textAlign: 'center' }}>
				<p>Cityscape Tower, 8th Floor, 53 Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh.</p>
				<p>
					<Link href="tel:01324249090" sx={{ color: (theme) => `${theme.palette.text.primary} !important` }}>
						+88013 24 24 9090
					</Link>
					,{' '}
					<Link
						href="mailto:info@cityscapeglobal.net"
						sx={{ color: (theme) => `${theme.palette.text.primary} !important` }}
					>
						info@cityscapeglobal.net
					</Link>
				</p>
				<p>
					Open: <strong>09:00 </strong>AM - <strong>06:00 </strong>PM
				</p>
			</Box>

			<Box sx={{ maxWidth: 220 }}>
				<List sx={{ display: 'flex' }}>
					{footerMediaIconsMenu.map((icon) => (
						<ListItem key={icon.id}>
							<Tooltip title={icon.title}>
								<Link href={icon.href} sx={{ ':hover': (theme) => `${theme.palette.secondary.main} !important` }}>
									<Icon type={icon.title.toLowerCase()} />
								</Link>
							</Tooltip>
						</ListItem>
					))}
				</List>
			</Box>
		</Box>

		<Box sx={{ padding: '10px 0px', display: 'flex', justifyContent: 'space-between' }}>
			<Typography>© 2022. Cityscape Limited</Typography>
			<Typography>All rights reserved</Typography>
		</Box>
	</>
);

export default Footer;
