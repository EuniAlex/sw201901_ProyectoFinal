import React, {Component} from 'react'; 
import Header from '../../generics/header/Header';
import Body from '../../generics/body/Body';
import Card from '../../generics/card/Card';
//import Image from './img_avatar.png';
import axios from 'axios';

class Catalogo extends Component{
    render(){
        return(
            <div>
                <Header title= "Catalogo de Productos"></Header>
                <Body>                    
                  <Card
                    //src={Image}
                    alt="Aceite Honda"
                    nomProducto = "Aceite Honda"
                    precProducto = "L.190"
                    descProducto = "Aceite Honda 10W30 Semi-Sintetico"
                  />
                  <Card
                  />
                </Body>
            </div>
        );
    }
}

export default Catalogo;