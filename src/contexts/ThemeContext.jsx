import { createContext, useEffect, useMemo, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children = null }) => {
	const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'dark');

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const toggleMode = () => setMode(mode === 'dark' ? 'light' : 'dark');

	useEffect(() => {
		localStorage.setItem('mode', mode);
	}, [mode]);

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode]);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
