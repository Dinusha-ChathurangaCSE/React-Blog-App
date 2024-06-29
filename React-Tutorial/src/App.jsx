import { useState } from 'react'
import './App.css'
import Home from './componentrs/Home'
import Navbar from './componentrs/navbar'
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import Create from './componentrs/Create'
import BlogDetails from './componentrs/blogDetails'
import NotFound from './componentrs/NotFound';

function App() {


  return (
    <Router>
       <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/blog/:id'>
            <BlogDetails/>
          </Route>
          <Route>
            <NotFound path='*' />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App
