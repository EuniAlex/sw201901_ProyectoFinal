import React, { Component } from 'react';
import Header from '../../generics/header/Header';
import Body from '../../generics/body/Body';
import Input from '../../generics/input/Input';
import Label from '../../generics/label/Label';
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
    //alert("Ohh hice click");
    axios.post(
      '/api/users/login',
      {...this.state}
    ).then( (resp)=>{
      alert(resp);
    }).catch( (err) => {
      alert(err);
    } );
  }
}

export default Login;