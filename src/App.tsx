import React from 'react';
import './App.css';
import { Header } from './site/header/Header';
import { Body } from './site/body/Body';
import { Footer } from './site/footer/Footer';

function App() {
  return (
    <>
      <Header title="NewHeader" />
      <Body title="NewBody" />
      <Footer title="NewFooter"/>
    </>
  );
}

export default App;
