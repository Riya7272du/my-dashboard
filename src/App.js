import React from 'react';
import Sidebar from './components/Sidebar';
import ProgressBar from './components/ProgressBar';
import InputForm from './components/InputForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <ProgressBar currentStep={3} />
        <InputForm />
      </main>
    </div>
  );
}

export default App;