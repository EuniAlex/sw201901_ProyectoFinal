import React, { Component } from 'react'
import Format from '../numberFormat'
import { Card, Statistic, Button } from 'semantic-ui-react'

class  Order extends Component {
  constructor(props){
    super(props)
    this.state = {
      userEmail : ""
    }
  }
  render(){
    return(
      <Card>
        <Card.Content header='Cantidad a pagar' />
        <Card.Content extra>
          <Statistic size='mini'>
            <Statistic.Value>
              <Format number={this.props.sum}/>
            </Statistic.Value>
          </Statistic>
          <Button
            basic
            color='green'
            compact
            size="medium"
            floated='right'
            onClick={this.props.onClearCart}
            >Pagar
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default Order
