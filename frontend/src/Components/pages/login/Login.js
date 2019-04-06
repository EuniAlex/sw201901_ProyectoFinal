import React, { Component } from 'react';
import Header from '../../generics/header/Header';
import Body from '../../generics/body/Body';
import Input from '../../generics/input/Input';
import Label from '../../generics/label/Label';
import {Redirect, Link} from 'react-router-dom';


import "./Login.css";


import axios from 'axios';

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
        <Body>
          <fieldset className="Fieldset">
          <Label
            Label = "Correo Electrónico"
          />
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
    console.log("holi");
    axios.get(
      `/api/users/login/${this.state.txtEmail}`,
      {"email":this.state.txtEmail,"pswd":this.state.txtPswd}
    ).then( (resp)=>{
      console.log("holi1");
      if(resp.data.msg === "ok"){
        console.log("holi2");
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
      console.log("holi3");
      alert(err);
    } );
  }
}

export default Login;