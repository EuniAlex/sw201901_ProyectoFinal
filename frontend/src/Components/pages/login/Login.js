import React, { Component } from 'react';
import Header from '../../generics/header/Header';
import Body from '../../generics/body/Body';
import Input from '../../generics/input/Input';
import Label from '../../generics/label/Label';
import {Redirect, Link} from 'react-router-dom';
import "./Login.css";
import axios from 'axios';
import Navigation from '../catalogo/Menu';
import Order from '../catalogo/Order';

/**
 inputBlurHandler={(e)=>{alert(e.currentTarget.name)}}
 */
class Login extends Component {
  constructor(){
    super();
    this.state = {
      "txtPswd":"",
      "txtEmail":""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  
  render() {
    if (this.state.redirecto && true){
      return (<Redirect to={this.props.location.state.from.pathname} />);
    }
    return (
      <div>
        <Header title="Inicio de Sesión"></Header>
        <Body >
          <fieldset className="Fieldset">
          <Label
            Label = "Correo Electrónico"
          />
          {/* <Navigation 
            userId={this.state.txtEmail}
          /> */}
         
          <Input className = "input"
              inputName="txtEmail"
              inputType="email"
              inputPlaceholder="Correo Electróncio"
              inputValue={this.state.txtEmail}
              inputErrorMsg=""
              inputChangeHandler={this.onChangeHandler}
            />
            <Label
            Label = "Contraseña" 
            />
            <Input              
              inputName="txtPswd"
              inputType="password"
              inputPlaceholder="Contraseña"
              inputValue={this.state.txtPswd}
              inputErrorMsg=""
              inputChangeHandler={this.onChangeHandler}
            />
            <button onClick={this.onClickHandler}>Login</button>
          </fieldset>
        </Body>
      </div>
    );
  }
  onChangeHandler(e){
    const {name, value} = e.currentTarget; //ES5 desctructor de objectos ||destructuring
    this.setState({...this.state, [name]:value});
  }
  onClickHandler(e){
    e.preventDefault();
    e.stopPropagation();
    axios.post(
      `/api/users/login`,
      {"email":this.state.txtEmail,"pswd":this.state.txtPswd}
    ).then( (resp)=>{
      if(resp.data.msg === "ok"){
        this.props.auth.setAuthState(
          {
            "isAuthenticated": true,
            "user": this.state.txtEmail,
            "firstVerified": true
          }
          
        );
        this.setState({"redirecto": true});
      }
    }).catch( (err) => {
      alert(err);
    } );
  }
}

export default Login;