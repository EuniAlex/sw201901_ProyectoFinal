import React, { Component } from 'react'
import { Container, Grid, Header ,Segment, Input } from 'semantic-ui-react';
import SearchForm from '../SearchForm'
import Titulo from '../titulo/titulo'
import ProductList from '../ProductList';
import CartList from '../CartList';
import '../Menu/style.css';
import axios from 'axios';
import Order from '../Order';


class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      products: [],
      cart: [],
      tag: '',
      isLoading:false,
      error: false,
    }
    this.OnChangeHandler = this.OnChangeHandler.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
    this.handlerOpenOrder = this.handlerOpenOrder.bind(this)
  }
  componentDidMount(){
    this.setState({isLoading:true});
       axios.get('api/catalogo/GPro')
       .then((resp)=>{
         console.log(resp);
           this.setState({products:resp.data, isLoading:false});
       })
       .catch( (err)=>{
        alert(err);
      });
  }
  handlerOpenOrder(event) {
    event.preventDefault()
    this.setState({ openOrder: true })
  }
  renderOpenOrder() {
    if (this.state.openOrder) {
      return (
        <Order
          sum={this.state.sum}
          onClearCart={this.handlerClearCart}
        />
      )
    }
  }
  onClickHandler(){
    var apiUrl = '';
    if(this.state.tag != ''){
      apiUrl='/api/catalogo/GProByTags/' + this.state.tag;
    }
    else{
      apiUrl = 'api/catalogo/GPro';
    }
      //console.log(this.state);
      axios.get(apiUrl)
      .then((resp)=>{
        console.log(resp);
        this.setState({products: resp.data, isLoading:false, hasErrors:false});
      })
      .catch((err)=>{
        console.log("tag");
        this.setState({tag:null, isLoading:false, hasErrors:err});
      })
    
  }
  OnChangeHandler(event){
    this.setState({tag: event.target.value})
  }
  render() {

    return( 
      <div className='busque'> 
      <Segment>
        <div className='titulo'><Titulo/></div>
        <SearchForm clicked={this.onClickHandler} tag={this.state.tag} Changed={this.OnChangeHandler}/>
        <br/>
      </Segment>>
      <Grid>
         
         { (this.state.isLoading)?"...Cargando": null}
         <Grid.Column width={12}>
         
           <ProductList
             products={this.state.products}
           />
         </Grid.Column>
         <Grid.Column width={4}>
           <CartList
             items={this.state.cart}
             total={this.state.total}
             onOpenOrder={this.handlerOpenOrder}
           />
           {this.renderOpenOrder()}
         </Grid.Column>
       </Grid>
    </div>

    )
    
  }
  
}

export default Navigation;
