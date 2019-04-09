import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRoute from './Components/generics/privateroute/PrivateRoute';
import Encuesta from './Components/pages/encuesta/Encuesta';
import Login from './Components/pages/login/Login';
import Footer from './Components/generics/footer/Footer';
import SignIn from './Components/pages/signin/Signin';
import Catalogo from './Components/pages/catalogo/App/App';
import Home from './Components/pages/home/home';
import {
  Button,
  Grid,
  Icon,
  Menu,
} from "semantic-ui-react";
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
        <Grid className="mobile only">
                <Menu inverted borderless size="huge" fixed="top">
                    <Menu.Item header as="a">
                    MaxiRepuestos
                    </Menu.Item>
                    <Menu.Menu position="right">
                    <Menu.Item>
                        <Button
                        icon
                        basic
                        inverted
                        toggle
                        onClick={this.handleToggleDropdownMenu}
                        >
                        <Icon name="content" />
                        </Button>
                    </Menu.Item>
                    </Menu.Menu>
                    <Menu
                    vertical
                    borderless
                    inverted
                    fluid
                    style={this.state.dropdownMenuStyle}
                    >
                    <Menu.Item active as="a">
                        Home
                    </Menu.Item>
                    <Menu.Item as="a">Encuesta</Menu.Item>
                    <Menu.Item as="a">Signin</Menu.Item>
                    <Menu.Item as="a">Login</Menu.Item>
                    <Menu.Item as="a">Catálogo</Menu.Item>
                    </Menu>
                </Menu>
                </Grid>


          <nav className="nav"> 
            <a><Link to="/">Home</Link> </a>
            <a><Link to="/encuesta">Encuesta</Link> </a>
            <a><Link to="/signin">Sign In</Link> </a>
            <a><Link to="/catalogo">Catalogo</Link> </a>
            <a><Link to="/login">Log In</Link> </a>
          </nav>

            {/* <Route path="/" component={Home}></Route> */} 
     
            <Route path="/" exact component={Home}></Route>
            <Route path="/encuesta" exact component={Encuesta}></Route>
            <Route path="/signin" exact component={SignIn} />
            <PrivateRoute path="/catalogo" exact component={Catalogo} auth={this.state}/>
            <Route path="/login" exact render={(p)=>(<Login {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)}/>
          <Footer></Footer>      
        </div>
      </Router>
      
    );
  }
}

export default App;
