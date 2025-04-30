import React from 'react';
import Header from './components/Header';
import CharacterList from './components/charactersList/Index';

function App() {


  return (
    <div className='bg-green-800 pb-2'>
      <Header/>
      <CharacterList />
    </div>
  );
}

export default App;
