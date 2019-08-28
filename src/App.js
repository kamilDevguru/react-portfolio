import React from 'react';

import Header from './components/layout/Header'
import HomeSection from './components/HomeSection';
import ResumeSection from './components/ResumeSection';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <HomeSection />
        <ResumeSection />
      </>
    )
  }
}

export default App;