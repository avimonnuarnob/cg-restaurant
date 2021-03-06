import { createTheme, ThemeProvider } from '@mui/material/styles';
import OpenSansCondBold from '../fonts/OpenSans-CondBold-webfont.woff';
import OpenSansCondLight from '../fonts/OpenSans-CondLight-webfont.woff';
import OpenSansCondLightItalic from '../fonts/OpenSans-CondLightItalic-webfont.woff';
import useTheme from '../hooks/useTheme';

const lightMode = {
	root: {},
	primary: {
		main: '#ffffff',
	},
	secondary: {
		main: '#C4AC86',
		dark: '#9C7C57',
		light: '#C4AC86',
	},
	text: {
		primary: '#161C24',
	},
	background: {
		default: '#ffffff',
	},
};

const darkMode = {
	root: {},
	primary: {
		main: '#161C24',
	},
	secondary: {
		main: '#C4AC86',
		dark: '#9C7C57',
		light: '#C4AC86',
	},
	text: {
		primary: '#EFEFEF',
	},
	background: {
		default: '#161C24',
	},
};

const getDesignsFromMode = (mode) => ({
	typography: {
		fontFamily: [
			'-apple-system',
			'Inter',
			'open_sanscondensed',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		h3: {
			fontWeight: 300,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
			@font-face {
				font-family: 'open_sanscondensed';
				src: url(${OpenSansCondLight}) format('woff');
				font-weight: normal;
				font-style: normal;	
			}
			@font-face {
				font-family: 'open_sanscondensed';
				src: url(${OpenSansCondLightItalic}) format('woff');
				font-weight: normal;
				font-style: italic;	
			}
			@font-face {
				font-family: 'open_sanscondensed';
				src: url(${OpenSansCondBold}) format('woff');
				font-weight: bold;
				font-style: normal;	
			}
      `,
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& label.Mui-focused': {
						color: '#C4AC86',
					},
					'&:hover fieldset': {
						borderColor: '#C4AC86',
					},
					'&.Mui-focused fieldset': {
						borderColor: '#C4AC86',
					},
					'& .MuiOutlinedInput-root': {
						'& label': {
							color: '#C4AC86',
						},
						'&:hover fieldset': {
							borderColor: '#C4AC86',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#C4AC86',
						},
					},
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					'&:hover fieldset': {
						borderColor: '#C4AC86 !important',
					},
					'&.Mui-focused fieldset': {
						borderColor: '#C4AC86 !important',
					},
				},
			},
		},
	},
	mode,
	palette: {
		mode,
		...(mode === 'light' ? lightMode : darkMode),
	},
});

const CustomThemeProvider = ({ children }) => {
	const { mode } = useTheme();
	const theme = createTheme(getDesignsFromMode(mode));

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
