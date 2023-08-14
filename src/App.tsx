import React from 'react';

import './App.css';
import { Route, BrowserRouter as Router,Routes} from 'react-router-dom'; //para esto se instalo  npm i react-router-dom
import { Items, Pokemon, Pokemons } from './pages'; //estos se llaman desde index.tsx


function App() {
  return (
  <Router>
    <Routes>
    <Route path="pokemons/:name" element={<Pokemon/>}/>
    <Route path="pokemons" element={<Pokemons/>}/>
    <Route path="Items" element={<Items/>}/>
      <Route path="/" element={<Pokemons/>}/>
    </Routes>
  </Router> 
  );
}

export default App;
