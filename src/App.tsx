import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './components/title/title';
import { Subtitles } from './components/subtitles/subtitles'

function App() {
  const nome = ''
  return (
    <>
    <Title nome ={nome} />
    
    <Subtitles/>
    
    </>
  );
}

export default App;
