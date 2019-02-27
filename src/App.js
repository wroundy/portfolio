import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Routes from './components/routes';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Navbar/>
      <hr />
        <Routes/>
      <hr />
       <Footer/>  
      </div>
      
    </Router>      
    )
  }
}
    
export default App;