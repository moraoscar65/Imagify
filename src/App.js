import React from 'react';
import './App.css';
import Home from './pages/home/home';
import {Link, Route} from 'wouter';
import UniqueGif from './pages/uniqueGif/uniqueGif';
import { GifsContextProvider } from './context/GifContext';
import SearchGifs from './pages/searchGifs/index';

function App() {
  

  return (
    <div className="App">
      <section className="App-header">
        <Link to="/">
          <img src={require('./assets/home.png')} alt='homePage' className='logo'/>
        </Link>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/gif/:search" component={SearchGifs} />
          <Route path="/search/:gif" component={UniqueGif} />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
