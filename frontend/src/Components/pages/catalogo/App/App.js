import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import Menu from '../Menu';
import ProductList from '../ProductList';
import CartList from '../CartList';
import Order from '../Order';
import style from '../App/App.css';
// import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openOrder: false,
      total: 0,
      sum: 0,
      products: [
        {
          id: 1,
          name: 'Aceites Honda ',
          picture: 'https://scontent.ftgu3-1.fna.fbcdn.net/v/t1.0-9/41965086_1644297555674909_1668695112047132672_n.png?_nc_cat=109&_nc_ht=scontent.ftgu3-1.fna&oh=e341b9ac38b2843a31edcbe1af761e11&oe=5D43F3BD',
          price: 260,
          datails: 'Recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Honda',
          status: 5,
        },
        {
          id: 2,
          name: 'Discos',
          picture: 'https://scontent.ftgu3-2.fna.fbcdn.net/v/t1.0-9/41934615_1644299319008066_6229192584959361024_n.jpg?_nc_cat=108&_nc_ht=scontent.ftgu3-2.fna&oh=8f77e6b56630a61f827ec29d6eadd363&oe=5D07C1C1',
          price: 3000,
          datails: 'Recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Varios',
          status: 6,
        },
        {
          id: 3,
          name: 'Turbo',
          picture: 'https://scontent.ftgu3-2.fna.fbcdn.net/v/t1.0-9/15621888_1027208427383828_5639995354662069995_n.jpg?_nc_cat=111&_nc_ht=scontent.ftgu3-2.fna&oh=337beb2ee1d2c78d3bc9a25bd5d1ef4a&oe=5D088AE4',
          price: 1200,
          datails: 'Recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Garret',
          status: 2,
        },
        {
          id: 4,
          name: 'Limpia Parabrisas ',
          picture: 'https://scontent.ftgu3-2.fna.fbcdn.net/v/t1.0-9/14595782_969339713170700_9131023532380028608_n.jpg?_nc_cat=110&_nc_ht=scontent.ftgu3-2.fna&oh=c867adc5ab15f81f91ccff9841eaab29&oe=5D4FAC43',
          price: 500,
          datails: 'Recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Varios',
          status: 6,
        },
        {
          id: 5,
          name: 'Bujias ',
          picture: 'https://scontent.ftgu3-1.fna.fbcdn.net/v/t1.0-9/45072021_1693661184071879_2917032849892704256_n.jpg?_nc_cat=101&_nc_ht=scontent.ftgu3-1.fna&oh=62183fdbd2a06bee12ced7385d10c293&oe=5D085269',
          price: 300,
          marca: 'NGK,Konger,Iridium',
          status: 10,
        },
        {
          id: 6,
          name: 'Bufa Treacera',
          picture: 'https://scontent.ftgu3-2.fna.fbcdn.net/v/t1.0-9/45782399_1709812335790097_774830830550777856_n.jpg?_nc_cat=108&_nc_ht=scontent.ftgu3-2.fna&oh=c1a74b71a44e7e5fb7454c923d44ca09&oe=5D4E2EA0',
          price: 1500,
          marca: 'Luman',
          status: 4,
        },
        {
          id: 7,
          name: 'Soportes de Motor',
          picture: 'https://scontent.ftgu3-2.fna.fbcdn.net/v/t1.0-9/44680013_1685401288231202_8081931293362749440_n.jpg?_nc_cat=111&_nc_ht=scontent.ftgu3-2.fna&oh=e36f8f61dec5d06d8ea7e40f33d7e648&oe=5D121FA3',
          price: 800,
          marca: '',
          status: 2,
        },
        {
          id: 8,
          name: 'Banda ',
          picture: 'https://scontent.ftgu3-1.fna.fbcdn.net/v/t1.0-9/44038410_1679007278870603_2825952321714782208_n.jpg?_nc_cat=102&_nc_ht=scontent.ftgu3-1.fna&oh=c3189ca4ce1508681bacabe231aaef4d&oe=5D085A36',
          price: 200,
          marca: 'RCK',
          status: 4,
        },
        {
          id: 9,
          name: 'Clush ',
          picture: 'https://scontent.ftgu3-2.fna.fbcdn.net/v/t1.0-9/44593792_1685397188231612_3864968622162051072_n.jpg?_nc_cat=104&_nc_ht=scontent.ftgu3-2.fna&oh=bda67679f59992f5a5f4cb8f4a8988db&oe=5D4965D8',
          price: 1500,
          marca: 'Fic',
          status: 3,
        },
        {
          id: 10,
          name: 'Amortiguadores',
          picture: 'https://scontent.ftgu3-2.fna.fbcdn.net/v/t1.0-9/44445857_1681763275261670_3698020271249162240_n.jpg?_nc_cat=104&_nc_ht=scontent.ftgu3-2.fna&oh=8d9398900fdb0cbef89a3c929395fbd8&oe=5D4DAEF4',
          price: 800,
          marca: 'Shock,KIR',
          status: 4,
        },
        {
          id: 11,
          name: 'Puntas de Flecha ',
          picture: 'https://scontent.ftgu3-2.fna.fbcdn.net/v/t1.0-9/44752971_1685401984897799_3568609831424098304_n.jpg?_nc_cat=108&_nc_ht=scontent.ftgu3-2.fna&oh=e655bd35aa1d5c71c1234ef3fc025a5f&oe=5D10ED95',
          price: 1500,
          marca: 'Inter-Brand',
          status: 3,
        },
        {
          id: 12,
          name: 'Filtros',
          picture: 'https://scontent.ftgu3-1.fna.fbcdn.net/v/t1.0-9/43401217_1667699186668079_7790262727171112960_n.png?_nc_cat=100&_nc_ht=scontent.ftgu3-1.fna&oh=cc45518410c4672831270f3f5a7e78b5&oe=5D489A88',
          price:100,
          marca: 'RCK',
          status: 10,
        }
      ],
      cart: [],
    }

    this.handleSaveProduct = this.handleSaveProduct.bind(this)
    this.handlerAddProduct = this.handlerAddProduct.bind(this)
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this)
    this.handlerOpenOrder = this.handlerOpenOrder.bind(this)
    this.handlerClearCart = this.handlerClearCart.bind(this)
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

  handlerRemoveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)
    let cart = this.state.cart.find(p => p.id === productId)
    let indexCart = this.state.cart.findIndex(x => x.id === cart.id)

    var statusCopy = Object.assign({}, this.state);
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

  handleSaveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)

    var productCart = {
      id: product.id,
      name: product.name,
      img: product.picture,
      price: product.price,
      order: 1,
      total: product.price
    }

    var exist = this.state.cart.find(p => p.id === productId)
    if (undefined !== exist && exist !== null) {
      let indexCart = this.state.cart.findIndex(x => x.id === exist.id)
      this.handlerAddProduct(indexCart, indexProduct)
    }else{
      var statusCopy = Object.assign({}, this.state);
      statusCopy.products[indexProduct].status -= 1
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
      this.setState({
        cart: this.state.cart.concat([productCart]),
        statusCopy
      })
    }
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

  render() {
    return (
      <Container className={style.root}>
        <Menu/>
        <Grid>
          <Grid.Column width={12}>
            <ProductList
              products={this.state.products}
              onSaveProduct={this.handleSaveProduct}
              onIncrementProduct={this.handleSaveProduct}
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
      </Container>
    )
  }
}

export default App;
