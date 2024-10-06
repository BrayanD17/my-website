import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [view, setView] = useState('home'); 

  const renderView = () => {
    switch(view) {
      case 'home':
        return <Home />;
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About/>;
      case 'contact':
        return <Contact/>;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <NavBar setView={setView} />
      {renderView()}
    </div>
  );
}

export default App;
