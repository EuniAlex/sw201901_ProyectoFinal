import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Product from '../Product'


function ProductList(props) {
  return (
    <Segment>
      <Grid>
        <Grid.Row columns={4}>
          {props.products.map(p => {
            return (
              <Grid.Column>
                <Product
                  key={p._id}
                  name={p.desc}
                  picture={p.image}
                  price={p.precio}
                  year={p.year}
                  modelo={p.modelo}
                  marca={p.marca}
                  status={p.stock}
                  onSaveProduct={() => props.onSaveProduct(p._id)}
                  onIncrementProduct={() => props.onIncrementProduct(p._id)}
                  onRemoveProduct={() => props.onRemoveProduct(p._id)}
                />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default ProductList
