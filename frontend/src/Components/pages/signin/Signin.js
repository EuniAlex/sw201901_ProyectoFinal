import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../../generics/header/Header';
import Body from '../../generics/body/Body';
import Input from '../../generics/input/Input';
import Label from '../../generics/label/Label';
import Login from '../login/Login';
import axios from 'axios';

const divStyle = {
  textAlign: 'center'
};

class Signin extends Component{

  constructor(){
    super();
    this.state = {
      "txtPswd":"",
      "txtEmail":"",
      redirectTo:""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onChangeHandler(e){
    let {name, value} = e.currentTarget;
      this.setState({[name]:value});
  }
  onClickHandler(e){
    e.preventDefault();
    e.stopPropagation();
    axios.post(
        'api/users/new',
        {
          "email":this.state.txtEmail,
          "pswd":this.state.txtPswd
        },
      ).then(
        (resp)=>{
          this.setState({ redirectTo:"/login"});
        }
      )
      .catch(
        (err)=>{
          alert("Usuario ya existe");
          this.setState({error:err});
        }
      );
  }
  render(){
     if(this.state.redirectTo!==""){
       return(
          <div style={divStyle}>
            <h1>Gracias por registrarse</h1>
            <Login></Login>
         </div>
        )
     }
    return (
      <div>
        <Header title = "Crear nueva cuenta"></Header>
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
            <button onClick={this.onClickHandler}>Sign In</button>
          </fieldset>
        </Body>
      </div>
    );
  }
}


export default Signin;
