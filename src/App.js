import React from 'react';
import logo from './logo.svg';
import './App.css';

import EditProduct from './Components/EditProduct';
import Product from './Components/Product';
import Inventory from './Components/Inventory';
import SuperMarketToolbar from './Components/SuperMarketToolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function App() {

  

  return (
    <div className="App">
      <SuperMarketToolbar/>
      
      <Inventory/>
      
      </div>
  );
}

export default App;
