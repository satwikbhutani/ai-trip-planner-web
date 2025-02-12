import React from 'react'
import Hero from './components/hero.jsx'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "ATLAS - Satwik Bhutani";
    window.scrollTo(0,0);
  }, []);
  return (
    <div>
      <Hero/>
    </div>
  )
}

export default App