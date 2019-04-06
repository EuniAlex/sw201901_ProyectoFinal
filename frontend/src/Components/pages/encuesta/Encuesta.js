import React, {Component} from 'react'; 
import Header from '../../generics/header/Header';
import Body from '../../generics/body/Body';
import Input from '../../generics/input/Input';
import Label from '../../generics/label/Label';
import {Link} from 'react-router-dom';
import Home from '../home/Home';
import axios from 'axios';

class Encuesta extends Component {

    constructor(){
        super();
        this.state = {
            rbrespuesta1:"",
            rbrespuesta2:"",
            rbrespuesta3:"",
            rbrespuesta4:"",
            rbrepuesta5:"",
            txtcomentario:"",
            errorcometario:"",
            redirectTo:"",
            error:""
        }
        this.onChangeHandler =this.onChangeHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onChangeHandler(e){
        let {name, value} = e.currentTarget;
        this.setState({[name]:value});
    }
    onBlurHandler(e){
        let{name, value} =e.currentTarget;
    }
    onClickHandler(e){
        e.preventDefault();
        e.stopPropagation();
        axios.post(
        `api/encuesta/newEncuesta`,
            {
                respuesta1:this.state.rbrespuesta1,
                respuesta2:this.state.rbrespuesta2,
                respuesta3:this.state.rbrespuesta3,
                respuesta4:this.state.rbrespuesta4,
                respuesta5:this.state.rbrespuesta5,
                comentario:this.state.txtcomentario
            },
            console.log(this.state.respuesta1, this.state.rbrespuesta1),
        ).then(
            (resp)=>{
                console.log(resp);
                console.log(this.state.respuesta1, this.state.rbrespuesta1);
                console.log(this.state.respuesta2, this.state.rbrespuesta2);
                console.log(this.state.respuesta3, this.state.rbrespuesta3);
                console.log(this.state.respuesta4, this.state.rbrespuesta4);
                //this.setState({error:this.state.respuesta1})
                this.setState({redirectTo:"/home"});
            }
        )
        .catch(
            (err)=>{
                console.log(err);
                this.setState({error:"Error al enviar datos del formulario"});
            }
        );
    }
    render(){
        if(this.state.redirectTo!==""){
            return(
                <div>
                    <Home></Home>
                </div>
            )
        }
        return (
            <div>
                <Header title = "Encuesta al Cliente"></Header>
                <Body>
                    <fieldset>
                        <Label
                            Label = "¿Cual es su nivel de satisfacción con el servicio recibido?"
                        />
                        <Input
                            inputLabel="Muy Satisfecho"
                            inputName="rbrespuesta1"
                            inputType="radio"   
                            inputValue ="Muy Satisfecho"
                            inputChecked = {this.state.rbrespuesta1 === "Muy Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Satisfecho"
                            inputName="rbrespuesta1"
                            inputType="radio"
                            inputValue ="Satisfecho"
                            inputChecked = {this.state.rbrespuesta1 === "Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Poco Satisfecho"
                            inputName="rbrespuesta1"
                            inputType="radio"   
                            inputValue ="Poco Satisfecho"
                            inputChecked = {this.state.rbrespuesta1 === "Poco Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Nada Satisfecho"
                            inputName="rbrespuesta1"
                            inputType="radio"   
                            inputValue ="Nada Satisfecho"
                            inputChecked = {this.state.rbrespuesta1 === "Nada Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                    </fieldset>
                    <br/>
                    <fieldset>
                        <Label
                            Label = "¿Como se sintio con el tiempo de entrega de su producto?"
                        />
                    <Input
                            inputLabel="Muy Satisfecho"
                            inputName="rbrespuesta2"
                            inputType="radio"   
                            inputValue ="Muy Satisfecho"
                            inputChecked = {this.state.rbrespuesta2 === "Muy Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Satisfecho"
                            inputName="rbrespuesta2"
                            inputType="radio"
                            inputValue ="Satisfecho"
                            inputChecked = {this.state.rbrespuesta2 === "Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Poco Satisfecho"
                            inputName="rbrespuesta2"
                            inputType="radio"   
                            inputValue ="Poco Satisfecho"
                            inputChecked = {this.state.rbrespuesta2 === "Poco Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Nada Satisfecho"
                            inputName="rbrespuesta2"
                            inputType="radio"   
                            inputValue ="Nada Satisfecho"
                            inputChecked = {this.state.rbrespuesta2 === "Nada Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                    </fieldset>                    
                    <br/>
                    <fieldset>
                        <Label
                            Label = "¿Cual es su nivel de satisfacción de acuerdo a la calidad de nuestros productos?"
                        />
                        <Input
                            inputLabel="Muy Satisfecho"
                            inputName="rbrespuesta3"
                            inputType="radio"   
                            inputValue ="Muy Satisfecho"
                            inputChecked = {this.state.rbrespuesta3 === "Muy Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Satisfecho"
                            inputName="rbrespuesta3"
                            inputType="radio"
                            inputValue ="Satisfecho"
                            inputChecked = {this.state.rbrespuesta3 === "Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Poco Satisfecho"
                            inputName="rbrespuesta3"
                            inputType="radio"   
                            inputValue ="Poco Satisfecho"
                            inputChecked = {this.state.rbrespuesta3 === "Poco Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Nada Satisfecho"
                            inputName="rbrespuesta3"
                            inputType="radio"   
                            inputValue ="Nada Satisfecho"
                            inputChecked = {this.state.rbrespuesta3 === "Nada Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                    </fieldset>                   
                    <br/>
                    <fieldset>
                        <Label
                            Label = "¿Cual es su nivel de satisfacción de acuerdo a nuestra platoforma de venta en linea?"
                        />
                        <Input
                            inputLabel="Muy Satisfecho"
                            inputName="rbrespuesta4"
                            inputType="radio"   
                            inputValue ="Muy Satisfecho"
                            inputChecked = {this.state.rbrespuesta4 === "Muy Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Satisfecho"
                            inputName="rbrespuesta4"
                            inputType="radio"
                            inputValue ="Satisfecho"
                            inputChecked = {this.state.rbrespuesta4 === "Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Poco Satisfecho"
                            inputName="rbrespuesta4"
                            inputType="radio"   
                            inputValue ="Poco Satisfecho"
                            inputChecked = {this.state.rbrespuesta4 === "Poco Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Nada Satisfecho"
                            inputName="rbrespuesta4"
                            inputType="radio"   
                            inputValue ="Nada Satisfecho"
                            inputChecked = {this.state.rbrespuesta4 === "Nada Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                    </fieldset>                    
                    <br/>
                    <fieldset>
                        <Label
                            Label = "¿Cual es su nivel de satisfacción de acuerdo a los precios de nuestros productos?"
                        />
                        <Input
                            inputLabel="Muy Satisfecho"
                            inputName="rbrespuesta5"
                            inputType="radio"   
                            inputValue ="Muy Satisfecho"
                            inputChecked = {this.state.rbrespuesta5 === "Muy Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Satisfecho"
                            inputName="rbrespuesta5"
                            inputType="radio"
                            inputValue ="Satisfecho"
                            inputChecked = {this.state.rbrespuesta5 === "Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Poco Satisfecho"
                            inputName="rbrespuesta5"
                            inputType="radio"   
                            inputValue ="Poco Satisfecho"
                            inputChecked = {this.state.rbrespuesta5 === "Poco Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                        <Input
                            inputLabel="Nada Satisfecho"
                            inputName="rbrespuesta5"
                            inputType="radio"   
                            inputValue ="Nada Satisfecho"
                            inputChecked = {this.state.rbrespuesta5 === "Nada Satisfecho"}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                    </fieldset>
                    <br/>
                    <fieldset>
                        <Label
                            Label = "Comentario"
                        />
                        <Input
                            inputName = "txtcomentario"
                            inputType = "textarea"
                            inputPlaceholder  ="Comentario"
                            inputValue        ={this.state.txtcomentario||null}
                            inputErrorMsg     ={this.state.errorcometario||null}
                            inputChangeHandler={this.onChangeHandler}
                            inputBlurHandler  ={this.onBlurHandler}
                        />
                    </fieldset>
                    <br/>
                    <button onClick={this.onClickHandler}>Enviar</button>
                    <div>
                        {this.state.error}
                    </div>
                </Body>
            </div>
        );
    }
}

export default Encuesta; 

