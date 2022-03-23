import React, {useEffect, useState} from 'react';
import './App.css';
import ListOfGifs from './components/listOfGifs';
import {Link, Route} from 'wouter';

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
        
          <label>Gifs a buscar:
            <input type="text" 
              value={keyword} 
              onChange ={ (e)=>{setKeyword(e.target.value)
              }}
            />
            
          </label>
           
        <Link to={`/gif/${keyword}`} ><button >Click</button></Link>
        <Route path="/gif/:keyword"
        component={ListOfGifs}/>
        {/* <ListOfGifs keyword={keyword}/> */}
      </section>
    </div>
  );
}

export default App;
