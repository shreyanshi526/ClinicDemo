import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing';
import Appbar from './Appbar';
import Services from './services';
import AppDownload from './AppDownload';
import LeadingHealthcare from './LeadingHealthcare';
import Testimonials from './Testimonials';


function App() {
 
  return (
    <>
    <Appbar></Appbar>
    <Landing></Landing>
    <Services></Services>
    <LeadingHealthcare></LeadingHealthcare> 
    <AppDownload></AppDownload>
    <Testimonials></Testimonials>
    </>
  )
}

export default App;
