import React from 'react'
import Format from '../numberFormat'
import { Card, Image, Label, Button } from 'semantic-ui-react'


function Product(props) {
  return(
    <Card style={{ marginTop: 15 }}>
      <Image size="big" src={props.picture}/>
      <Card.Content>
        <Card.Header style={{fontSize: 15}}>{props.name}</Card.Header>
        <Card.Meta>
        <Label>L. {props.price}</Label>
        </Card.Meta>
        <Card.Description>
          <Label>{props.marca}</Label>
          <Label>{props.modelo}</Label>
          <Label>{props.year}</Label>
          <Label>{props.status}  disponibles en stock</Label>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          basic
          compact
          color='blue'
          floated='right'
          onClick={props.onSaveProduct}
        >
          Agregar al carrito
        </Button>
      </Card.Content>
      <Card.Content extra>
        {/* <Button.Group floated='right'>
          <Button
            compact
            onClick={props.onIncrementProduct}
            >+</Button>
          <Button
            compact
            onClick={props.onRemoveProduct}
            >-</Button>
        </Button.Group> */}
      </Card.Content>
    </Card>
  )
}

export default Product
