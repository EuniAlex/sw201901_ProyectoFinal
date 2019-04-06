import React, { Component } from "react";


import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Encuesta from './Components/pages/encuesta/Encuesta';
import Login from './Components/pages/login/Login';
import SignIn from './Components/pages/signin/Signin';
import Catalogo from './Components/pages/catalogo/App/App';
import home from './Components/pages/home/home';
import {
  Button,
  Container,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment
} from "semantic-ui-react";

//import "semantic-ui-css/semantic.min.css";



import "./App.css";

class App extends Component {
 /* state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };*/

  render() {
    

    return (
      <div className="App">
        <Grid padded className="tablet computer only">
          <Container>
            <Router>
            <Menu borderless inverted size="huge">
              <Menu.Item   as={Link} to="/" content="Home">
                MaxiRepuestos
              </Menu.Item>
              <Menu.Item active as={Link} to="/" content="Home"/>
              <Menu.Item as={Link} to="/encuesta" content="Encuesta"/>
              <Menu.Item as={Link} to="/signin" content="Signin"/>
              <Menu.Item as={Link} to="/login" content="Login"/>
              <Menu.Item as={Link} to="/catalago" content="Catálogo"/> 
            </Menu>
          <Switch>
            <Route path="/" exact component={home}></Route>
            <Route path="/encuesta" exact component={Encuesta}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/signin" exact component={SignIn}></Route>
            <Route path="/catalogo" exact component={Catalogo}></Route>
          </Switch> 
      </Router>
          </Container>
        </Grid>
        
      </div>
    );
  }
}


export default App;














