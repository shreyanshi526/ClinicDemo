import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing';
import Appbar from './Appbar';
import Services from './services';


function App() {
 
  return (
    <>
    <Appbar></Appbar>
    <Landing></Landing>
    <Services></Services>
    </>
  )
}

export default App;
