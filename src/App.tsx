import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Body } from './Body/Body';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
