import React, {useEffect, useState} from 'react';
import './App.css';
import ListOfGifs from './components/listOfGifs';

function App() {
  const [search, setSearch]=useState('')
  const [keyword, setKeyword]=useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setKeyword(search)
    
  }
  
  return (
    <div className="App">
      <section className="App-header">
        <form onSubmit={handleSubmit}>
          <label>Gifs a buscar:
            <input type="text" 
              value={search} 
              onChange ={ (e)=>setSearch(e.target.value)}
              caret-color="blue"
            />

          </label>
          <input type='submit' />
        </form>
        
        <ListOfGifs keyword={keyword}/>
      </section>
    </div>
  );
}

export default App;
