import React from 'react'

import { Footer, Resume, Features, Info, Header} from './sections';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Info />
        <Resume />
        <Features />
        <Footer />
    </div>
  )
}

export default App