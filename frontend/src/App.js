import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Encuesta from './Components/pages/encuesta/Encuesta';
import Login from './Components/pages/login/Login';
import Footer from './Components/generics/footer/Footer';
import SignIn from './Components/pages/signin/Signin';
import Catalogo from './Components/pages/catalogo/App/App'
import './App.css';

function Home(){
  return (<h1>Home</h1>)
}

class App extends Component{
  render (){
    return (
      <Router>
        <div className="App">
          <nav className="Nav">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/encuesta">Encuesta</Link> </li>
            <li><Link to="/signin">SignIn</Link> </li>
            <li><Link to="/login">Login</Link> </li>
            <li><Link to="/catalogo">Catalogo</Link> </li>
          </nav>
            <Route path="/" exact component={Home}></Route>
            <Route path="/encuesta" component={Encuesta}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signin" component={SignIn} />
            <Route path="/catalogo" component={Catalogo} />
          <Footer></Footer>      
        </div>
      </Router>
    );
  }
}

export default App;
