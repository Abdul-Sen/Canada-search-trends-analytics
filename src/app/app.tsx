import React from 'react';
import { AppContextProvider } from './store/AppContextProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/landing';


const App = () => {

  return (
        <AppContextProvider>
        <main className="App">
          <Header />
            <Landing />
          <Footer/>
        </main>
        </AppContextProvider>
  )
}

export default App;