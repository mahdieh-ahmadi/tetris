import React from 'react';
//import {connect} from 'react-redux'
import {BrowserRouter } from 'react-router-dom'

import Tetris from './containers/tetris'
// eslint-disable-next-line

const App = props => {

  


  return (
    <BrowserRouter>
    <div className="App">
      <Tetris />
      
    </div>
    </BrowserRouter>
  )
}


export default App;
