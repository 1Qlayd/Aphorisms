import React from 'react';
import './App.css';
import {Aphorisms} from './components/Aphorisms';
import {Header} from './components/HeaderPage';

function App() {
  return (
    <div className="App">
        <Header />
        <Aphorisms author={'author'} aphorism={'1dasdasdasdasdasdasdas231dasdasdasdasdasdasdas231dasdasdasdasdasdasdas231dasdasdasdasdasdasdas23'} />
        <Aphorisms author={'author'} aphorism={'1dasdasdasdasdasdasdas231dasdasdasdasdasdasdas231dasdasdasdasdasdasdas231dasdasdasdasdasdasdas23'} />
        <Aphorisms author={'author'} aphorism={'1dasdasdasdasdasdasdas231dasdasdasdasdasdasdas231dasdasdasdasdasdasdas231dasdasdasdasdasdasdas23'} />
        <Aphorisms author={'author'} aphorism={'1dasdasdasdasdasdasdas231dasdasdasdasdasdasdas231dasdasdasdasdasdasdas231dasdasdasdasdasdasdas23'} />
    </div>
  );
}

export default App;