import React, {Component} from 'react';
import Image from './img_avatar.png';

import './Card.css';

class Card extends Component{
  render(){
      return(
        <div className="card">
          <img 
          src= {Image} 
          alt= {this.props.altmage || ''} />
          <h1>{this.props.nomProducto || ''}</h1>
          <p className="price">{this.props.precProducto || ''}</p>
          <p>{this.props.descProducto || ''}</p>
          <p><button>Add to Cart</button></p>
      </div>
      );
  }
}

export default Card;





// class Card extends Component{
//   render(){
//       return(
//         <div className="card">
//         <img src={Image} alt="Avatar"/>
//         <h1>Aceite Honda</h1>
//         <p className="price">L. 190.00</p>
//         <p>Aceite Honda 10w30 semi-sintetico</p>
//         <p><button>Add to Cart</button></p>
//       </div>
//       );
//   }
// }