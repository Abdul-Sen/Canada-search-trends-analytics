import React from 'react';
import { AppContextProvider } from './store/AppContextProvider';
import Landing from './pages/landing';


const App = () => {

  return (
        <AppContextProvider>
        <main className="App">
            <Landing />
        </main>
        </AppContextProvider>
  )
}

export default App;