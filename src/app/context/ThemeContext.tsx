import React, { createContext } from 'react';

const DEFAULT_THEME : ITheme = { AppTheme: "Light" }

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [theme, setTheme] = React.useState<ITheme>(DEFAULT_THEME);

    const updateTheme = (newTheme: ITheme) => {
        console.log(theme.AppTheme);
        setTheme(newTheme);
    };
    
    return (
        <ThemeContext.Provider value={{theme, updateTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;