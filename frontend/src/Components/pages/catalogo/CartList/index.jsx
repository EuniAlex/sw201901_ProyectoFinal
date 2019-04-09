import React, { Component } from 'react'
import Format from '../numberFormat/index'
import { Card, Icon, Button, Grid } from 'semantic-ui-react'

import Cart from '../Cart'

class CartList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            Carrito de Compras MaxiRepuestos
            <Icon size="large"  />
          </Card.Header>
        </Card.Content>
        <Card.Content>
        {this.props.items.map(p => {
          return (
          <Cart
            key={p => p._id}
            // img={p.img}
            name={p => p._id}
            total={p.precio}
          />
          )
        })}
        </Card.Content>
        <Card.Content extra>
          <Button
            basic
            color='green'
            compact
            size="medium"
            onClick={this.props.onOpenOrder}
            >Proceder al Pago ({this.props.total} productos)
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default CartList;
