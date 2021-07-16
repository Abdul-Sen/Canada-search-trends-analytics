import React, { useContext } from 'react';
import Landing from './pages/landing';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <>
      <main id="App" className={theme.AppTheme == "Light" ? "theme-light" : "theme-dark"}>
        <Landing />
      </main>
    </>
  );
}

export default App;