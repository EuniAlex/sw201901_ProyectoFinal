import React, { Component } from 'react';
import { Container, Grid, Header ,Segment, Input } from 'semantic-ui-react';
import Menu from '../Menu';
import ProductList from '../ProductList';
import CartList from '../CartList';
import style from '../App/App.css';
import Titulo from '../titulo/titulo'
import '../Menu/style.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


// import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openOrder: false,
      total: 0,
      sum: 0,
      products: [],
      cart: [],
      isLoading:false,
      error: false,
    }


  }


 




  render() {
    return (
      <Container className={style.root}>
        <Menu/>
        {/* <Grid>
         
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
        </Grid> */}
      </Container>
    )
  }
}

export default App;
