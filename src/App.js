import React from 'react';

import Header from './components/layout/Header'
import HomeSection from './components/HomeSection';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <HomeSection />
      </>
    )
  }
}

export default App;