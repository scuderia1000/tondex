import React from 'react';
import './App.css';
import AppHeader from '../components/header/app/AppHeader';
import Workspace from '../containers/workspace/Workspace';

function App() {
  return (
    <>
      <AppHeader />
      <Workspace />
    </>
  );
}

export default App;
