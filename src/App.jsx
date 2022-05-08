import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import BaseLayout from './components/layouts/BaseLayout';
import { ThemeContextProvider } from './contexts/ThemeContext';
import CustomThemeProvider from './themes';

const App = () => (
	<ThemeContextProvider>
		<CustomThemeProvider>
			<CssBaseline />
			<BrowserRouter>
				<BaseLayout />
			</BrowserRouter>
		</CustomThemeProvider>
	</ThemeContextProvider>
);

export default App;
