import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const useTheme = () => {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeContextProvider');
	}

	return context;
};

export default useTheme;
