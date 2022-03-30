import React from 'react';
import './App.css';
import ListOfGifs from './components/listOfGifs';
import Home from './pages/home/home';
import {Link, Route} from 'wouter';
import UniqueGif from './components/uniqueGif';

function App() {
  

  return (
    <div className="App">
      <section className="App-header">
        <Link to="/"></Link>

        <Route path="/" component={Home} />
        <Route path="/gif/:search" component={ListOfGifs} />
        <Route path="/search/:gif" component={UniqueGif} />
        {/* <ListOfGifs keyword={keyword}/> */}
      </section>
    </div>
  );
}

export default App;
