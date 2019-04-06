import React, { Component } from 'react';
import {Input} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Productlist from '../ProductList/index';
import axios from 'axios';



class searchForm extends Component {
  constructor(){
    super();
    this.state = {
      tag: null,
      isLoading: false,
      hasErrors: false
    }
  }
  componentDidMount(){
    console.log("holis");
    //let {tagproduct} = this.props.match.params;
    console.log("holis1");
    axios.get(`/api/catalogo/GProByTags/${"honda"}`)
      .then((resp)=>{
        this.setState({tag: resp.data, isLoading:false, hasErrors:false});
      })
      .catch((err)=>{
        console.log("holis");
        this.setState({tag:null, isLoading:false, hasErrors:err});
      })
  }

  render() {
    return( 
      <Input
        action={{ icon: 'search', color: 'teal',
        onClick: ()=> this.onClickHandler(Productlist(this.state.tag)) }}
        placeholder='Busqueda de producto...' />

    )
    
  }
  
}

export default searchForm;
