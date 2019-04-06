import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRoute from './Components/generics/privateroute/PrivateRoute';
import Encuesta from './Components/pages/encuesta/Encuesta';
import Login from './Components/pages/login/Login';
import Footer from './Components/generics/footer/Footer';
import SignIn from './Components/pages/signin/Signin';
import Catalogo from './Components/pages/catalogo/App/App';
import Home from './Components/pages/home/Home';
import './App.css';

// function Home(){
//   return (<h1>Home</h1>)
// }

class App extends Component{
  constructor(){
    super();
    this.state={
      isAuthenticated : false,
      user:null,
      firstVerified:false
    }
    this.setAuthState = this.setAuthState.bind(this);
  }
  setAuthState(authProps){
    this.setState(authProps);
  }
  render (){
    return (
      <Router>
        <div className="App">
          <nav className="nav">
            <a><Link to="/home">Home</Link> </a>
            <a><Link to="/encuesta">Encuesta</Link> </a>
            <a><Link to="/signin">Sign In</Link> </a>
            <a><Link to="/login">Login</Link> </a>
            <a><Link to="/catalogo">Catalogo</Link> </a>
          </nav>
            <Route path="/home" component={Home}></Route>
            <Route path="/encuesta" component={Encuesta}></Route>
            <Route path="/login" render={(p)=>(<Login {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)}/>
            <Route path="/signin" component={SignIn} />
            <PrivateRoute path="/catalogo" component={Catalogo} auth={this.state}/>
          <Footer></Footer>      
        </div>
      </Router>
    );
  }
}

export default App;
