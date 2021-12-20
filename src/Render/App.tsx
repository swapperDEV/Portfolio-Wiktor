import React, { useState, useEffect } from 'react';
import './App.css';
import RouterComponent from './Routes';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [which, setWhich] = useState('')
  const handleScroll = () => {
      const position = window.pageYOffset;
      if(position > 100) {
        setWhich('red')
      } else {
        setWhich('')
      }
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <>
      <RouterComponent/>
    </>
  );
}

export default App;
