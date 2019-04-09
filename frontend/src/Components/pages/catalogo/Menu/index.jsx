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
      sum: 0,
      userID: 0,
      products: [],
      openOrder: false,
      cart: [],
      tag: '',
      isLoading:false,
      error: false,
    }
    console.log(this.state.userID);
    this.OnChangeHandler = this.OnChangeHandler.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
    this.handlerAddProduct = this.handlerAddProduct.bind(this)
    this.handlerOpenOrder = this.handlerOpenOrder.bind(this)
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this)
    this.handleSaveProduct = this.handleSaveProduct.bind(this)
    
    this.handlerClearCart = this.handlerClearCart.bind(this)
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

  
  handlerClearCart() {
    this.setState({
      cart: [],
      sum: 0,
      total: 0
    });
  }

  sumProducts(array) {
    var total = 0
    array.forEach(product => total += product.order)
    this.setState({total: total})
  }

  sumTotal(array) {
    var sum = 0
    array.forEach(product => sum += product.total)
    this.setState({sum: sum})
  }




  handlerRemoveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)
    let cart = this.state.cart.find(p => p.id === productId)
    let indexCart = this.state.cart.findIndex(x => x.id === cart.id)
    var nose = 0
    var statusCopy = Object.assign({}, this.state);

   if (indexCart !== -1) { 

     if(statusCopy.cart[indexCart].total === statusCopy.cart[indexCart].price ){
    indexCart !== -1 && statusCopy.cart.splice( indexCart, 1 );
    this.setState(statusCopy)
    statusCopy.products[indexProduct].status += 1
    alert('El producto fue eliminado del carrito de compras')


  } else {

    statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].price
    statusCopy.products[indexProduct].status += 1
    statusCopy.cart[indexCart].order -= 1
    statusCopy.total -= 1
    statusCopy.sum -= statusCopy.cart[indexCart].price

    this.setState(statusCopy)


  }
}
else{ 
    alert('No hay Productos en el carrito')

  }
  }


  handleSaveProduct(productId) {
    let product = this.state.products.find(p => p._id === productId);
    let indexProduct = this.state.products.findIndex(x => x._id === product._id)

    var productCart = {
      id: product._id,
      name: product.desc,
      price: product.precio,
      order: 1,
      total: product.precio
    }

    var exist = this.state.cart.find(p => p._id === productId)
    if (undefined !== exist && exist !== null) {
      let indexCart = this.state.cart.findIndex(x => x._id === exist._id)
      this.handlerAddProduct(indexCart, indexProduct)
    }else{
      var statusCopy = Object.assign({}, this.state);
    
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
      this.setState({
        cart: this.state.cart.concat([productCart]),
        statusCopy
      })
    }
  }

  handlerAddProduct(indexCart, indexProduct){
    var statusCopy = Object.assign({}, this.state);
    if (statusCopy.products[indexProduct].status !== 0) {
      statusCopy.cart[indexCart].total += statusCopy.cart[indexCart].price
      statusCopy.cart[indexCart].order += 1
      statusCopy.products[indexProduct].status -= 1
      this.setState(statusCopy)
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
    } else {
      alert('Producto inexistente')
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
             onSaveProduct={this.handleSaveProduct}
             onIncrementProduct={this.handlerAddProduct}
             onRemoveProduct={this.handlerRemoveProduct}    
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
