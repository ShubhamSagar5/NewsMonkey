import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  
  Route,
  Routes
  
  
  
  
} from "react-router-dom";

export default class App extends Component {
  // render() {
  //   return (
  //     <div>
  //       <Router>
  //       <Navbar/>
        
  //       <Routes>
  //         <Route  exact path='/'><News key="science" pageSize={5} country="in" category="science"></News></Route>
  //         <Route   path="/business"><News key="business" pageSize={5} country="in" category="business"></News></Route>
  //         <Route   path='/entertainment'><News key="entertainment" pageSize={5} country="in" category="entertainment"></News></Route>
  //         <Route   path='/general'><News key="general" pageSize={5} country="in" category="general"></News></Route>
  //         <Route   path='/health'><News key="health" pageSize={5} country="in" category="health"></News></Route>
  //         <Route   path='/science'><News key="science" pageSize={5} country="in" category="science"></News></Route>
  //         <Route   path='/sports'><News key="sports" pageSize={5} country="in" category="sports"></News></Route>
  //         <Route   path='/technology'><News key="technology" pageSize={5} country="in" category="technology"></News></Route>
  //       </Routes>
  //       </Router>
  //     </div>
  //   )
  // }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News key='general' pageSize={5} country='in' category='general' />}></Route>
            <Route path='/general' element={<News key='general' pageSize={5} country='in' category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={5} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={5} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={5} country='in' category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={5} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={5} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={5} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
